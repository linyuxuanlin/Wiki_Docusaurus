---
id: DAC-Dynamic_Parameters
title: DAC - Dynamic Parameters
---

## Dynamic Parameters

DAC's dynamic parameters mainly contain:

- Signal to Noise Ratio (SNR)
- Total Harmonic Distortion (THD)
- Signal to Noise and Distortion Ratio (SINAD)
- Inter-modulation Error (IM)

### Signal to Noise Ratio (SNR)

**Signal to Noise Ratio (SNR)** of an DAC is defined as the ratio of the Measured Signal Power's RMS (excluding Harmonic Distortion) to the Noise Power's RMS:

$$
SNR(dB)=20log(\frac{V_{Signal(RMS)}}{V_{Noise(RMS)}})
$$

Since SNR is an ratio of power, $20$ in the equation means the square of the ratio of voltage.

![](https://cos.wiki-power.com/img/20221009221450.png)

Although the Harmonic Distortion is not included in the measurement of SNR, but the Quantization, Thermal and other residual noise in converter are included.

### Total Harmonic Distortion (THD)

**Total Harmonic Distortion (THD)** of an DAC is defined as the ratio of the fundamental to all the harmonic distortion:

$$
THD(dB)=20log(\frac{\sqrt{V^2_{2(RMS)}+V^2_{3(RMS)}+...+V^2_{n(RMS)}}}{V_{1(RMS)}}
$$

![](https://cos.wiki-power.com/img/20221009225800.png)

## How to Test Dynamic Parameters

### Test System Setup

Test system setup for ADC dynamic parameter tests:

![](https://cos.wiki-power.com/img/20221009230212.png)

Resolution of AC Digitizer should be at least 2 to 4 bits better than DUT.

### Tests Concept

Procedure of testing the dynamic parameters of an DAC is listed below.

#### 1.Make a continuous input digital data signal (of a Sine wave) with the tester for the DAC to convert



#### 2.Coherently collect a set of samples with the DAC

#### 3.Send the collected set of time samples to the DSP to perform DFT / FFT analysis

#### 4.Analyze the frequency bins of interest using equations or tester algorithms for SNR, THD and compare to specification

#### 5.Make a pass / fail decision based on the results

## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
