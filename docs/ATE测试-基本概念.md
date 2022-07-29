---
id: ATE测试-基本概念
title: ATE 测试 - 基本概念
---

## 晶圆、晶粒与芯片

芯片设计制造流程：

![](https://cos.wiki-power.com/img/20220726161704.png)

晶圆（Wafer），晶粒（Die，复数 Dice，也称裸片）与芯片（Chip）的关系如下：

![](https://cos.wiki-power.com/img/20220726162316.png)

在 Wafer 上，通常有少数用于监控的 Die，它们的制造工艺与 Wafer 上的其他 Dice 一致，作为测试用途。Wafer 还有个特点，在边上有一处平口：

![](https://cos.wiki-power.com/img/20220726162558.png)

## 基本术语

测试通用术语：

- **ATE（Automatic Test Equipment）**：自动化测试设备，用于检测集成电路功能之完整性，是集成电路生产制造最终的流程，确保产品质量。
- **DUT（Device Under Test）**：待测设备，外部信号通过 DUT 的引脚对其进行测试。也称为 UUT（Device Under Test）。
- **PMU（Precision Measurement Unit）**：精密测量单元，用于精确测量器件的直流特性。
- **DIB（Device Interface Board）**：设备接口板，也称 LOAD board。
- **PIB（Probe Interface Board）**：探针接口板，用于 Wafer Probe。
- **PDP（Prober docking plate）**：探针台对接板。
- **PROBE CARD**：带探针的 PCB，用于 Wafer Probe。
- **BINNING**：根据测试结果对 DUT 进行筛选。
- **MANIPULATOR**：支撑测试头并允许其向多个方向移动的结构。
- **HANDLER**：全称 IC pick up and place handler，自动分选机，用于将 DUT 放置在测试头插座中的机械。
- **PROBER**：探针台，在测试探针下移动晶片的机械单元。

基本电气术语：

- **VCC**：TTL 设备的供电。
- **VDD**：CMOS 设备的供电。
- **VSS**：提供电源回流路径。
- **GND**：参考电平，在单电源供电设备上常等价于 VSS。
- **IDD**：从 CMOS 设备中消耗的电流。
- **ICC**：从 TTL 设备中消耗的电流。
- **VIH**：高电平输入下的最低电压识别阈值（不会被识别成 0）。
- **VIL**：低电平输入下的最高电压识别阈值（不会被识别成 1）。
- **VOH**：高电平输出下的最低电压识别阈值（不会被识别成 0）。
- **VOL**：低电平输出下的最高电压识别阈值（不会被识别成 1）。
- **IIH**：施加高电平下，从引脚流入的最大电流。
- **IIL**：施加低电平下，从引脚流出的最大电流。
- **IOH**：引脚设高电平下，最大拉电流（source）。
- **IOL**：引脚设低电平下，最大灌电流（sink）。
- **IOZH**：外部施加高电平于高阻引脚，产生的最大电流值。
- **IOZL**：外部施加低电平于高阻引脚，产生的最大电流值。

直流特性基本测试项：

- 测试输入、输出的电压电流（$V_{OL}, V_{OH}, V_{IL}, V_{IH},I_{OL}, I_{OH}, I_{IL},I_{IH}$）。
- 供电电压电流（$V_{DD}, V_{CC},I_{DD}, I_{CC}$）。
- 每个参数的通过 / 失败限制。

交流特性基本测试项：

- 传输延迟（Propagation Delays）
- 上升 / 下降时间（Rise / Fall Time）
- 频率（Frequency）
- 占空比（Duty Cycle）
- 脉宽（Pulse Width）
- 建立 / 保持时间（Setup / Hold Time）

基本测试项：

- **接触 / 连续性测试（Contact/Continuity Test）**：检查器件引脚中开路 / 短路问题。
- **直流特性测试（DC PARAMETRICS TEST）**：验证设备 DC 电流和电压参数，包括 IDD。
- **数字功能测试（DIGITAL FUNCTIONAL TEST）**：测试 DUT 的逻辑功能。
- **交流时序测试（AC TIMING TEST）**：验证 AC 规格，包括输出信号质量和信号时序参数。
- **混合信号测试（MIXED SIGNAL TEST）**：验证 DUT 的模拟和数字电路的逻辑。
- 其他的测试项：射频器件（RF Devices）、汽车器件（Automotive Devices）、存储器件（Memory Devices）、电源管理器件（Power Management Devices）、RFID 器件、高速数字器件（High Speed Digital devices）等的测试。

## 测试设备参数

基本术语：

- **预处理（Preconditioning）**：

## 参考与致谢

- 《The Fundamentals Of Digital Semiconductor Testing》
