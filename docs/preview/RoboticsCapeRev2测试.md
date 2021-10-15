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
- 舵机输出：通过 J8 外接舵机进行测试
- 使能：CAP_OE2# 引脚输入高电平使舵机失能

## 捕获输入（舵机）

- 捕获输入：通过 J19 读取模拟电压值（ADC）
- 使能：CAP_OE1# 引脚输入高电平使捕获输入失能

## 编码器（QEP）

- 通过 J13/J14，用示波器或测试代码读取编码器输入

## USB Hub

- 测试 4 个 USB 的通信速率
-

## 传感器

- 大气压传感器（Barometer）：通过 SPI 总线，使用程序测试功能
- 激光雷达接口（Lidar Interface）：通过程序测试功能
- 六轴传感器（6-DOF Sensor）：通过 SPI 总线，使用程序测试功能
- 陀螺仪（Compass）：通过 SPI 总线，使用程序测试功能
- 超声波接口（Ultrasonic Ranger Interface）：通过 [**测试程序**](https://wiki.seeedstudio.com/Grove-Ultrasonic_Ranger/) 测试功能。

## BeagleConnect 接口

- 测试串口收发 / 复位功能

## GPS 接口

- 测试串口收发功能

## BBAI 接口

- 按钮：测试输入
- LED：测试输出
- EEPROM：通过 SPI 测试
