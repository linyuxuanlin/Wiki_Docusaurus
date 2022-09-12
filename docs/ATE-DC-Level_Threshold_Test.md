---
id: ATE-DC-Level_Threshold_Test
title: ATE - DC - Level Threshold Test
---

Level threshold test includes Output Level Threshold (VOL/IOL & VOH/IOH) and Input Level Threshold (VIL & VIH). They are originated from typical TTL and CMOS level threshold:

|                       |  VCC                      | VOL          | VOH       | VIL      | VIH          | GND |
| :---------        | :---- | :-------        | :---------------| :---------- | :------        | :---- |
|  TTL (5V)          | 5.00V                    | 0.40V     | 2.40V       | 0.80V           | 2.00V                  | 0.00V   |
|  LVTTL (3.3V)   | 3.30V                        | 0.40V    | 2.40V      | 0.80V         | 1.50V                   | 0.00V
|  CMOS (5V)     | 5.00V                 | 0.50V (0.1 VCC)          | 4.50V (0.9 VCC)       | 1.50V (0.3 VCC)| 3.50V (0.7 VCC)| 0.00V   |
|  CMOS (3.3V)  | 3.30V            | 0.33V (0.1 VCC)      | 2.97V (0.9 VCC)   | 0.99V (0.3 VCC)  | 2.31V (0.7 VCC)  | 0.00V   |
|  CMOS (2.5V)  | 2.50V                      | 0.40V      | 2.00V  | 0.70V       | 1.70V             | 0.00V   |
|  CMOS (1.8V)  | 1.80V                          | 0.45V      | 1.35V | 0.63V      | 1.170V         | 0.00V   |

## Output Level Threshold Test (VOL/IOL & VOH/IOH)

VOL 表示低电平（L）输出（O）时的最高电压（V）限制（不会被识别成逻辑 1）。IOL 表示低电平（L）输出（O）时灌电流（I，sink）的驱动能力。它们共同衡量的是引脚 Buffer 在输出低电平时的阻抗，保证在适当输出的电压下能吸收恒定的电流值。

VOH 表示高电平（H）输出（O）时的最低电压（V）限制（不会被识别成逻辑 0）。IOL 表示高电平（H）输出（O）时拉电流（I，source）的驱动能力。它们共同衡量的是 Buffer 在输出高电平时的阻抗，保证在适当输出的电压下能输出恒定的电流值。

VOL represents the maximum output voltage when output LOW voltage level, IOL represents the maximum **sinking** current capability in LOW output state. They actually measures the resistance of the output pin when provide the logic `0`, insures it can provide current of IOL without exceeding the voltage of VOL, examining the capability of sink current and stay in a correct logic state.

VOH represents the minimum output voltage when output HIGH voltage level, IOH represents the maximum **source** current capability in HIGH output state.They actually measures the resistance of the output pin when provide the logic `1`, insures it can provide current of IOH without less than the voltage of VOH, examining the capability of source current and stay in a correct logic state.

## Input Level Threshold Test(VIL & VIH)

## References & Acknowledgements

- *The Fundamentals Of Digital Semiconductor Testing*
- *Fundamentals of Testing Using ATE*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
