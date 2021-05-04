---
id: 基于RSSHub搭建RSS生成器（群晖Docker）
title: 基于 RSSHub 搭建 RSS 生成器（群晖 Docker）
---

RSSHub 是一个开源、简单易用、易于扩展的 RSS 生成器，可以给任何奇奇怪怪的内容生成 RSS 订阅源。

## 参考与致谢 

- [RSSHub](https://docs.rsshub.app/)
- [在群晖中使用 Docker 安装 RSSHub](在群晖中使用 Docker 安装 RSSHub)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。


## 在群晖 Docker 上部署


### 下载镜像并配置容器

打开群晖 Docker 套件，下载 `diygod/rsshub` 镜像，双击启动，勾选 `启用自动重新启动`，然后进入 `高级设置`。

在 `端口设置` 页面，手动设置容器端口 1200 所对应的本地端口（比如我设置为 `8004`）：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210504085806.png)

随后完成配置，启动容器。输入群晖本地 IP:8004，如果能看到 RSSHub 的页面，就证明安装成功了。


