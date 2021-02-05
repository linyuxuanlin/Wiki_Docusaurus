---
id: HAL库开发笔记（二）-点亮LED
title: HAL 库开发笔记（二） - 点亮 LED
---


## 配置时钟与串口下载

请参考文章 [**HAL 库开发笔记（一） - 环境配置**](https://wiki-power.com/HAL%E5%BA%93%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0%EF%BC%88%E4%B8%80%EF%BC%89-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE#%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%85%8D%E7%BD%AE) 。

高速时钟我用的是 HSI, HSE 怎么都用不了，可能是硬件的问题，有待后续排除。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205145831.png)


## 配置 GPIO

将 LED 相应的 GPIO 口设置为输出，并设置初始电平。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205150422.png)

对应到我的板子上，就需要把 `PD4` 和 `PI3` 这两个 GPIO 设置为输出（`GPIO_Output`）。如果设置为上电点亮，那么根据电路原理图，将初始电位设置为低（`Lows`）。

## 添加闪灯效果

如果配置之无误的话，上电即可点亮两颗用户 LED. 添加闪灯效果，只需要在主循环的用户代码中添加几行代码：

```c
HAL_Delay(500);
HAL_GPIO_TogglePin(GPIOD, GPIO_PIN_4);
HAL_GPIO_TogglePin(GPIOI, GPIO_PIN_3);
```

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205151322.png)

即可实现闪灯效果。


## 参考与致谢 

- [【STM32】STM32CubeMX 教程二 -- 基本使用 (新建工程点亮 LED 灯)](https://blog.csdn.net/as480133937/article/details/98947162)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
