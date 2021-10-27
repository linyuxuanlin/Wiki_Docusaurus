---
id: 通信协议-I2C
title: 通信协议 - I2C
---

## 参考与致谢

- 《Analog Engineer’s Pocket Reference》

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

在 I2C（Inter-Integrated Circuit）总线上，从机以它的 I2C 地址被选择。这样子可以用在一个主机上通过两根线控制多个从机。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211026174634.png)

## IIC 的引脚

- **SCL**（serial clock）：由主机产生的方波，用来控制传输速率和数据的锁存。
- **SDA**（serial data）：