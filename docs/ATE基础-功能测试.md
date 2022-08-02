---
id: ATE基础-功能测试
title: ATE 基础 - 功能测试 🚧
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

> 本篇文章受 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议保护，转载请注明出处。

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

用功能测试法测开路 / 短路，比静态法更快、更省成本。首先要先明确测试的每个周期长度（如下面的例子采用 1ms 的测试周期），再确定选通检测窗口（Stobe Window）的时间节点和时长。VDD 管测试的示意图如下所示：

![](https://cos.wiki-power.com/img/20220802192823.png)

测试流程如下：

1. 将所有电源引脚接地，所有信号引脚定义为输入模式，并且将它们赋 VIL 的值（0V）。
2. 将第一个待测的引脚设置为输出模式，关断此引脚（高阻 Z）。
3. 动态地加负载电流（+400µA@3V），使 VDD 保护二极管发生正偏。
4. 测量保护二极管电压，与标称值对比得出结果。
5. 让此引脚恢复测试前的状态。接着下一个引脚执行测试，直到得出所有引脚的测试结果。

本测试的矢量模式示例如下：

```
00000   /* cycle 1 将所有引脚接地 */
Z0000   /* cycle 2 测试第 1 个引脚的保护二极管 */
0Z000   /* cycle 3 测试第 2 个引脚的保护二极管 */
00Z00   /* cycle 4 测试第 3 个引脚的保护二极管 */
000Z0   /* cycle 5 测试第 4 个引脚的保护二极管 */
0000Z   /* cycle 6 测试第 5 个引脚的保护二极管 */
/* 下一个周期将会被单独执行 */
ZZZZZ   /* cycle 7 关断所有引脚并测试它们 */
```

当待测引脚关断（高阻 Z），且动态电流开始将引脚往 3V（VREF）拉时，如果保护二极管正常，那么它将在电压达到 0.65V 时发生正偏，且在加到设定电流值时维持钳位保护。如果二极管短路，则将检测到 0V 的电压；如果开路，则会检测到上限值 3V（VREF）。一个正常引脚变化是这样的：

![](https://cos.wiki-power.com/img/20220803011219.png)

需要注意的是，选通窗口设置在 0.9µs，持续时长 0.01µs，这是为留足时间让电压上升到稳定，保证测试结果可靠。

一旦测试完 VDD 保护二极管，就可以继续测 VSS 保护二极管了。接下来可以只测是否开路，不用测是否短路了（如果 VSS 管有短路的情况，必然也过不了上面 VDD 管测试）。VSS 管测试的示意图如下：

![](https://cos.wiki-power.com/img/20220803012747.png)

对于 VSS 管的矢量程序测试，只需要执行之前的第 7 个周期，即 `ZZZZZ`，对所有引脚的 VSS 管并行测开路。

