---
id: Docker学习笔记
title: Docker 学习笔记
---

## Docker 是什么？

Docker 将软件与所需的环境捆绑在了一起，提供给用户使用。这样可以避免在不同的机器上出现不同的结果（或因环境不同而出现的错误）。

可以类比虚拟机，它也是带环境安装的一种解决方案。但虚拟机过于庞大、占用资源多，所以也产生了另一种虚拟化技术叫 Linux 容器（Linux Containers/LXC）。其原理并非模拟一个完整的操作系统，而是对进程进行隔离（在进程外套了一个保护层）。相比虚拟机，容器资源占用少、启动快、体积小。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200416201438.png)

Docker 属于 Linux 容器的一种封装。它将应用程序与该程序的依赖，打包在一个文件里面。行这个文件，就会生成一个虚拟容器。程序就运行在这个虚拟容器里面，不必担心环境问题。

> Docker 的主要用途，目前有三大类：
>
> - **提供一次性的环境**。比如，本地测试他人的软件、持续集成的时候提供单元测试和构建的环境
> - **提供弹性的云服务**。因为 Docker 容器可以随开随关，很适合动态扩容和缩容
> - **组建微服务架构**。通过多个容器，一台机器可以跑多个服务，因此在本机就可以模拟出微服务架构

## Docker 基本概念

Docker 有三个基本概念：

- **镜像 / 文件（image）**：将软件与环境封装在一起，就成了一个镜像
- **容器（container）**：借用面向对象的思想，镜像是一个类，容器就是将类实例化，生成的一个对象。镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等
- **仓库（repository）**：类似一个代码控制中心，用来保存镜像。

## Docker 安装配置

各版本系统的下载安装详见 [**Install Docker Engine**](https://docs.docker.com/engine/install/)

安装完成后，运行下面的命令，验证是否安装成功：

```shell
$ docker version
```

### 配置权限

Docker 需要 `sudo` 权限。为了避免每次使用都要获取权限，可以把用户加入 Docker 用户组：

```shell
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
```

重启 Docker 后测试：

```shell
$ docker run hello-world
```

能看到 `hello-world` 的提示信息则为成功。

### 启动 Docker

Docker 安装完成后，需要启动其进程：

```shell
$ sudo systemctl start docker
或
$ sudo service docker start
```

也可以配置开机自启动：

```shell
$ sudo systemctl enable docker
```

## 基本操作

### image 文件

Docker 把应用程序及其依赖，打包在 image 文件里面。image 文件可以看作是容器的模板，根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。

```shell
# 列出本地所有 image 文件
$ docker image ls

# 删除 image 文件
$ docker image rm [imageName]
```

为了节省时间与规范化，尽量用别人制作好的 image 文件（尽量不要自己制作，即使要定制，也应该基于别人的 image 文件进行加工）。  
你可以在 [**Docker Hub**](https://hub.docker.com/) 搜索和下载大家分享的 image 文件，尽量挑选最多人用的那一个。

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
