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

## I2C 的引脚

- **SCL**（serial clock）：由主机产生的方波，用来控制传输速率和数据的锁存。
- **SDA**（serial data）：这是一个 **半双工、同步** 的信号线，传输的数据包括地址、控制信号与通信数据。

## I2C 地址

- I2C 地址划分，是 7 bit 地址加上 1 bit 读写指示。
- I2C 总线上的每个设备都必须有一个唯一的地址，如果地址重复会出问题。有些设备的 I2C 地址是可以编程设置的。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211027112717.png)

## I2C 通信

- **START**：主机在 SCL 为高时，拉低 SDA 发起。
- **STOP**：主机在 SCL 为高时，释放 SDA（变为高电平）发起。
- **ACK**（acknowledge）：I2C 传输都是随着每个 SCL 脉冲，每次传输 1 个字节（8 个位）。每次传输的第 9 个脉冲被保留为从机的确认信号，每次的 ACK 信号表示前一次传输成功。

I2C 传输句段示例（这一段传输的值为 11001101）：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211104172952.png)

1. 主机拉低 SDA 电平以产生 START 信号。
2. 第一个位被设置，主机拉低 SCL，将时钟信号经过 DAC 进行输出。
3. 传输到第九个位时，主机不会拉低 SDA，如果从机确认传输完整，则将 SDA 拉低让主机知道。
