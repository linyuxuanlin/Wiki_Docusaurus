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

## 建立存放数据的文件夹

首先，我们建立存放 Bitwarden 数据的文件夹（比如我是 `docker/bitwarden`）。