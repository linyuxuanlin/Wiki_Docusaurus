---
id: RobotCtrl-STM32通用开发套件
title: RobotCtrl - STM32 通用开发套件
---

![](https://cos.wiki-power.com/img/20220416181125.jpeg)

![](https://cos.wiki-power.com/img/20220416181139.jpeg)

项目仓库：[**linyuxuanlin/RobotCtrl**](https://github.com/linyuxuanlin/RobotCtrl)

项目在线预览：

**RobotCtrl_Core**:

<div class="iframe_viewer">
    <iframe 
    scrolling="no"
  src="https://viewer.wiki-power.com/RobotCtrl_Core.html"
></iframe>
</div>

**RobotCtrl_Func**:

<div class="iframe_viewer">
    <iframe 
    scrolling="no"
  src="https://viewer.wiki-power.com/RobotCtrl_Func.html"
></iframe>
</div>

**RobotCtrl_Power**:

<div class="iframe_viewer">
    <iframe 
    scrolling="no"
  src="https://viewer.wiki-power.com/RobotCtrl_Power.html"
></iframe>
</div>

## 设计需求

![](https://cos.wiki-power.com/img/20220527111854.png)

### RobotCtrl_Core 的设计思路

RobotCtrl_Core 核心板的原理图设计包括供电电路、单片机最小系统、USB 通信、B2B 连接器、用户按键与 LED 部分。

RobotCtrl_Core 的供电电路采用的是低压差线性稳压器。其的优势是电路相对简单、输出纹波小、低成本、layout 面积小，缺点是输出功率小。加上相应的去耦电容与电源指示灯，将 USB 端口或 B2B 连接器输入的 5V 电压稳压转换为 3.3V（最大电流为 1A）。

在最小系统的设计中，电源为 3.3V 电源输入，并加相应的电容去耦。另外，ADC 专用电源 VDDA 通过一个 120Ω 的磁珠连接至 VDD，并增加额外的去耦电容。复位电路增加外部按键，触发 NRST 引脚低电平使系统复位。时钟电路增加 HSE 外部高速时钟，从 OSC_IN 与 OSC_OUT 引脚外接无源晶振。启动模式默认选择从片上 Flash 存储器启动，即 BOOT0 为低，BOOT1 为任意电平，使用 10k 电阻将 BOOT0 拉低至地。下载调试电路直接将 SW 接口（DIO/CLK）引出。

USB 通信电路的设计，STM32F4 有内置 USB 外设。外部选用的是 USB Micro 座子，数据线上串联 10Ω 的限流电阻，分别在信号线和电源线上加 TVS 和 ESD 二极管，满足 EMC 需求。

B2B 连接器用于与 RobotCtrl_Func 之间的电源供应与数据通信。在本设计中，两个 B2B 连接器足够将 STM32F407ZE 单片机的所有 IO 都引出，增强了后期的拓展性。

### RobotCtrl_Func 的设计思路

RobotCtrl_Func 的原理图设计主要包含串口通信（RS-232/TTL）、CAN 通信、以太网通信、姿态传感器、超声波接口、红外测距接口（带光耦隔离）、蜂鸣器、SW 下载调试接口、用户按键与 LED、通用 GPIO 接口、电源、B2B 连接器等模块。

串口通信电路提供 TTL 和 RS-232 电平接口。其中，TTL 直接引出 USART1 和 UART5 的 TX/RX 引脚使用，而 RS-232 通信电路是采用 TTL 转 232 电平的芯片，将单片机的 TTL 转换为 RS-232 电平。为提高 EMC 性能，DB9 座子外壳连接引脚可对地接 TVS 二极管，TTL 转 232 芯片需要外加电源去耦与自举电容。

CAN 通信电路基于 CAN 收发芯片搭建，通过 CAN 差分电平传输。CAN 总线上需加 120Ω 末端电阻，以匹配阻抗，减少信号的反射。

以太网通信基于以太网 PHY 芯片，使用 RMII 接口与单片机通信，通过内置隔离变压器的 RJ45 网口外接网线通信。以太网电路的时钟采用外部 25M 无源晶振，且需要独立供电以减小电源干扰，这里使用了与核心板相同的低压差线性稳压器供电方案，为以太网电路单独供电。

四路红外测距传感器接口电路因红外传感器使用的是 12V 供电与信号（NPN 常开型），所以从 RobotCtrl_Power 引出 12V 为其供电，并加上四路光耦隔离芯片，以传输高低电平信号。光耦隔离电路的设计，需要根据电流的大小，计算限流电阻的阻值，确保在数据手册规定的触发电压范围内即可。

姿态传感器模块的设计，采用 MPU6050 模块，预留 I2C 接口与单片机进行通信。

### RobotCtrl_Power 的设计思路

RobotCtrl_Power 原理图设计主要由 XT60 双电源输入、24V 转 12V、24V 转 5V 稳压电路，以及使能开关与电源指示灯、防反接、防过压电路等部分组成。

电源输入采用两个 XT60 座子并联，其中一个端子用于电源输入，另一个端子可外接备用电源，也可以作为电池电源输出供外部使用。

防反接电路采用 MOS 管防反接设计。正常连接电源的情况下，MOS 导通；反接则截止，保护电路。在本设计中，选用了国产 P-MOS 做防反接，并用电阻分压和稳压二极管锁定正向导通时的门极电压。为实现防过压与 ESD 防护，在电源输入端并联 TVS 二极管。

稳压 12V/5V 电路的设计，选用了基于 LMR14050 的 Buck 非隔离开关稳压方案。根据 Buck 拓扑的原理（如图 2-9 所示）与稳压芯片数据手册的参考，分别挑选反馈电阻的阻值，计算比例使输出保持为 12V/5V。在选择电感的型号时，需要注意最大饱和电流需要大于脉动电流，且留足余量；二极管选择肖特基二极管以实现高速开关，其电压和电流也需要满足电路的需求。此外，输入和输出都需要并联大小去耦电容，以滤除纹波。

使能开关可控制稳压输出的开启与关闭，接入 Buck 芯片的使能引脚以实现稳压输出的软开启与软关断。电源指示灯可向用户指示 12V/5V 稳压的输出状态。

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
