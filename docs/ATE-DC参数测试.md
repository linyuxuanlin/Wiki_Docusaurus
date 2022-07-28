---
id: ATE-DC参数测试
title: ATE- DC 参数测试
---

## 参考与致谢

- 《The Fundamentals Of Digital Semiconductor Testing》
- [闩锁效应（Latch-up）详解](https://zhuanlan.zhihu.com/p/125519142)
- [DC Test Theory](https://nanopdf.com/embed/dc-test-theory_pdf.html?sp=0)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 基本术语

### 热切换（Hot Switching）

继电器在电流在流动时进行开关切换，这样可能会损坏继电器，需要通过编程来避免这样的情况。

### 闩锁效应（Latch-up）

当对某个引脚施加过高的电压时，导致 CMOS 器件中出现大电流状态，可能会损坏器件。

### Binning

Binning 是根据测试结果对 DUT 进行筛选分组，举个例子：

| Bin# | Category                    |
| ---- | --------------------------- |
| 01   | Good Device 100MHZ          |
| 02   | Good Device 75MHZ           |
| 10   | Opens and shorts reject     |
| 09   | Gross IDD reject            |
| 08   | Gross Function reject       |
| 03   | 75MHZ Function reject       |
| 07   | Function VIL/VIH reject     |
| 06   | DC VOL/VOH reject           |
| 05   | Dynamic/Static IDD reject   |
| 04   | IIL IIH/ IOZ Leakage reject |

Binning 的过程至少需要有两个 bin，以区分某个测试结果通过或者不通过。

### 测试流程（Program Flow）

测试流程的设计对整个测试而言十分重要。比如说某些 DC 测试需要预处理（设定特定的设备逻辑，例如功能测试），少了预处理将导致后续步骤的结果毫无意义。

测试流程的设计需要考虑很多因素：测试量的大小、需要测试哪些参数、怎么去进行 Binning 等待。通常会使用流程图来呈现，确保测试流程满足需求。

![](https://cos.wiki-power.com/img/20220728131317.png)

## DC 测试与电阻率的关系

大部分 DC 测试，实质上是在验证半导体的电阻率，解释电阻率用的就是欧姆定律。如需对 DC 测试流程进行验证，也可以借用电阻器来等效 DUT，以排除 DUT 之外的问题变量。

比方说，在芯片规格书里出现一个参数 VOL：

| Parameter | Description        | Test Conditions       | Min | Max | Units |
| --------- | ------------------ | --------------------- | --- | --- | ----- |
| VOL       | Output LOW Voltage | VDD = Mm, IOL = 8.0mA |     | 0.4 | V     |

我们可以看出，VOL 最大值为 0.4V，IOL 为 8mA，即当输出逻辑低电平的情况下，必须是在不大于 0.4V 的电压下产生 8mA 的电流，所以我们可以得出，这个器件的最大电阻不超过 50Ω。所以，可以借用不大于 50Ω 的电阻替代 DUT，以验证测试流程。我们的目的是把问题聚焦在 DUT 上，而非 DUT 以外的问题。

## VOH 与 IOH

VOH 表示输出（O）为高电平（H）时的最小电压值（V），即高电平输出下不会被识别成逻辑 0 的最低电压阈值。IOH 表示输出（O）为高电平时（H）时电流源的能力（I）。

举个例子，下表是 256 x 4 Static RAM 的 VOH 和 IOH 参数：

| Parameter | Description         | Test Conditions           | Min | Max | Units |
| --------- | ------------------- | ------------------------- | --- | --- | ----- |
| VOH       | Output HIGH Voltage | VDD = 4.75V, IOH = -5.2mA | 2.4 |     | V     |

VOH 与 IOH 衡量的是引脚在高电平（逻辑 1）输出状态下的电阻，用来确保该电阻满足功能需求，保证在适当输出的电压下能维持特定的电流值。

### 串行 / 静态测试方法

以上的参数可以通过串行 / 静态的方法进行测试，也可以通过动态的方法（后文会提）。如果使用静态（DC）测试方法，需要通过预处理将特定引脚输出设置为高电平，使用 PMU 向引脚施加恒定的 IOH，并将测得的 VOH 电压与规格书中的值比较，得出结论。

需要注意的事项：

- 因为 IOH 是从 DUT 流向 PMU，所以它是一个负电流值。
- 因为施加的是恒流，所以需要设置电压钳。
- 如有 VDDMIN 参数，是表示能使 DUT 正常进行测试的最小供电电压，再小将无法得出准确的测试结果。


<iframe src="https://nanopdf.com/embed/dc-test-theory_pdf.html?sp=0" width="750" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen></iframe> <div style="margin-bottom:5px"><strong><a href="https://nanopdf.com/download/dc-test-theory_pdf" title="DC Test Theory" target="_blank">DC Test Theory</a></strong></div>