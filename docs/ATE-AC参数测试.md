---
id: ATE-AC参数测试
title: ATE - AC 参数测试 🚧
---

AC 测试用于确保 DUT 符合其时序规格 A，测试时需要设置恰当的时序值（边沿特性）

【介绍】

## 基本 AC 参数

### 建立时间（Setup Time）

### 保持时间（Hold Time）

### 传输时延（Propagation Delay）

### 最小脉宽（Minimum Pulse Widths）

### 最大频率

### 输出使能时间（Output Enable Time）

指的是引脚从高阻（关断失能）状态切换到有效驱动电平（高低电平）所需的时间。

### 输出失能时间（Output Disable Time）

指的是引脚从有效驱动电平（高低电平）状态切换到高阻（关断失能）所需的时间。

## 时序参数

### 写入周期时序（Write Cycle Timing）

### 读取周期时序（Read Cycle Timing）

## 实际规格书中的示例

下面是一个 256 x 4 静态 RAM 的 AC 参数示例：

### 读取周期时序

![](https://cos.wiki-power.com/img/20220731190300.png)

| Parameter  | Description               | Min | Max | Unit |
| ---------- | ------------------------- | --- | --- | ---- |
| $t_{RC}$   | Read Cycle Time           | 15  |     | ns   |
| $t_{AA}$   | Address to Data Valid     |     | 15  | ns   |
| $t_{ACS}$  | Chip Select to Data Valid |     | 10  | ns   |
| $t_{DOE}$  | OE LOW to Data Valid      |     | 10  | ns   |
| $t_{HZCS}$ | Chip Select to High Z     |     | 8   | ns   |
| $t_{HZOE}$ | OE HIGH to High Z         |     | 8   | ns   |
| $t_{LZCS}$ | Chip Select to Low Z      | 2   |     | ns   |
| $t_{LZOE}$ | OE LOW to Low             | 2   |     | ns   |

### 写入周期时序

![](https://cos.wiki-power.com/img/20220731190328.png)

| Parameter  | Description                   | Min | Max | Unit |
| ---------- | ----------------------------- | --- | --- | ---- |
| $t_{WC}$   | Write Cycle Time              | 15  |     | ns   |
| $t_{HZWE}$ | WE LOW to High Z              |     | 8   | ns   |
| $t_{LZWE}$ | WE HIGH to Low Z              | 2   |     | ns   |
| $t_{PWE}$  | WE Pulse Width                | 11  |     | ns   |
| $t_{SD}$   | Data Set-Up to Write End      | 11  |     | ns   |
| $t_{HD}$   | Data Hold from Write End      | 1   |     | ns   |
| $t_{SA}$   | Address Set-Up to Write Start | 2   |     | ns   |
| $t_{HA}$   | Address Hold from Write End   | 2   |     | ns   |
| $t_{SCS}$  | CS LOW to Write End           | 11  |     | ns   |
| $t_{AW}$   | Address Set-Up to Write End   | 13  |     | ns   |
