---
id: ATE-DC_Parameters_Test
title: ATE - DC Parameters Test 🚧
---

DC parameters test is essentially measuring the resistivity of the silicon. They are tested by PPMU forcing current then measuring voltage, or forcing voltage then measuring current. Will compare the measured value with the spec value outside the tester, then conclude a test result with pass or fail. 

DC parameters can also be tested with functional method, will be compared with the spec value by voltage comparator inside the PE (Pin Electronic) during functional test procedure, and conclude a go-nogo test result without specific values.

Test items of DC parameters are as follows:

- Power Supply Current Test (IDD)
  - Gross IDD 
  - Static IDD
  - Dynamic IDD
  - IDDQ
- Input Leakage Test (IIL & IIH) 
- Output Level Threshold Test (VOL/IOL & VOH/IOH)
- Input Level Threshold Test (VIL & VIH)
- Optional tests
  - Output High-Z Leakage Test (IOZL & IOZH)
  - Input Clamp (VI)
  - Output Short-circuit Current (IOS)
  - Resistive Inputs
  - Output Fanout

## References & Acknowledgements

- 《The Fundamentals Of Digital Semiconductor Testing》
- 《Fundamentals of Testing Using ATE》

> This article is protected by [**CC BY-NC-SA 4.0**](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.