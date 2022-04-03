---
id: HAL库开发笔记（八）-I2C通信（MPU6050）
title: HAL 库开发笔记（八）- I2C 通信（MPU6050）
---

本篇将使用 MPU6050（三轴加速度计+三轴陀螺仪）模组讲解 HAL 库 I2C 通信的方式。

## 参考与致谢

- [leech001/MPU6050](https://github.com/leech001/MPU6050)
- [通信协议 - I2C](https://wiki-power.com/%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE-I2C)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 基本原理