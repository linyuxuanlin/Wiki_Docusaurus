---
id: Flip-基于全志F1C200s的Linux最小系统板
title: Flip - 基于全志 F1C200s 的 Linux 最小系统板
---

项目仓库：[**linyuxuanlin/Flip**](https://github.com/linyuxuanlin/Flip)

## 参考与致谢

- [【目录】全志 F1C100S/F1C200S 学习笔记](https://blog.csdn.net/p1279030826/article/details/113370239)
- [peng-zhihui/Planck-Pi](https://github.com/peng-zhihui/Planck-Pi)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

F1C100s/F1C200s 基于 ARM9 CPU 架构，封装相同，区别仅仅是 F1C100S 内置 32MB DDR1 内存，而 F1C200S 为 64MB。

除此之外，这个芯片还集成了 USB OTG、UART、SPI、TWI、TP、SD/MMC、CSI 等通用外设。

## 基本参数

F1C200s 的系统架构框图：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220422152227.png)

典型应用示意图：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220422152450.png)