---
id: ATE-DC_Parameters
title: ATE - DC Parameters
---

DC parameters test is essentially measuring the resistivity of the silicon. They are tested by PPMU forcing current then measuring voltage, or forcing voltage then measuring current. Will compare the measured value with the spec value outside the tester, then conclude a test result with PASS or FAIL.

DC parameters can also be tested with functional method, will be compared with the spec value by voltage comparator inside the PE (Pin Electronic) during functional test procedure, and conclude a go-nogo test result without specific values.

Test items of DC parameters are as follows:

- [**Power Supply Current Test (IDD)**](https://wiki-power.com/ATE-DC-IDD_Test)
  - Gross IDD Test
  - Static IDD Test
  - Dynamic IDD Test
  - Quiescent IDD Test (IDDQ)
- [**Leakage Test**](https://wiki-power.com/ATE-DC-Leakage_Test)
  - Input Leakage Test (IIL & IIH)
  - Output Tristate Leakage Test (IOZL & IOZH)
- [**Level Threshold Test**](https://wiki-power.com/ATE-DC-Level_Threshold_Test)
  - Output Level Threshold Test (VOL/IOL & VOH/IOH)
  - Input Level Threshold Test (VIL & VIH)
- Optional tests
  - Input Clamp (VI)
  - Output Short-circuit Current (IOS) Test
  - Resistive Inputs Test
  - Output Fanout Test

Metions that current is defined to positive when flow into DUT, and negative when flow outside of DUT.

## References & Acknowledgements

- *The Fundamentals Of Digital Semiconductor Testing*
- *Fundamentals of Testing Using ATE*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.
