---
id: Digital_Functional_Test
title: Digital Functional Test 🚧
---

## References & Acknowledgements

- *The Fundamentals Of Digital Semiconductor Testing*
- *Fundamentals of Testing Using ATE*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.

## Drive and Compare Timing

- D0 or Drive On: Start of cycle for each channel
- D1 or Drive Data: Start of drive pulse for each channel
- D2 or Drive Return: End of drive pulse for each channel
- D3 or Drive Off: Time of I/O switch
- R0 or Compare Start (On): Start of compare window for each channel (window strobe)
- R1 or Compare End (Off): End of compare window for each channel (window strobe) or edge strobe

## Troubleshooting of Digital Functional Debug

1. Reduce test frequency.
2. View the actual waveform, modify the position of comparison.
3. Repeat pattern lines for more times in prevent of the influence of setup time.
4. Use Shmoo method to analyze.
5. Switching the order of test execution, in prevent of the interaction between tests.
6. Pay attention to the Pin Electronic Driver Mode
. Vt, Hi-z, Largeswing-VT1K or Smallswing-VT?
7. Defects with pattern itself.
