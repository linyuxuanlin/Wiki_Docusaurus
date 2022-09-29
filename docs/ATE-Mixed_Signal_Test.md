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

- AWG(Arbitrary Waveform Generato): Low distortion signal generator.
- DSP:
  - Digital Signal Processor: A specialized device designed to process arrays rapidly, that are composed of digital representations of analog signals.
  - Digital Signal Processing: The process of analyzing sampled analog signal after it has been conberted into binary data.
- WD(Waveform Digitizer): Instrument that samples analog signals and converts them into digital values.

## Basics of Sampling Theory

![](https://cos.wiki-power.com/img/20220929094314.png)

We use **Nyquist Theorem** to define sampling frequency when sampling signals:

$$
F_s≥2F_i
$$

We must sample at a rate higher than twice the highest frequency of interest, to be able to recreate a signal from its samples and avoid losing information.

If we sample at a frequency that lower that the Nyquist rate, it will exhibit a phenomenon called **aliasing**(unwanted components) when we try to convert it back to a continuous time signal, and some of the frequencies in the original signal may be lost.

To minimize aliasing problem, we need to remove the frequency greater than $\Frac{F_s}{2}$ of the signal, via the anti-aliasing filter (e.g. low-pass-filter):

![](https://cos.wiki-power.com/img/20220929104825.png)
