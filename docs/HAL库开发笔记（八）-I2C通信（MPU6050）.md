---
id: HAL库开发笔记（八）-I2C通信（MPU6050）
title: HAL 库开发笔记（八）- I2C 通信（MPU6050）
---

本篇将使用 MPU6050（三轴加速度计 + 三轴陀螺仪）模组讲解 HAL 库 I2C 通信的方式。

## 参考与致谢

- [leech001/MPU6050](https://github.com/leech001/MPU6050)
- [通信协议 - I2C](https://wiki-power.com/%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE-I2C)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 基本原理

### I2C 通信

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211026174634.png)

I2C 通信的基本原理可参考文章 [**【通信协议 - I2C】**](https://wiki-power.com/%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE-I2C)

### MPU6050 模组

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220403185008.png)

模组的引脚定义：

- VCC：3.3V~5V
- GND：地
- SCL：I2C 时钟 / SPI 时钟
- SDA：I2C 数据 / SPI 数据输入
- XDA：给 I2C 设备提供主时钟
- AD0：I2C 器件地址选择位 / SPI 数据输出
- INT：中断引脚

## 使用 I2C 读取 MPU6050 返回的信息

### 在 CubeMX 内配置 I2C 总线

在 CubeMX 左侧功能分类栏选择 `通信` - `I2Cx`，将 I2C 的选项设置从 `disable` 更改为 `I2C`，并在弹出的配置界面配置参数（默认即可）：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220403190116.png)

### 在代码内配置 I2C 读取 MPU6050 返回的信息

在 `main.c` 中开启定时器：

```c title="main.c"
/* USER CODE BEGIN 2 */

HAL_TIM_PWM_Start(&htim8,TIM_CHANNEL_1);

// 设置占空比为 500（500 Hz/1 kHz=50%）
__HAL_TIM_SetCompare(&htim8,TIM_CHANNEL_1,500);

/* USER CODE END 2 */
```

