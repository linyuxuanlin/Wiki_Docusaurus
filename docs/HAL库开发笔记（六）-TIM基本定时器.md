---
id: HAL库开发笔记（六）-TIM基本定时器
title: HAL 库开发笔记（六）-TIM 基本定时器
---

在 STM32 中，有基本定时器、通用定时器和高级定时器这三类定时器，用于处理各类周期任务。在本篇文章中，我将对基本定时器展开详细介绍。

## 参考与致谢

- [**STM32CubeMX 实战教程（四）—— 基本定时器（还是点灯）**](https://blog.csdn.net/weixin_43892323/article/details/104534920)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。





## 基本原理

### 基本定时器的特性

在 STM32F4 系列单片机上，有 TIM6 和 TIM7 这两个基本定时器，它们的主要特性如下：

- 16 位自动重载递增计数器
- 16 位可编程预分频器，用于对计数器时钟频率进行分频（即运行时修改），分频系数介于 1 和 65536 之间
- 用于触发 DAC 的同步电路
- 发生计数器上溢更新事件时会生成中断 / DMA 请求

## 定时闪灯

本次实验是用基本定时器实现计时功能，让 LED 0.5 秒变换一次开关状态。

首先，我们打开 Clock Configuratgion 时钟树配置页面，找到并记下最右侧 APB1 Timer clocks 的数值：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210407152250.png)

这是因为，STM32F4 系列的 TIM2-TIM7，TIM12-TIM14 是挂载在低速 APB1 时钟线上，而 TIM1，TIM8-TIM11 是挂载在高速 APB2 时钟线上，我们这里用到基本定时器 TIM6，所以要看 APB1 的速率（这里经过分频倍频后是 90 MHz）。

接着，我们找到侧边栏 Timer 中的 TIM6 标签页，先勾选 `Activated` 激活定时器，并在下方配置以下的参数：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210407153728.png)

各个参数的含义：

- **Prescaler**（预分频计时器）：
- **Counter Mode**（计数模式）：
- **Counter Period**（计时周期）：
- **auto-reload preload**（是否自动重装载）：