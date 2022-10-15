---
id: Basics_of_Fourier_Transform
title: Basics of Fourier Transform 🚧
---

There are several algorithms for transforming data from the time domain to the frequency domain:

- **Fourier Transform (FT)**: continuous-time signals, possible only theoretically, can't be implemented using computer.

<iframe src=https://github.com/linyuxuanlin/File-host/raw/main/semiconductor-test/The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe.pdf>

不兼容。
</iframe>

## Fourier Series

A **Fourier Series**（傅里叶级数） is summarized as creating a complex waveform by summing pure sine waves with different amplitudes and frequencies, and to decompose a complex signal into a sum of sinusoids of different amplitudes and frequencies.

### Dirichlet Conditions

Dirichlet Conditions specify a set of conditions that must be met before a signal can be decomposed into a Fourier Series:

- The signal is a mathematical function, i.e., one and only one y-point corresponds to each x-point.
- The signal is periodic.
- The area bounded by the signal over one period is finite. 



## Discrete Fourier Transform (DFT)

**Discrete Fourier Transform (DFT)**: sampled signals, finite number of samples, high calculation complexity.

## Fast Fourier Transform (FFT)

**Fast Fourier Transform (FFT)**

sampled signals, $2^n$ numbers of samples, low calculation complexity. FFT assumes periodicity（周期性） in all cases.

For Fast Fourier Transform (FFT), the number of samples $N$ needs to be a power of 2 as it makes transform algorithm simpler and much faster.

## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
