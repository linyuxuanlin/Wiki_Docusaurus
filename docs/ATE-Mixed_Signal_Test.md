---
id: ATE-Mixed_Signal_Test
title: ATE - Mixed Signal Test
---

## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.

---

Mixed signal contains both analog and digital signals. Devices processing mixed signal typically include ADCs, DACs, analog switches and multiplexers, sample-and-hold amplifiers, and so on.

As a part of it, analog signals is signals we use in the real world such as voice or tempurature, it's continuous in both time and amplitude. To process analog signals into computers, we need to convert them to digital signals, as it's discrete in both time and amplitude.

## Basic Glossary

- **Sample**: Each measurement or number.
- **Sample Set**: A series of samples which represent the analog signal.
- **AWG (Arbitrary Waveform Generato)**: Low distortion signal generator.
- DSP
  - **Digital Signal Processor**: A specialized device designed to process arrays rapidly, that are composed of digital representations of analog signals.
  - **Digital Signal Processing**: The process of analyzing sampled analog signal after it has been conberted into binary data.
- **WD (Waveform Digitizer)**: Instrument that samples analog signals and converts them into digital values.

## Basics of Sampling Theory

![](https://cos.wiki-power.com/img/20220929094314.png)

### Nyquist Theorem

We use **Nyquist Theorem（奈奎斯特定理）** to gain the minimum sampling frequency when sampling signals:

$$
F_s≥2F_i
$$

We must sample at a rate higher than twice the highest frequency of interest, to be able to recreate a signal from its samples and avoid losing information.

If we sample at a frequency that lower that the Nyquist rate, it will exhibit a phenomenon called **aliasing（混叠）**(unwanted components) when we try to convert it back to a continuous time signal, and some of the frequencies in the original signal may be lost.

To minimize aliasing problem, we need to remove the frequency greater than $\frac{F_s}{2}$ of the signal, via the anti-aliasing filter (e.g. low-pass-filter):

![](https://cos.wiki-power.com/img/20220930154335.png)

### Coherent Sampling

**Coherent sampling（相干采样）** is to ensure the continuity of sampling and prevent spectrum leakage（频谱泄露）, it guarantees that a sample set has a fixed and well defined relationship between $F_s$, $N$, $F_i$ and $M$:

$$
\frac{M}{N}=\frac{F_i}{F_s}
$$

Where $N$ is the number of samples, and $M$ is the number of $F_i$ cycles over which samples are taken.

For an example, if we want to calculate the $F_s$ of continuous repeating sinewave, where $F_i$ is 1kHz, $M=3$ and $N=16$:

![](https://cos.wiki-power.com/img/20220930164712.png)

So we can conclude that $F_s=5.333kHz$.

Important tips of coherent sampling:

- Increasing $M$ and/or $N$ will increase both accuracy and test time.
- $M$ and $N$ needs to be a whole number.
- $N$ needs to be a power of 2 when using Fast Fourier Transform (FFT).
- $M$ and $N$ are recommended to be mutually prime（互质）so that each sample gives unique information. Described in the following.

If $M$ and $N$ are not mutually prime ($M=3,N=12$), samples are taken at the same position in every cycle, so there is no new information:

![](https://cos.wiki-power.com/img/20220930170300.png)

If $M$ and $N$ aremutually prime ($M=3,N=16$), so they are mutually prime and every sample is discrete, so it gives unique information:

![](https://cos.wiki-power.com/img/20220930170343.png)

## Fundamentals Of Fast Fourier Transform (FFT)
