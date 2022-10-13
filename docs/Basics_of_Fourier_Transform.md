---
id: Basics_of_Fourier_Transform
title: Basics of Fourier Transform 🚧
---

There are several algorithms for transforming data from the time domain to the frequency domain:

- **Fourier Transform (FT)**: continuous-time signals, possible only theoretically, can't be implemented using computer.
- **Discrete Fourier Transform (DFT)**: sampled signals, finite number of samples, high calculation complexity.
- **Fast Fourier Transform (FFT)**: sampled signals, $2^n$ numbers of samples, low calculation complexity. FFT assumes periodicity（周期性） in all cases.

## Fast Fourier Transform (FFT)

for Fast Fourier Transform (FFT), the number of samples $N$ needs to be a power of 2 as it makes transform algorithm simpler and much faster.



## References & Acknowledgements

- *Fundamentals of Testing Using ATE*
- *The-Fundamentals-of-Mixed-Signal-Testing_Brian-Lowe*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
