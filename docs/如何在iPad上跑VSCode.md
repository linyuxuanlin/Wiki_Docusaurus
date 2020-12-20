---
id: 如何在iPad上跑VSCode
title: 如何在 iPad 上跑 VS Code
---

注：本教程基于 code-server v3.8.0, CentOS 8.2.

## 参考与致谢

- [在浏览器上运行 VSCode（旧）](在浏览器上运行VSCode（旧）)
- [GitHub 改 Host](GitHub改Host)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

screen 用户同步

## 拓展

### 命令的参数

## 配置服务器

首先，你需要有一台 24h 不停机的服务器（推荐买阿里云/腾讯云学生机，只需 ¥9.9/月）  
为保证使用体验，这里推荐服务器的配置：

- 2 核以上
- 1 GB 内存以上

刷 Linux（这里我使用 CentOS 8.2），确保 ssh 能正常连上即可。

## 安装 code-server

在新的版本下（≥v3.8.0），可以直接使用脚本安装：

```shell
curl -fsSL https://code-server.dev/install.sh | sh
```

如果发现半天下载不下来，多半是因为 DNS 污染，解决方法参考 [**GitHub 改 Host**](GitHub改Host) 这篇文章。

## 运行 code-server

使用命令：

```shell
export PASSWORD="设置一个访问密码" && ./code-server --port 80 --host 0.0.0.0
```

如果没有出现错误，那就打开浏览器，输入你服务器的 IP 地址并访问，就可以看到一个在线的 VS Code 了。

## 设置后台运行
