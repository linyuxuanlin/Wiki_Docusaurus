---
id: ATE-DC参数测试
title: ATE- DC 参数测试
---

## 参考与致谢

- 《The Fundamentals Of Digital Semiconductor Testing》
- 《DC Test Theory》
- [闩锁效应（Latch-up）详解](https://zhuanlan.zhihu.com/p/125519142)

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

VOH 表示输出（O）为高电平（H）时的最小电压值（V），即高电平输出下不会被识别成逻辑 0 的最低电压阈值。IOH 表示输出（O）为高电平时（H）时电流源的驱动能力（I）。

举个例子，下表是 256 x 4 Static RAM 的 VOH 和 IOH 参数：

| Parameter | Description         | Test Conditions           | Min | Max | Units |
| --------- | ------------------- | ------------------------- | --- | --- | ----- |
| VOH       | Output HIGH Voltage | VDD = 4.75V, IOH = -5.2mA | 2.4 |     | V     |

VOH 与 IOH 衡量的是引脚在高电平（逻辑 1）输出状态下的电阻，用来确保该电阻满足功能需求，保证在适当输出的电压下能维持特定的电流值。

### 串行 / 静态测试方法

以上的参数可以通过串行 / 静态的方法进行测试，也可以通过动态的方法（后文会提）。如果使用静态（DC）测试方法，需要先通过预处理，将特定引脚输出设置为高电平，使用 PMU 向引脚吸收恒定的 IOH，等待 1-5 毫秒（在 PMU 设 delay），并将测得的 VOH 电压与规范值相比较，如果低于规范值则为不通过。

![](https://cos.wiki-power.com/img/20220728143124.png)

需要注意的事项：

- 这种方法测试的是引脚输出 buffer 的电阻。
- 因为 IOH 是从 DUT 流向 PMU，所以它是一个负电流值。
- 因为施加的是恒流，所以需要设置电压钳，如果测出电压超出了钳位电压，有可能是逻辑设成了低电平。
- VDDMIN 参数表示能使 DUT 正常进行测试的最小供电电压，再小将无法得出准确的测试结果。

## VOL 与 IOL

VOL 表示输出（O）为低电平（L）时的最大电压值（V），即低电平输出下不会被识别成逻辑 1 的最高电压阈值。IOL 表示输出（O）为低电平时（L）时电流源的驱动能力（I）。

举个例子，下表是 256 x 4 Static RAM 的 VOL 和 IOL 参数：

| Parameter | Description        | Test Conditions          | Min | Max | Units |
| --------- | ------------------ | ------------------------ | --- | --- | ----- |
| VOL       | Output LOW Voltage | VDD = 4.75V, IOL = 8.0mA |     | 0.4 | V     |

VOL 与 IOL 衡量的是引脚在低电平（逻辑 0）输出状态下的电阻，用来确保该电阻满足功能需求，保证在适当输出的电压下能维持吸收特定的电流值。

### 串行 / 静态测试方法

如果使用静态（DC）测试方法，需要先通过预处理，将特定引脚输出设置为低电平，使用 PMU 向引脚施加恒定的 IOL，等待 1-5 毫秒（在 PMU 设 delay），并将测得的 VOL 电压与规范值相比较，如果高于规范值则为不通过。

![](https://cos.wiki-power.com/img/20220728150542.png)

需要注意的事项：

- 这种方法测试的是引脚输入 buffer 的电阻。
- 因为 IOL 是从 PMU 流向 DUT，所以它是一个正电流值。
- 因为施加的是恒流，所以需要设置电压钳，如果测出电压低于钳位电压，有可能是逻辑设成了高电平。
- VDDMIN 参数表示能使 DUT 正常进行测试的最小供电电压，再小将无法得出准确的测试结果。

## IDD 总电流

IDD表示的是