---
id: 模块设计-CAN通信
title: 模块设计 - CAN 通信
---

CAN（Controller Area Network）是一种多主方式的串行通讯总线。基本设计规范要求有高的位速率、高抗电磁干扰性，而且能够检测出产生的任何错误，当信号传输距离达到 10Km 时 CAN-bus 仍可提供高达 5Kbps 的数据传输速率。

CAN 模块的设计，是基于 CAN 芯片，对串行信号（RX/TX）与 CAN 差分信号（CANH/CANL）进行互相转换。以下是两种较为常用的 CAN 收发器。

## 基于 TJA1050

完整资料请见 [**Modularity_of_Functional_Circuit/ 模块设计 - CAN 通信 / 基于 TJA1050**](https://github.com/linyuxuanlin/Modularity_of_Functional_Circuit/tree/master/%E6%A8%A1%E5%9D%97%E8%AE%BE%E8%AE%A1-CAN%E9%80%9A%E4%BF%A1/%E5%9F%BA%E4%BA%8ETJA1050)

### 特性

- 供电：**5 V**（4.75-5.25 V）
- 高速率：60 Kbps-1 Mbps
- 完全符合 ISO 11898 标准
- 低电磁辐射（EME）
- 具有贷款输入范围的差动接收器，可抗电磁干扰（EMI）
- 可以连接至少 110 个节点
- 没有上电的节点不会对总线造成干扰

### 工作模式

TJA1050 有两种工作模式（高速 / 静音），由引脚 S（RS） 来控制。

#### 高速模式

高速模式是普通的工作模式，将引脚 S 接地即可进入该模式。因引脚 S 内置下拉，所以即使外部没有连接，默认也是高速模式。

在这个模式中，总线输出信号有固定的斜率，并以最快的速度切换，适合于最大的位
速率和，或最大的总线长度，此时它的收发器循环延迟最小。

#### 静音模式

静音模式中，发送器是禁能的，不管 TXD 的输入信号，所以运行在非发送状态中消耗的电源电流，和在隐形状态中是一样的。将引脚 S 接高电平就可以进入静音模式。

静音模式中，节点可以被设置成对总线绝对无源的状态，此时微控制器不再直接访问 CAN 控制器，TJA1050 将会释放总线。

### 芯片管脚

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210607102222.png)

### 参考电路

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210607115611.png)

如图，CAN 协议控制器（例如单片机）通过串行线（RX/TX）连接到收发器，在收发器上转换为 CAN 信号（CANH/CANL），并通过引脚 S 来选择高速 / 静音模式。

## 基于 SN65HVD230

完整资料请见 [**Modularity_of_Functional_Circuit/ 模块设计 - CAN 通信 / 基于 SN65HVD230**](https://github.com/linyuxuanlin/Modularity_of_Functional_Circuit/tree/master/%E6%A8%A1%E5%9D%97%E8%AE%BE%E8%AE%A1-CAN%E9%80%9A%E4%BF%A1/%E5%9F%BA%E4%BA%8ESN65HVD230)

### 特性

- 由 **3.3 V** 单电源供电
- 可以连接至少 120 个节点
- 低电流待机模式
- 速率：最高 1 Mbps

### 工作模式

SN65HVD230 有三种工作模式（高速 / 斜率 / 静音），由引脚 S（RS） 来控制。一般我们使用高速模式。

#### 高速模式

将 Rs 强下拉至 GND 以启用高速模式。

#### 斜率模式

使用 10k 至 100k 之间的电阻，将 Rs 下拉至 GND。具体电阻阻值与速率的关系，请参考数据手册。

#### 低功耗模式

将 Rs 强上拉至 3.3V

### 芯片管脚

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210607155539.png)

### 参考电路

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210607171051.png)

PESD2CAN 是 CAN 专用的 ESD 保护二极管，保护芯片免受静电和其他瞬变因素的损害。

参考的 PCB 布局如下：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210607171427.png)

## TJA1050 与 SN65HVD230 的异同

TJA1050 与 SN65HVD230 主要的区别是工作电压的不同，TJA1050 工作在 5 V 环境下的，而 SN65HVD230 工作在 3.3 V 环境下。

共同的注意事项:

- CAN 信号线在 PCB 布线的时候，要走差分线。
- 末端电阻一般在 CAN 线起始端和末端才需要使用，中间端不需要外加。
- 如果需要对总线的共模电压进行过滤和稳定，也可以使用分体式末端电阻（如上文所示，分为两个 60 Ω 电阻，中间加连接到地的电容）。

## 参考与致谢

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
