---
id: ATE-AC参数测试
title: ATE - AC 参数测试 🚧
---

AC 测试用于确保 DUT 符合其时序规格 A，测试时需要设置恰当的时序值（边沿特性）

【介绍】

## 基本 AC 参数

下图是一个 256 x 4 静态 RAM 的 AC 参数规格示例：

### 读取周期时序

![](https://cos.wiki-power.com/img/20220731190300.png)

| Parameter | Description               | Min | Max | Unit |
| --------- | ------------------------- | --- | --- | ---- |
| tRC       | Read Cycle Time           | 15  |     | ns   |
| tAA       | Address to Data Valid     |     | 15  | ns   |
| tACS      | Chip Select to Data Valid |     | 10  | ns   |
| tDOE      | OE LOW to Data Valid      |     | 10  | ns   |
| tHZCS     | Chip Select to High Z     |     | 8   | ns   |
| tHZOE     | OE HIGH to High Z         |     | 8   | ns   |
| tLZCS     | Chip Select to Low Z      | 2   |     | ns   |
| tLZOE     | OE LOW to Low             | 2   |     | ns   |

### 写入周期时序

![](https://cos.wiki-power.com/img/20220731190328.png)

| Parameter | Description                   | Min | Max | Unit |
| --------- | ----------------------------- | --- | --- | ---- |
| tWC       | Write Cycle Time              | 15  |     | ns   |
| tHZWE     | WE LOW to High Z              |     | 8   | ns   |
| tLZWE     | WE HIGH to Low Z              | 2   |     | ns   |
| tPWE      | WE Pulse Width                | 11  |     | ns   |
| tSD       | Data Set-Up to Write End      | 11  |     | ns   |
| tHD       | Data Hold from Write End      | 1   |     | ns   |
| tSA       | Address Set-Up to Write Start | 2   |     | ns   |
| tHA       | Address Hold from Write End   | 2   |     | ns   |
| tSCS      | CS LOW to Write End           | 11  |     | ns   |
| tAW       | Address Set-Up to Write End   | 13  |     | ns   |

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
