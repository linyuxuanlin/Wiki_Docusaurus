---
id: 基于Bitwarden搭建密码管理器（群晖Docker）
title: 基于 Bitwarden 搭建密码管理器（群晖 Docker）
---

【撰写中】

## 参考与致谢

- [群晖 NAS 高级服务 - docker 部署 bitwarden 全平台密码管理器](https://www.ioiox.com/archives/70.html)
- [使用群晖搭建第三方 Bitwarden 密码服务器](https://ppgg.in/blog/10271.html#comment-8463)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

本文介绍如何在自己的群晖上使用 Docker 对全平台密码管理服务器 Bitwarden 进行私有部署。

目前的密码管理器方案有 1Password，Lastpass，KeePass，Bitwarden 等，这几种方案各有优劣。在这里我的需求是可多端同步使用，开源可自部署，且有自动填充的功能，同时兼顾界面美观，所以我选择了在自己的群会上部署 Bitwarden 服务。

首先，你需要一个外部访问群晖的 IP 或域名，且已经申请了 SSL 证书。详情可参考文章 [**基于 acme.sh 自动申请域名证书（群晖 Docker）**](https://wiki-power.com/%E5%9F%BA%E4%BA%8Eacme.sh%E8%87%AA%E5%8A%A8%E7%94%B3%E8%AF%B7%E5%9F%9F%E5%90%8D%E8%AF%81%E4%B9%A6%EF%BC%88%E7%BE%A4%E6%99%96Docker%EF%BC%89)


## 在群晖 Docker 上部署

### 建立存放数据的文件夹

我们在 `docker` 目录下建立存放 Bitwarden 数据的文件夹（比如 `docker/bitwarden`）。

### 下载镜像并配置容器

打开群晖 Docker 套件，下载 `bitwardenrs/server` 镜像，双击启动，勾选 `启用自动重新启动`，然后进入 `高级设置`。

在 `卷` 页面配置挂载的文件夹，点击 `添加文件夹`，选择本地的 `docker/bitwarden` 路径，装载路径填 `/data`（默认不可变）：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210503211711.png)

在 `端口设置` 页面，手动设置容器端口 80 所对应的本地端口（比如我设置为 `8003`）：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210503211759.png)

随后完成配置，启动容器。输入群晖本地 IP:8003，我们就能看到 Bitwarden 的登陆页面了。但是当我们创建账户后登录时，会看到这样一条提示：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210503212146.png)

这是因为，Docker 容器本身没有提供 https 端口配置，而 Bitwarden 又只能够通过 https 来进行登录（SSL 加密防止中间人攻击）。所以，在这里我们必须使用群晖自带的反向代理服务，通过 https 来访问内部 http 端口了。

## 配置 HTTPS 访问与证书


### 配置反代

依次打开 **控制面板** - **登录门户** - **高级** - **反向代理服务器**。

我们新增名称为 `bitwarden` 的反代服务。按照下图填写配置：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210503213004.png)

- `来源`
  - `协议`：选择 `HTTPS`
  - `主机名`：填写外部访问的域名
  - `端口`：填写外部访问的端口
  - 勾选 `启用 HSTS`
- `目的地`
  - `协议`：选择 `HTTP`
  - `主机名`：填写 `localhost`
  - `端口`：填写内部访问的端口（即刚刚容器 `80` 端口映射的端口，我的是 `8003`）

### 配置