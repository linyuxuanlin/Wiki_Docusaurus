---
id: RobotCtrl_Core-核心板
title: RobotCtrl_Core - 核心板
---

![](https://cos.wiki-power.com/img/20220527113423.png)

项目仓库：[**linyuxuanlin/RobotCtrl/RobotCtrl_Core**](https://github.com/linyuxuanlin/RobotCtrl/tree/main/RobotCtrl_MultiBoard_Project/RobotCtrl_Core)

项目在线预览：

<div class="iframe_viewer">
    <iframe 
    scrolling="no"
  src="https://viewer.wiki-power.com/RobotCtrl_Core.html"
></iframe>
</div>

注：项目包含于 [**RobotCtrl - STM32 通用开发套件**](https://wiki-power.com/RobotCtrl-STM32%E9%80%9A%E7%94%A8%E5%BC%80%E5%8F%91%E5%A5%97%E4%BB%B6)。

## 硬件设计

RobotCtrl_Core 的主要功能如下：

- 供电稳压电路（5V 转 3.3V，引出测试点）
- 单片机最小系统
  - 电源电路（供电去耦、ADC 模拟电源）
  - 复位电路（外部复位按键）
  - 时钟电路（HSE 无源晶振）
  - 下载调试接口（SW）
  - 启动模式（选择从主闪存存储器启动）
  - USB 供电与通信电路（USB-Micro）
- B2B 连接器（引出所有 IO）
- 用户按键与 LED

### 供电电路

RobotCtrl_Core 可由 USB 接口或 B2B 连接器输入 5V 电源，并转换为 3.3V 供单片机核心及板载外设使用。稳压电路使用了 LDO（AMS1117-3.3，最大电流为 1A）。LDO 的基础原理可以参考文章 [**电源拓扑 - 线性稳压**](https://wiki-power.com/%E7%94%B5%E6%BA%90%E6%8B%93%E6%89%91-%E7%BA%BF%E6%80%A7%E7%A8%B3%E5%8E%8B)。

### 单片机最小系统

单片机最小系统的设计，分为几个部分：供电、复位、下载调试、时钟、启动模式。基础知识可参考文章 [**如何设计一款单片机的最小系统**](https://wiki-power.com/%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1%E4%B8%80%E6%AC%BE%E5%8D%95%E7%89%87%E6%9C%BA%E7%9A%84%E6%9C%80%E5%B0%8F%E7%B3%BB%E7%BB%9F) 和 [**STM32F4 硬件开发**](https://wiki-power.com/STM32F4%E7%A1%AC%E4%BB%B6%E5%BC%80%E5%8F%91)。

### 电源电路

去耦电容：

- VDD：总的一个 10 μF 的陶瓷电容，外加每个 VDD 引脚旁接一个 100 nF 陶瓷电容。
- VDDA：100 nF 陶瓷电容 + 1 µF 陶瓷电容。

VCAP 电容

- 各对地接一个 2.2 µF 陶瓷电容。

### 复位电路

启用电源监控器，即 PDR_ON 通过 120Ω 电阻上拉。除此之外，也添加了复位按键，带硬件防抖。

### 时钟电路

外部高速时钟（HSE）选用村田 8M 无源晶振。

### 下载调试接口

本设计直接引出下载调试接口，不需要外部上拉／下拉电阻（因为 STM32 内部有集成）。

### 启动模式

选择从主闪存存储器启动，即 BOOT0 串接 10 K 的下拉电阻，BOOT1 任意。

### USB 供电与通信电路（USB-Micro）

STM32 有内置 USB 外设，只需要直接引出接口（在 STM32F07ZE 芯片上是 PA11 和 PA12）就可以实现 USB 通信。

USB 接口也支持了外部供电功能（VUSB）。

## B2B 连接器

B2B 连接器选用正点原子的 3710 系列，RobotCtrl_Core 核心板使用一对 3710M060037G3FT01（公座），RobotCtrl_Func 拓展板使用一对 F060037G0FR01（母座）进行配合。一对 B2B（共 120 pin）足以将 STM32F407ZE 的所有 IO 完全引出使用，最大化利用了系统资源。

B2B 连接器的相关资料请参考 [**3710F 端子资料**](http://www.openedv.com/thread-78182-1-1.html)

---

## 硬件测试

主控核心板的电源测试，通过 USB 或 B2B 输入 5V，测量 3.3V 的测试点的电压；功能测试通过烧录初始程序，实现用户按键控制用户 LED、USB 虚拟串口通信即通过验证。

## 参考与致谢

- [STM32 的 PDR_ON 引脚，比较好的解释（转载+补充）](https://blog.csdn.net/Frankenstien_/article/details/105971841)
- [正点原子【STM32-F407 探索者】第五十六章 USB 读卡器(Slave)实验](https://zhuanlan.zhihu.com/p/136163591)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
