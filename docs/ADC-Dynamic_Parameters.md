---
id: ADC-Dynamic_Parameters
title: ADC - Dynamic Parameters 🚧
---

## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.

## Dynamic Parameters

ADC's dynamic parameters contain:

- Signal to Noise Ratio (SNR)
- Total Harmonic Distortion (THD)
- Signal to Noise and Distortion Ratio (SINAD)
- Inter-modulation Error (IM)

### Signal to Noise Ratio (SNR)

**Signal to Noise Ratio (SNR)** of an ADC is defined as the ratio of the Measured Signal Power's RMS (excluding Harmonic Distortion) to the Noise Power's RMS:

$$
SNR(dB)=20log(\frac{V_{Signal(RMS)}}{V_{Noise(RMS)}})
$$

Since SNR is an ratio of power, $20$ in the equation means the square of the ratio of voltage.

![](https://cos.wiki-power.com/img/20221009221450.png)

Although the Harmonic Distortion is not included in the measurement of SNR, but the Quantization, Thermal and other residual noise in converter are included.

### Total Harmonic Distortion (THD)

**Total Harmonic Distortion (THD)** of an ADC is defined as the ratio of the fundamental to all the harmonic distortion:


$$
THD(dB)=20log(\frac{\sqrt{V^2_{2(RMS)}+V^2_{3(RMS)}+...+V^2_{n(RMS)}}}{V_{1(RMS)}}
$$

![](https://cos.wiki-power.com/img/20221009225800.png)

### Signal to Noise and Distortion Ratio (SINAD)

**Signal to Noise and Distortion Ratio (SINAD)**

### Inter-modulation Error (IM)

**Inter-modulation Error (IM)**
