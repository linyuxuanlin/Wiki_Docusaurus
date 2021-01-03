---
id: Yarn换源加速国内访问
title: Yarn 换源加速国内访问
---

## 背景

Yarn 默认源地址在国外，国内访问速度慢。  
以下命令查看当前使用的镜像源：
```bash
yarn config get registry
```

## 解决方法

使用软件 yrm 快速切换镜像源。

### 安装 yrm

```bash
npm install -g yrm
```

### 列出当前可用的镜像源

```
yrm ls
```

### 选择一个镜像源进行切换（淘宝）

```
yrm use taobao
```

### 测试访问速度

```
yrm test taobao
```

## 参考与致谢 

* [yarn 国内加速，修改镜像源](https://learnku.com/articles/15976/yarn-accelerate-and-modify-mirror-source-in-china)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。