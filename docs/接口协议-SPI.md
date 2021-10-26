---
id: 接口协议-SPI
title: 接口协议 - SPI
---

SPI（Serial Peripheral Interface）是一种全双工的同步通信协议，其数据传输速率为 8 Mbit。SPI 有一个主设备，可连接一个或多个从设备。连接多设备时，需要用到片选引脚（chip select，CS）。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210911095950.png)

## SPI 的引脚

CS 信号由主设备驱动，用于仲裁 SPI 总线上通信的优先级。当 CS 线上为低电平时，就会激活 SPI 通信。

SDI（serial data in）/SDO（serial data out）描述了相对于主机的数据流的方向，但更多时候在板子上出现的是 MOSI（Master Out Slave In）和 MISO（Master In Slave Out）。对应地，SDO 在主机上是 MOSI，在从机上是 MISO；SDI 在主机上是 MISO，在从机上是 MOSI。

SCLK（serial clock）是由主机驱动的方波时钟信号。SDO 和 SDI 上的信号根据 SCLK 上的时钟信号来进行锁存操作。一个时钟周期传输 1bit 数据，所以传输速率等同于主机产生的时钟频率

## SPI 数据锁存操作

- SPI 数据根据 SCLK 的上升或下降沿进行锁存。
- 锁存数据的边沿，称为临界边沿。

## 参考与致谢

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
