---
id: ADC-Basic_Operation
title: ADC - Basic Operation 🚧
---

## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.

Analog to Digital Converter (ADC) is a device to converts analog signals into a sequence of digital data.

![](https://cos.wiki-power.com/img/20221008143831.png)

Though ADC's ideal transfer function should be a straight line, but actually is a uniform staircase, that the number of steps corresponds to the number of digital output codes. Since analog is continuous and digital is discrete, quantization error will be introduced in the procedure.

The width of one step is defined as 1 **Least Significant Bit (LSB)**. The resolution of an ADC is normally expressed as number of bits (digital output code). An ADC with an n-bit resolution has $2^n$ possible digital codes ($2^n$ step levels).

For example, for a 3 bit converter, there are:

- 8 horizontal steps
- 7 transitions
- 6 steps between 7 transitions

![](https://cos.wiki-power.com/img/20221008151344.png)

$$
LSB=\frac{V_{FST}-V_{ZST}}{2^{bits}-2}
$$

- **Zero Scale Range Transition Voltage (VZST)**: Voltage of the analog input signal which the first transition is recorded 
- **Full Scale Range Transition Voltage (VFST)**: Voltage of the analog input signal which the last transition is recorded

For an ideal ADC, LSB represents all codes' width.
