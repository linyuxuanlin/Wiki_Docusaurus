---
id: Docker学习笔记
title: Docker 学习笔记
---

开发中最麻烦的事情就是配环境，运行环境不一样，可能导致不一样的结果。怎样通过 Docker 来解决这个问题呢？

## Docker 是什么


Docker 把软件本身和它所需的运行环境打包起来，你用的时候就不需要再去配环境了（环境都在包里），这样就能确保你的环境和开发者的一模一样，杜绝因运行环境而出现的错误。

说起来，虚拟机也是这个原理，但虚拟机的缺点是相对庞大、占用资源也多。简而言之，就是可以，但没必要。Docker 相比虚拟机，不是模拟一个完整的操作系统，而是对进程进行隔离，占用少、启动快、体积小。


## Docker 基本概念

Docker 有三个基本概念：

- **镜像 / 文件（image）**：将软件与环境封装在一起，就成了一个镜像
- **容器（container）**：借用面向对象的思想，镜像是一个类，容器就是将类实例化，生成的一个对象。镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等
- **仓库（repository）**：类似一个代码控制中心，用来保存镜像。

## Docker 安装配置

各版本系统的下载安装详见 [**Install Docker Engine**](https://docs.docker.com/engine/install/)

- [CentOS 安装 Docker](https://wiki-power.com/unlist/CentOS%E5%AE%89%E8%A3%85Docker)

安装完成后，运行下面的命令，验证是否安装成功：

```shell
docker version
```

### 配置权限

Docker 需要 `sudo` 权限。为了避免每次使用都要获取权限，可以把用户加入 Docker 用户组：

```shell
sudo groupadd docker
sudo usermod -aG docker $USER
```

重启 Docker 后测试：

```shell
docker run hello-world
```

能看到 `hello-world` 的提示信息则为成功。

### 启动 Docker

Docker 安装完成后，需要启动其进程：

```shell
sudo systemctl start docker
或
sudo service docker start
```

也可以配置开机自启动：

```shell
sudo systemctl enable docker
```

## 基本操作

### image 文件

Docker 把应用程序及其依赖，打包在 image 文件里面。image 文件可以看作是容器的模板，根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。

```shell
# 列出本地所有 image 文件
docker image ls

# 删除 image 文件
docker image rm [imageName]
```

为了节省时间与规范化，尽量用别人制作好的 image 文件（尽量不要自己制作，即使要定制，也应该基于别人的 image 文件进行加工）。  
你可以在 [**Docker Hub**](https://hub.docker.com/) 搜索和下载大家分享的 image 文件，尽量挑选最多人用的那一个。

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
