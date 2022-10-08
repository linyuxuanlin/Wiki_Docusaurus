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

$$
LSB=\frac{V_{FST}-V_{ZST}}{2^{bits}-2}
$$

For example, for a 3 bit converter, there are:

- 8 horizontal steps
- 7 transitions
- 6 steps between 7 transitions

![](https://cos.wiki-power.com/img/20221008151344.png)

- **Zero Scale Range Transition Voltage ($V_{ZST}$)**: Voltage of the analog input signal when the first transition is recorded.
- **Full Scale Range Transition Voltage ($V_{FST}$)**: Voltage of the analog input signal when the last transition is recorded.
- **Full Scale Range (FSR)**: Maximum extreme of the analog input signal supplied to the ADC. $FSR = (V_{FST}-V_{ZST}) + 2 LSB$

For an ideal ADC, LSB represents all of the each code's width.

## Static Parameters

ADC's static parameters contain:

- Offset Error
- Gain Error
- Differential Non-Linearity Error (DNE or DNL)
- Integral Non-Linearity Error (INE or INL)

### Offset Error

**Offset Error** (Zero-Scale Error) is the difference between ideal and actual offset (initial) points. It is measured from the midpoint of the zero step (ideal to actual) for the ADC.

![](https://cos.wiki-power.com/img/20221008154521.png)

Where

$$
V_{ZS}=V_{ZST}-\frac{LSB}{2}
$$

### Gain Error

**Gain Error** is the difference between ideal and actual gain points on the transfer function (after the offset error has been corrected to zero). It is measured from the midpoint of the full step for the ADC.

![](https://cos.wiki-power.com/img/20221008155259.png)

Where

$$
V_{FS}=V_{FST}+\frac{LSB}{2}
$$

### Differential Non-Linearity Error (DNL)

**Differential Non-Linearity Error (DNL)** is the difference between an actual step width and an ideal step width (1 LSB). It is measured from the difference in the analog input voltage between 2 adjacent transitions and the device's average LSB.

Equations to describe DNL:

$$
DNL_n=CodeWidth_n-LSB_{average}
$$

$$
DNL=(V_{in2}-V_{in1})-LSB_{average}
$$

![](https://cos.wiki-power.com/img/20221008160020.png)

If DNL exceeds is too large, one or more codes will be missing and never receive an output.

### Integral Non-Linearity Error (INL)

## Dynamic Parameters

ADC's dynamic parameters contain:

- Signal to Noise Ratio (SNR)
- Total Harmonic Distortion (THD)
- Signal to Noise and Distortion Ratio (SINAD)
- Inter-modulation Error (IM)