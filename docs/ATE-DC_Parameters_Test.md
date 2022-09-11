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

DC parameters can also be tested with functional method, will be compared with the spec value by voltage comparator inside the PE (Pin Electronic) during functional test procedure, and conclude a go-nogo test result without specific values. Test items are as follows:

- Power Supply Current (IDD)
  - Gross IDD Test
  - Static IDD Test
  - Dynamic IDD Test
  - Quiescent IDD Test (IDDQ)
- Input Leakage Test (IIL & IIH)
- Output Level Threshold Test (VOL/IOL & VOH/IOH)
- Input Level Threshold Test (VIL & VIH)
- Optional tests: Output High-Z Leakage Test (IOZL & IOZH), Input Clamp (VI), Output Short-circuit Current (IOS), Resistive Inputs, Output Fanout

## Power Supply Current (IDD)

IDD indicates the current flows from Drain to Drain in a CMOS circuit (ICC in TTL circuit, Collector to Collector). IDD can be equivalent as:

![](https://cos.wiki-power.com/img/20220910234238.png)

## Static IDD Test

Static IDD is a measurement of current from DUT's VDD pin, when the DUT is in static state (the DUT is not active during the test). The value of static IDD indicates the lowest current consumption of the DUT, which is important for battery operated devices, also help to indicate marginal defects.

### Test Method

Static IDD test is performed with applying a voltage of VDDmax and measuring the current value, while the DUT is preconditioned to its lowest current consumption logic state.

![](https://cos.wiki-power.com/img/20220911201659.png)

1. Apply VDDmax to VDD pin (with current clamp).
2. Precondition DUT to its lowest current consumption logic state.
3. Measure current flowing into VDD pin:
   - **Higher than max spec(>10uA)**: FAIL
   - **Lower than min spec(<10uA)**: PASS

## Dynamic IDD Test

Dynamic IDD is a measurement of current from DUT's VDD pin, when the DUT is constantly performing some function. Dynamic IDD is also important for battery operated devices.

### Test Method

![](https://cos.wiki-power.com/img/20220911201603.png)

Static IDD test is performed with applying a voltage of VDDmax and measuring the current value, while the DUT is preconditioned to a continuously working state.

1. Apply VDDmax to VDD pin (with current clamp).
2. Precondition DUT to a continuously working state.
3. Measure current flowing into VDD pin:
   - **Higher than max spec(>50mA)**: FAIL
   - **Lower than min spec(<50mA)**: PASS

## Quiescent IDD Test (IDDQ)

Quiescent IDD is a measurement of IDD in the quiescent states (the circuit is not switching and inputs are held at static values). As processors shrink , the defect of leakage current becomes much more higher, and IDDQ test may detect minor defects within the core of the circuit that could not other wise be detected.

![](https://cos.wiki-power.com/img/20220911213042.png)

1. Apply VDDmax to VDD pin (with current clamp).
2. Precondition DUT to a certain working state (toggle certain function part to on/off such as Bluetooth and Wi-Fi).
3. Measure current flowing into VDD pin:
   - **Higher than max spec**: FAIL
   - **Lower than min spec**: PASS
4. Repeat and test with different working states.

## Input Leakage Test (IIL & IIH)

Input leakage occurs in a input pin's buffer circuit. IIH is the leakage path from input pin to GND when the DUT is driven to "1", and IIL is the leakage path from VDD to input pin when driven to "0":

![](https://cos.wiki-power.com/img/20220911215421.png)

Actually, the measurement of IIL is the resistance from input pin to VDD, and IIH is the resistance from input pin to GND. Input leakage test is to ensure the pin's input buffer will not source or sink more unwanted current than specified.

### Test Method 🚧

Input leakage test (IIL & IIH) is performed with applying a voltage of VDDmax and measuring the current value, while the DUT is preconditioned to its lowest current consumption logic state.

![](https://cos.wiki-power.com/img/20220911201659.png)

1. Apply VDDmax to VDD pin (with current clamp).
2. Precondition DUT to its lowest current consumption logic state.
3. Measure current flowing into VDD pin:
   - **Higher than max spec(>10uA)**: FAIL
   - **Lower than min spec(<10uA)**: PASS
