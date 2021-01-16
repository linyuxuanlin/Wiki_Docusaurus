---
id: Docker学习笔记
title: Docker 学习笔记
---

开发中最麻烦的事情就是配环境，运行环境不一样，可能导致不一样的结果。  
怎样通过 Docker 来解决这个问题呢？

## Docker 是什么


Docker 把软件本身和它所需的运行环境打包起来，你用的时候就不需要再去配环境了（环境都在包里），这样就能确保你的环境和开发者的一模一样，杜绝因运行环境而出现的错误。

说起来，虚拟机也是这个原理，但虚拟机的缺点是相对庞大、占用资源也多。简而言之，就是可以，但没必要。Docker 相比虚拟机，不是模拟一个完整的操作系统，而是对进程进行隔离，占用少、启动快、体积小。


## Docker 安装配置

各版本系统的下载安装详见 [**Install Docker Engine**](https://docs.docker.com/engine/install/)

- [**CentOS 安装 Docker**](https://wiki-power.com/unlist/CentOS%E5%AE%89%E8%A3%85Docker)

验证是否安装成功：

```shell
docker version
```

### 配置权限

Docker 需要 `sudo` 权限。为了避免每次使用都要获取权限，可以把用户加入 Docker 用户组：

```shell
sudo usermod -aG docker $USER
```


### 启动 Docker

按如下命令启动 Docker：

```shell
sudo systemctl start docker
```

（也可以使用 `sudo service docker start`）


配置开机自启动（可选）：

```shell
sudo systemctl enable docker
```

## Docker 基础知识

### Docker 三要素

Docker 有三要素，分别是 image, container, repository. 

- **image（镜像）**：把软件与环境打包在一起，可以看作是一个模板
- **container（容器）**：把 image 实例化，相当于把模板拿来用
- **repository（仓库）**：【待补充】


image 与 container 是一对多的关系，就是同一个模子印多个饼，每个饼可以加不一样的佐料调味。




## 基本操作

### image


```shell
# 列出本地所有 image 文件
docker image ls
```

```shell
# 删除 image 文件
docker image rm [imageName]
```

虽然 image 可以自己造，但一般我们都是直接用别人的，既省时省力，又有利于维护环境统一。  
你可以在 [**Docker Hub**](https://hub.docker.com/) 搜索和下载大家分享的 image 文件，拣下载量较多的用。

## 参考与致谢

- [Docker 入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
