---
id: ADC-Static_Parameters
title: ADC - Static Parameters
---


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

**Differential Non-Linearity Error (DNL)** is the difference between an actual step width and an ideal step width (1 LSB). It's a measure of "small-signal" linearity error, and is measured from the difference in the analog input voltage between 2 adjacent transitions and the device's average LSB.

![](https://cos.wiki-power.com/img/20221008160020.png)

Equations to describe DNL:

$$
DNL_n=CodeWidth_n-LSB_{average}
$$

$$
DNL=(V_{in2}-V_{in1})-LSB_{average}
$$

another image to decribe DNL:

![](https://cos.wiki-power.com/img/20221008161707.png)

If DNL exceeds is too large, one or more codes will be missing and never receive an output.

### Integral Non-Linearity Error (INL)

**Integral Non-Linearity Error (INL)** is the cumulative effect at any given input of all differential non-linearity values. It is a measure of "large-signal" linearity error. INL at any point along the curve is the deviation of the ideal linearity line.

![](https://cos.wiki-power.com/img/20221008163705.png)

The deviations are measured at the transition points from one step to the next for the ADC. INL is the deviation of the values of the actual step function to the ideal straight line function

Equations to describe INL:

$$
INL_n=INL_{n-1}+{\frac{DNL_{n-1}+DNL_{n}}{2}}
$$

$$
INL=[(\frac{BinaryCode}{2^{bits}-1})(V_{FS}-V_{ZS})+V_{offset}]-CodeCentor
$$

![](https://cos.wiki-power.com/img/20221008163911.png)

## How to Test Static Parameters

### Test System Setup

Test system setup for ADC static parameter tests:

![](https://cos.wiki-power.com/img/20221008184721.png)

Since the ADC voltage-to-code transfer curve is a many-to-one mapping function:

![](https://cos.wiki-power.com/img/20221008185819.png)

We use linear ramp histogram method (code width measurement) practically. The input ramp is slow enough to give a statistically relevant "number of hits per code".

![](https://cos.wiki-power.com/img/20221008190154.png)

Block diagram of signal setup:

![](https://cos.wiki-power.com/img/20221008190612.png)

### Tests Concept

Procedure to test an ADC:

1. Make a ramp wave segment for AC SRC. The input ramps goes above and below ±Fs to assure that all codes are covered:

![](https://cos.wiki-power.com/img/20221008193036.png)

2. Take data between the start (e.g. 0…01) and the end (e.g. 1…10) of the ramp.
3. Calculate for DNL for each step, and get the max and min DNL.
4. Calculate for INL for each step, and get the max and min INL.



## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
