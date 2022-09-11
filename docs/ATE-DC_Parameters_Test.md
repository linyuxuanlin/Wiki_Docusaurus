---
id: ATE-DC_Parameters_Test
title: ATE - DC Parameters Test 🚧
---

## References & Acknowledgements

- *The Fundamentals Of Digital Semiconductor Testing*
- *Fundamentals of Testing Using ATE*

> This article is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.

---

DC parameters test is essentially measuring the resistivity of the silicon. They are tested by PPMU forcing current then measuring voltage, or forcing voltage then measuring current. Will compare the measured value with the spec value outside the tester, then conclude a test result with pass or fail.

DC parameters can also be tested with functional method, will be compared with the spec value by voltage comparator inside the PE (Pin Electronic) during functional test procedure, and conclude a go-nogo test result without specific values.

Test items of DC parameters are as follows:

- Power Supply Current Test (IDD)
  - Gross IDD
  - Static IDD
  - Dynamic IDD
  - Quiescent IDD (IDDQ)
- Input Leakage Test (IIL & IIH)
- Output Level Threshold Test (VOL/IOL & VOH/IOH)
- Input Level Threshold Test (VIL & VIH)
- Optional tests: Output High-Z Leakage Test (IOZL & IOZH), Input Clamp (VI), Output Short-circuit Current (IOS), Resistive Inputs, Output Fanout

## Power Supply Current Test (IDD)

IDD indicates the current flows from Drain to Drain in a CMOS circuit (ICC in TTL circuit, Collector to Collector). IDD can be equivalent as:

![](https://cos.wiki-power.com/img/20220910234238.png)

## Static IDD Test

Static IDD is a measurement of current from Device VDD pin, when the device is in static state (the DUT is not active during the test). The value of static IDD indicates the lowest current consumption of the DUT, which is important for battery operated devices, also help to indicate marginal defects.

### Test Method

Static IDD test is performed with applying a voltage of VDDmax and measuring the current value, while the DUT is preconditioned to its lowest current consumption logic state.

![](https://cos.wiki-power.com/img/20220911142730.png)

1. Apply VDDmax to VDD pin (with current clamp?).
2. Precondition Device to its lowest current consumption logic state.
3. Measure current flowing into VDD pin:
   - **Higher than max spec(>10uA)**: FAIL
   - **Lower than min spec(<10uA)**: PASS

## Dynamic IDD Test

Dynamic IDD is a measurement of current from Device VDD pin, when the device is in static state (the DUT is not active during the test). The value of static IDD indicates the lowest current consumption of the DUT, which is important for battery operated devices, also help to indicate marginal defects.

### Test Method
