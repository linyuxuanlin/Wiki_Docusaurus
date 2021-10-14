---
id: RoboticsCapeRev2测试
title: Robotics Cape Rev2 测试
---

## 电源

- VCC_IN：通过两种输入方式
- Battery_Voltage：Vsample=(6.667/36.667)\*Vin
- VDD_6V：测试满电流
- VDD_5V：测试满电流

## 电机驱动 1

- 控制信号
  - Motor1_IN1/Motor1_IN2/Motor1_PWM：输入电机信号
  - Motor1_SLP#/Motor1_FAULT#/Motor1_OC#/Motor1_CLMT/Motor1_Current：其他控制信号
- 电机输出：通过 J4 测电压，或接电机测试

## 电机驱动 2/3/4

- 控制信号
  - MotorN_IN1/MotorN_IN2/MotorN_PWM：输入电机信号
  - MotorN_DISABLE/MotorN_IPROPI/MotorN_FAULT#：其他控制信号
- 电机输出：通过 J5/J6/J7 测电压，或接电机测试

## 舵机

- 控制信号：通过 ServoN（10 路舵机）输入 PWM 控制信号
- 舵机输出：通过 J8/J11/J12 外接舵机进行测试

## 编码器（QEP）

## 捕获输入