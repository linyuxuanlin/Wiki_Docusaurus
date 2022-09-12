---
id: ATE-DC-Level_Threshold_Test
title: ATE - DC - Level Threshold Test
---

Level threshold test includes Output Level Threshold Test (VOL/IOL & VOH/IOH) and Input Level Threshold Test (VIL & VIH).

|                       |  VCC                      | VOL          | VOH       | VIL      | VIH          | GND |
| :---------        | :---- | :-------        | :---------------| :---------- | :------        | :---- |
|  TTL (5V)          | 5.00V                    | 0.40V     | 2.40V       | 0.80V           | 2.00V                  | 0.00V   |
|  LVTTL (3.3V)   | 3.30V                        | 0.40V    | 2.40V      | 0.80V         | 1.50V                   | 0.00V
|  CMOS (5V)     | 5.00V                 | 0.50V (0.1 VCC)          | 4.50V (0.9 VCC)       | 1.50V (0.3 VCC)| 3.50V (0.7 VCC)| 0.00V   |
|  CMOS (3.3V)  | 3.30V            | 0.33V (0.1 VCC)      | 2.97V (0.9 VCC)   | 0.99V (0.3 VCC)  | 2.31V (0.7 VCC)  | 0.00V   |
|  CMOS (2.5V)  | 2.50V                      | 0.40V      | 2.00V  | 0.70V       | 1.70V             | 0.00V   |
|  CMOS (1.8V)  | 1.80V                          | 0.45V      | 1.35V | 0.63V      | 1.170V         | 0.00V   |

## References & Acknowledgements

- *The Fundamentals Of Digital Semiconductor Testing*
- *Fundamentals of Testing Using ATE*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
