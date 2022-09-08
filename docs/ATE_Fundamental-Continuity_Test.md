---
id: ATE_Fundamental-Continuity_Test
title: ATE Fundamental - Continuity Test 🚧
---

## Continuity Test (Open/Short)

Continuity test is to confirm the electronical contact between tester and DUT, and whether if short-circuit existed to other pins or to ground.

### Theory

Continuity test is performed with protection diodes (to VDD and to GND). 



### Test Method

Usually use PPMU method with VBT code (also can be tested using PE and functional pattern).

**Test through GND protection diode**:

1. Force 0V to all other pins that are not tested (include power pin).
2. Force a small negative current (-100uA) on the Pin Under Test. (with voltage clamp)
3. Meaure voltage on the Pin Under Test.

Then determine the test result depending on the measured voltage:

| Situation            | Example     | Result | Comment |
| -------------------- | ----------- | ------ | ------- |
| Higher than max spec | >-0.2V      | Fail   | Short   |
| Midband              | -1.5V~-0.2V | Pass   |         |
| Lower than min spec  | <-1.5V      | Fail   | Open    |

**Test through VDD protection diode**:

1. Force 0V to all other pins that are not tested (include power pin).
2. Force a small positive current (+100uA) on the Pin Under Test. (with voltage clamp)
3. Meaure voltage on the Pin Under Test.

Then determine the test result depending on the measured voltage:

| Situation            | Example   | Result | Comment |
| -------------------- | --------- | ------ | ------- |
| Higher than max spec | >1.5V     | Fail   | Open    |
| Midband              | 0.2V~1.5V | Pass   |         |
| Lower than min spec  | <-0.2V    | Fail   | Short   |

## Power Pin Short Test

Method: using PPMU with VBT

