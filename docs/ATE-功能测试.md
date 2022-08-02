---
id: ATE-功能测试
title: ATE - 功能测试 🚧
---

功能测试分两阶段：功能验证（Functional Verification and characterization）、生产测试（Manufacturing Test）。

测试矢量（Test Vector）是向 DUT 输入的一组值或激励，并有预知期望值。将它应用在实际电路上，将实际结果与期望值相比较，从而得出测试结论。

## 检测故障（Detecting Faults）

故障覆盖率（Fault Coverage）也称故障分级（Fault Grading）用于描述向量模式在检测和筛选包含故障的设备方面的有效性

## 固定型故障（Stuck-At Fault）

固定型故障（SAF）指的是信号引脚由于制造缺陷（defect），被固定在了 0/1/Z 电平的状态，从而造成了故障。

## 参考与致谢

- 《The Fundamentals Of Digital Semiconductor Testing》
- 《DC Test Theory》

> 本文章受 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议保护，转载请注明出处。

## 功能测试（Functional Test）

在功能测试之前，必须先确保下面这些参数准确：

VDD Min/Max：DUT 的供电
VIL/VIH：输入电平
VOL/VOH：输出电平
IOL/IOH：输出电流负载
VREF：IOL/IOH 开关参考电压
Test Frequency：测试的时间周期
Input signal timings — clocks / setups / holds / controls
Input signal formats — wave shapes of input signals
Output timings — when will outputs be sampled within cycle
Vector sequencing — start / stop points within a vector file

### OS 测试（功能测试法）

![](https://cos.wiki-power.com/img/20220802192823.png)

用功能测试法测开路 / 短路，比静态法更快、更省成本。测试示意图如上图所示，测试流程如下：

动态电流负载提供正向偏置 VDD 保护二极管所需的电流和电压。可编程负载提供 400 A 电流。负载参考电压（VREF）设置为+3V。输出比较器电平必须是数字半导体测试 7-38 编程的基础，以便定义中心通区（通常称为“将比较器设置为中频或 Z 状态模式”）。VOL 电平设置为+0.2V，VOH 电平设置为+1.5V。见图 7-21。

1. 将所有电源与信号引脚接地（信号引脚定义为输入并加到 VIL 0V 实现）。
2. 设定动态负载电流（+400µA@3V）为保护二极管提供偏置电压。
3. 设置 VOL/VOH 为高阻模式。
4. 跑功能测试的程序（一次测一个引脚）。
5. 测量保护二极管电压。
6. 如果超出上下阈值则不通过。
