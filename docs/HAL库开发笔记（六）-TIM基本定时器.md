---
id: HAL库开发笔记（六）-TIM基本定时器
title: HAL 库开发笔记（六）-TIM 基本定时器
---

在 STM32 中，有基本定时器、通用定时器和高级定时器这三类定时器，用于处理各类周期任务。在本篇文章中，我将对基本定时器展开详细介绍。

## 基本原理

### 基本定时器的特性

在 STM32F4 系列单片机上，有 TIM6 和 TIM7 这两个基本定时器，它们的主要特性如下：

- 16 位自动重载递增计数器
- 16 位可编程预分频器，用于对计数器时钟频率进行分频（即运行时修改），分频系数介于 1 和 65536 之间
- 用于触发 DAC 的同步电路
- 发生计数器上溢更新事件时会生成中断 / DMA 请求

## 用基本定时器使 LED 定时闪烁

### 在 CubeMX 内配置基本定时器

本次实验是用基本定时器实现计时功能，让 LED 0.5 秒变换一次开关状态。

首先，我们打开 Clock Configuratgion 时钟树配置页面，找到并记下最右侧 APB1 Timer clocks 的数值：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210407152250.png)

这是因为，STM32F4 系列的 TIM2-TIM7，TIM12-TIM14 是挂载在低速 APB1 时钟线上，而 TIM1，TIM8-TIM11 是挂载在高速 APB2 时钟线上，我们这里用到基本定时器 TIM6，所以要看 APB1 的速率（这里经过分频倍频后是 90 MHz）。

接着，我们找到侧边栏 Timer 中的 TIM6 标签页，先勾选 `Activated` 激活定时器，并在下方配置以下的参数：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210407153728.png)

各个参数的含义：

- **Prescaler**（预分频系数）：9000
- **Counter Mode**（计数模式）：Up（从 0 开始向上计数至预分频系数后溢出）
- **Counter Period**（计时周期 / 装载值）：5000
- **auto-reload preload**（是否自动重装载）：Enable（溢出时会自动重装初值）

因为我这里用的时钟源为 90 MHz，所以预分频系数设置为 9000（也就是 9000 分频），分频后为 10 kHz（90 MHz/9000）。装载值设置为 5000（每周期计数 5000 次），所以得到 500 ms 一个周期。

接着我们在其 NVIC 标签页，对中断进行使能：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210407155959.png)

### 在代码内配置基本定时器

在 `main.c` 中开启定时器：

```c title="main.c"
/* USER CODE BEGIN 2 */

  HAL_TIM_Base_Start_IT(&htim6);

/* USER CODE END 2 */
```

在 `stm32f4xx_it.c` 中添加回调函数：

```c title="stm32f4xx_it.c"
/* USER CODE BEGIN 1 */

void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)
{
    if(htim->Instance == TIM6)
    {
        HAL_GPIO_TogglePin(LED1_GPIO_Port, LED1_Pin);
    }

}

/* USER CODE END 1 */
```

关于 LED 的配置，可以参考前面的文章 [**HAL 库开发笔记（二）-GPIO**](https://wiki-power.com/HAL%E5%BA%93%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0%EF%BC%88%E4%BA%8C%EF%BC%89-GPIO)。

下载烧录，可以发现，LED 按我们预设的 500 ms 周期切换开关状态（也就是每 500 ms 发生溢出并产生一个上溢事件，我们在回调函数中对 LED 灯进行了翻转操作）。

## 参考与致谢

- [**STM32CubeMX 实战教程（四）—— 基本定时器（还是点灯）**](https://blog.csdn.net/weixin_43892323/article/details/104534920)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
