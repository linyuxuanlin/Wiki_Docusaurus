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

---

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
DNL[n]=CodeWidth_n-LSB_{average}
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
INL[n]=INL_{n-1}+{\frac{DNL_{n-1}+DNL_{n}}{2}}
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

Procedure of testing the static parameters of an ADC DUT is listed below.

#### 1. Make a ramp wave segment for AC SRC

The input ramps goes above and below ±Fs to assure that all codes are covered:

![](https://cos.wiki-power.com/img/20221008193036.png)

#### 2. Take data between the start (min+1, e.g. 0…01) and the end (max-1, e.g. 1…10) of the ramp. That gives $2^n – 2$ codes' worth of data

Voltage applied must be wider than the full-scale range to cover all transitions. 16 steps in-between each code transition is shown below:

![](https://cos.wiki-power.com/img/20221008194207.png)

for the ideal ADC DUT, 16 output codes are appear in the same times:

![](https://cos.wiki-power.com/img/20221008194450.png)

However, a real device will have a count more than 16 times for wider codes, and less than 16 times for narrower ones (But sum of the total occurrence should be still $2^{bits}$ times of 16):

![](https://cos.wiki-power.com/img/20221008194813.png)

#### 3. Calculate for DNL for each step

$$
DNL[n]=\frac{Hits[n]-\frac{\sum Hits[n]}{2^n-2}}{\frac{\sum Hits[n]}{2^n-2}}
$$

Where $Hits[n]$ represents the Actual Output Code Count, and $\frac{\sum Hits[n]}{2^n-2}$ represents the Ideal Output Code Count.

![](https://cos.wiki-power.com/img/20221008234157.png)

For an example historam graph as shown below:

![](https://cos.wiki-power.com/img/20221008234921.png)

for DNL[1](Code 001),

- Actual Output Code Count = 14
- Idea Output Code Count = (14 +18 +15 + 17+ 17 + 15) / (8 -2 ) = 16.

Therefore DNL[1] (Code 001) = (14-16)/16 \* LSB => -0.125 \* LSB.

#### 4. Get the max and min DNL

![](https://cos.wiki-power.com/img/20221008235342.png)

#### 5. Calculate for INL for each step

INL is the cumulative value of the first DNL to the DNL[n] (except zero and full scale DNL):

$$
INL[n]=DNL[n]+DNL[i-1]+...+DNL[2]+DNL[1]
$$

Note that $DNL[0]$ is not used,

$$
INL[0]=INL[FullScale]=0
$$

For an example graph below,

![](https://cos.wiki-power.com/img/20221009201547.png)

$$
INL[1] = DNL[1] = -0.125 * LSB
$$

$$
INL[2] = DNL[2] + DNL[1] = 0 * LSB
$$

$$
INL[3] = DNL[3] + DNL[2] + DNL[1] \\
INL[3]= 0.0625 * LSB
$$

#### 6. Get the max and min INL

![](https://cos.wiki-power.com/img/20221009201838.png)

## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
