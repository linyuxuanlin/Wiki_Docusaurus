---
id: ATE-DC参数测试
title: ATE- DC 参数测试
---

## 参考与致谢

- 《The Fundamentals Of Digital Semiconductor Testing》
- [闩锁效应（Latch-up）详解](https://zhuanlan.zhihu.com/p/125519142)

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


