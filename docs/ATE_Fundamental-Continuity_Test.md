---
id: ATE_Fundamental-Continuity_Test
title: ATE Fundamental - Continuity Test 🚧
---

## Continuity Test (Open/Short)

Continuity test is to confirm the electronical contact between tester and DUT, and whether if short-circuit existed to other pins or to ground.

### Test Method

Continuity test is performed with testing the protection diodes (diodes to VDD and to GND). Usually use PPMU with VBT code (also can be tested using PE and functional pattern).

**Test through GND protection diode**:

![](https://cos.wiki-power.com/img/20220909003924.png)

1. Force 0V to all other pins that are not tested (include power pin).
2. Force a small negative current (-100uA) on the Pin Under Test (with voltage clamp). 
3. Meaure voltage on the Pin Under Test：
   - **Higher than max spec(>-0.2V)**: Fail (Short)
   - **Midband(-1.5V~-0.2V**): Pass
   - **Lower than min spec(<-1.5V)**: Fail (Open)

**Test through VDD protection diode**:

![](https://cos.wiki-power.com/img/20220909004139.png)

1. Force 0V to all other pins that are not tested (include power pin).
2. Force a small positive current (+100uA) on the Pin Under Test (with voltage clamp).
3. Meaure voltage on the Pin Under Test：
   - **Higher than max spec(>1.5V)**: Fail (Short)
   - **Midband(0.2V~1.5V)**: Pass
   - **Lower than min spec(<0.2V)**: Fail (Open)

## Power Pin Short Test

Power pin short test is to check if there is a short-circuit from VDD to GND pin, which will cause damagement to DUT or tester. Power pin short test always run immediately after continuity test, and when it fails, device power will be shut off and the DUT will be rejected.

### Test Method

Power Pin Short Test is performed by applying a small voltage to VDD, and measure the current into it, to check if a short-circuit existed. Usually use DCVI with VBT code.

![](https://cos.wiki-power.com/img/20220910155805.png)

1. Apply a small voltage to VDD (100mV) (with current clamp).
2. Force all other pins to 0V with PPMU.
3. Measure current flowing into VDD pin:
   - **Higher than max spec(>20uA)**: Fail (Short)
   - **Midband(-1uA~20uA)**: Pass
   - **Lower than min spec(<-1uA)**: Fail




