---
id: DAC-Static_Parameters
title: DAC - Static Parameters
---

## Static Parameters

DAC's static parameters mainly contain:

- Offset Error
- Gain Error
- Differential Non-Linearity Error (DNE or DNL)
- Integral Non-Linearity Error (INE or INL)

![](https://cos.wiki-power.com/img/20221011144045.png)

### Offset Error

**Offset Error** (Zero-Scale Error) is the voltage difference between ideal and actual offset (initial) points.

$$
OffsetError=V_{ZS(Actual)}-V_{ZS(ideal)}
$$

![](https://cos.wiki-power.com/img/20221011144415.png)

### Gain Error

**Gain Error** is the voltage difference between ideal and actual gain points on the transfer function.

$$
GainError=FSR_{Ideal}-FSR_{Actual}
$$

Where

$$
FSR_{Ideal}=V_{FS(ideal)}-V_{ZS(ideal)}
$$

$$
FSR_{Actual}=V_{FS(Actual)}-V_{ZS(Actual)}
$$

![](https://cos.wiki-power.com/img/20221011144925.png)

### Differential Non-Linearity Error (DNL)

**Differential Non-Linearity Error (DNL)** is the difference in the output voltage at a specific, compared to the output at the previous input, then minus one device LSB:

$$
DNL=(V_{in2}-V_{in1})-LSB_{average}
$$

where $V_{in2}$ is the voltage of the upper transition, $V_{in1}$ is the lower.

DNL is a measure of "small-signal" linearity error. Measurement of DNE is made from one step to the next, not each step to the ideal value.

![](https://cos.wiki-power.com/img/20221011153556.png)

### Integral Non-Linearity Error (INL)

**Integral Non-Linearity Error (INL)** is the cumulative effect of all differential non-linearity values.It is a measure of "large-signal" linearity error. INL at any point along the curve is the deviation of the ideal linearity line.

$$
ExpectedOutput[i]=FSR*InputCode[i]+OffsetError
$$

$$
INL[i]=\frac{ActualOutput[i]-ExpectedOutput[i]}{LSB_{average}}
$$

also, INL can also be expressed as a function of DNL:

$$
INL[i]=\sum_{i=0}^{i=n}DNL[i]
$$

![](https://cos.wiki-power.com/img/20221011184739.png)

## How to Test Static Parameters

### Test System Setup

Test system setup for DAC static parameter tests:

![](https://cos.wiki-power.com/img/20221011185006.png)

Block diagram of signal setup:

![](https://cos.wiki-power.com/img/20221011185447.png)

### Tests Concept

Procedure of testing the static parameters of an DAC DUT is listed below.

![](https://cos.wiki-power.com/img/20221011185739.png)

#### 1. Measure the output voltage by applying the digital data inputs from Zero Scale to Full Scale

![](https://cos.wiki-power.com/img/20221011185711.png)

#### 2. Calculate DNL for each input code

$$
DNL[i]=\frac{OutputMeasured[i]-OutputMeasured[i-1]-LSB_{average}}{LSB_{average}}
$$

Where

$$
LSB_{average}=\frac{OutputMeasured[n]-OutputMeasured[0]}{2^{bits}-1}
$$

## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
