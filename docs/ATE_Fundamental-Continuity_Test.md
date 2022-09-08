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

1. Force 0V to all other pins that are not tested (include power pin).
2. Force a small negative current (-100uA) on the pin under test. (with voltage clamp)
3. Meaure voltage on the pin under test

Judge the test result refer to the measured voltage:

|Situation|Example|Result|Comment|
|-|-|-|-|
|Higher than max spec|>-200mV|Fail|Short|
|Lower than min spec|<-800mV|Fail|Open|




  -  (): Fail Short.
  - Lower than min spec (-800mV): Fail Open

1. Test limits to a high of -200mV(higher: short) and a low of -800mV(lower: open).



**Reasons of not passing**: 



## Power Pin Short Test

Method: using PPMU with VBT

