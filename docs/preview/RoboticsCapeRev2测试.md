---
id: RoboticsCapeRev2测试
title: Robotics Cape Rev2 测试
---

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

- USB 口接 U 盘，插拔识别测试：是否能够识别到 U 盘的插拔动作
- 读速率测试：测试速率
- 写速率测试：测试速率

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

## 问题

- M2 丝印错误
- 增加测试点
- Motor 2/3/4 产生过流保护后不能复位，需要用 nSleep 信号产生复位，现原理图设计没有将 nSleep 拉出。后续将 Disable 信号换为 nSleep。
- Motor1 的电容和主板有干涉，需要像板边方向再挪 2mm。
- 需要根据测试需求增加测试点。
- usb power switch 要用 tps2044
- usb hub dp 需要上拉 1.5k，否则不枚举设备。
- VDD_5V 需要加防倒灌二极管，12Vdc 插错孔，导致 USB Hub 损害。
- 电池接口增加防反接保护电路。
- I2C EEPROM 与气压计硬件冲突，无法分时复用。
