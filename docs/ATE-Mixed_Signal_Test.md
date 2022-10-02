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

Basic glossary:

- **Sample**: Each measurement or number.
- **Sample Set**: A series of samples which represent the analog signal.
- **AWG (Arbitrary Waveform Generato)**: Low distortion signal generator.
- DSP
  - **Digital Signal Processor**: A specialized device designed to process arrays rapidly, that are composed of digital representations of analog signals.
  - **Digital Signal Processing**: The process of analyzing sampled analog signal after it has been conberted into binary data.
- **WD (Waveform Digitizer)**: Instrument that samples analog signals and converts them into digital values.
- **Root Mean Squared (RMS)**: The analog voltage that is equal to a DC voltage containing the same amount of energy. For a sine wave, the RMS value is 0.707 times the peak value.

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

There are several algorithms for transforming data from the time domain to the frequency domain:

- **Fourier Transform (FT)**: continuous-time signals, possible only theoretically, can't be implemented using computer.
- **Discrete Fourier Transform (DFT)**: sampled signals, finite number of samples, high calculation complexity.
- **Fast Fourier Transform (FFT)**: sampled signals, $2^n$ numbers of samples, low calculation complexity. FFT assumes periodicity（周期性） in all cases.

for Fast Fourier Transform (FFT), the number of samples $N$ needs to be a power of 2 as it makes transform algorithm simpler and much faster.

🚧

## Common Frequency Analysis Algorithms

For $N$ time-domain signal samples, there are $N$ frequency-domain signal values, and there are $N/2$ frequency-domain power spectrum values. A typical spectral components example is shown below:

![](https://cos.wiki-power.com/img/20221002145846.png)

There are several parameters for describing spectral components as follows:

- Signal To Noise Ratio (SNR)（信噪比）
- Total Harmonic Distortion (THD)（总谐波失真）
- Signal to Noise and Distortion (SINAD)（信纳比）
- Spurious Free Dynamic Range (SFDR)（无杂散动态范围）

### Signal To Noise Ratio (SNR)

**Signal To Noise Ratio (SNR)** is derived by storing the value of the fundamental (signal power) first:

![](https://cos.wiki-power.com/img/20221002151235.png)

Then remove the DC component and harmonics (usually up to 5):

![](https://cos.wiki-power.com/img/20221002151402.png)

Next sum all bins of the remaining power spectrum (the noise power) measured by the RMS value:

![](https://cos.wiki-power.com/img/20221002151646.png)

Ultimately we can conclude that:

$$
{SNR}_{dB}=10log_{10}(\frac{{Fundamental}}{{Noise\ Power}})
$$

SNR is usually expressed in decibels (dB), and is often a positive value (assuming the fundamental power is much larger than the noise power).

### Total Harmonic Distortion (THD)

**Total Harmonic Distortion (THD)** is derived by keeping a running sum of the total harmonic power (usually only the first five harmonics, start at the second harmonic):

![](https://cos.wiki-power.com/img/20221002155148.png)

And we can conclude that:

$$
{THD}_{dB}=10log_{10}(\frac{{Harmonic \ Power}}{{Fundamental}})
$$

THD is often a negative value (assuming the fundamental power is much larger than the total harmonic power).

### Signal to Noise and Distortion (SINAD)

Signal to Noise and Distortion (SINAD) is the same methodology as computing SNR, but now the power of the harmonics is added into, and only zero out the DC component.

$$
{SINAD}=\frac{S}{N+D}
$$

and we can conclued that:

$$
\because {SNR}=\frac{S}{N}, {THD}=\frac{D}{S}
$$

$$
\therefore {SNR}^{-1}+{THD}=\frac {N}{S}+\frac {D}{S}=\frac {N+D}{S}={SINAD}^{-1}
$$

$$
\therefore {SINAD}=({SNR}^{-1}+{THD})^{-1}
$$
