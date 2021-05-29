---
id: STM32F4硬件开发
title: STM32F4 硬件开发
---

## 参考与致谢

- [AN4488: Getting started with STM32F4xxxx MCU hardware development](https://www.st.com/content/ccc/resource/technical/document/application_note/76/f9/c8/10/8a/33/4b/f0/DM00115714.pdf/files/DM00115714.pdf/jcr:content/translations/en.DM00115714.pdf)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

本篇文章会在以下几个方面展开讲解：

- 电源
- 封装选择
- 时钟管理
- 复位控制
- 自举模式设置
- 调试管理

## 电源

STM32F4 的正常工作电压是 1.8 V 到 3.6 V（在某些情况下可降至 1.7 V 以下，在数据手册有说明），有内置稳压器提供内部 1.2 V 的数字电源。

当主电源 VDD 断电时，可通过 VBAT 的电压为 RTC 和备份寄存器供电。

### ADC 电源和参考电压

为了提高转换精度，ADC 配有独立的电源引脚，可单独滤波并屏蔽 PCB 上的噪声。

ADC 电压源从单独的 VDDA 引脚输入。在电路设计时，应该把 VSSA 接到同个供电地，而非 VSS。

如果芯片的封装是 100 引脚以上的，就会有 VREF+和 VREF- 引脚，它们的作用是给 ADC 输入外部参考电压。VREF- 要接至内部 VSSA。如果芯片引脚小于 100，那么这两个引脚没有引出，在内部接在了 VDDA 和 VSSA。

### 后备电池电源

如果需要在 VDD 断电后保留备份寄存器内容，可将 VBAT 连到电池或其他电源。

VBAT 也可为 RTC 供电，由复位模块中内置的掉电复位 （PDR）电路进行控制。

### 内置稳压器

内置稳压器在复位后始终处于使能态，有三种工作模式：

- 运行：稳压器为 1.2 V 域（内核、存储器和数字外设）提供全功率电源供应。
- 停止：稳压器为 1.2 V 域提供低功率电源供应，同时保留寄存器和 SRAM 中的内容。
- 待机：稳压器掉电。除待机电路和备份域，寄存器和 SRAM 的内容都将丢失。

### 电路设计

以下是电源的电路设计注意要点：

- **VDD**
  - **去耦电容**：总的一个 10 μF 的陶瓷/钽电容，外加每个 VDD 引脚旁接一个 100 nF 陶瓷电容。
- **VDDA**
  - **去耦电容**：100 nF 陶瓷电容 + 1 µF 陶瓷/钽电容。
  - **过滤模拟噪声**：可通过磁珠接至 VDD。
- **VREF+**
  - **去耦电容**：如果启用 VREF+ 功能，则需接一个 100 nF 和一个 1 µF 的电容。
  - **过滤模拟噪声**：可通过 47 Ω 电阻连至 VDDA。
- **VBAT**
  - 接外部电池（1.65 V-3.6 V）。如果不需要电池电源，则接至 VDD 引脚。
