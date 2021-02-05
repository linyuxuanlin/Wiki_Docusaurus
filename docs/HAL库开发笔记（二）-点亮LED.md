---
id: HAL库开发笔记（二）-GPIO
title: HAL 库开发笔记（二） - GPIO
---


## 配置时钟与串口下载

此处参照文章 [**HAL 库开发笔记（一） - 环境配置**](https://wiki-power.com/HAL%E5%BA%93%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0%EF%BC%88%E4%B8%80%EF%BC%89-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE#%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%85%8D%E7%BD%AE) 中的方法进行配置。


## 点亮 LED

### 配置 GPIO

将 LED 相应的 GPIO 口设置为输出，并设置初始电平。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205150422.png)

对应到我的板子上，就需要把 `PD4` 和 `PI3` 这两个 GPIO 设置为输出（`GPIO_Output`）。  
如果想要上电就点亮，那么根据电路原理图，将初始电位设置为低（`Low`）。

### 添加功能代码

如果配置之无误的话，上电即可点亮两颗用户 LED.   
如果要添加闪灯效果，只需要在主循环的用户代码区域内添加几行代码：

```c
HAL_Delay(500);
HAL_GPIO_TogglePin(GPIOD, GPIO_PIN_4);
HAL_GPIO_TogglePin(GPIOI, GPIO_PIN_3);
```

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205151322.png)

即可实现闪灯效果。



## 按键控灯

在学习了 GPIO 的输出后，我们用按键来学习 GPIO 的输入模式。

### 配置 GPIO

按照上面的方法配置 LED 所属的 GPIO 端口后，根据板载按键的原理图：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205150422.png)

将按键所属的 GPIO（`PI8`）设置为输入（`GPIO_Input`）。根据原理图，选择上拉模式。生成代码。

### 添加功能代码

在主循环的用户代码区域内添加如下代码：

```c
if(HAL_GPIO_ReadPin(KEY1_GPIO_Port,KEY1_Pin)==0)
{
	HAL_Delay(100);
	if(HAL_GPIO_ReadPin(KEY1_GPIO_Port,KEY1_Pin)==0)
	{
		HAL_GPIO_WritePin(LED1_GPIO_Port,LED1_Pin,GPIO_PIN_RESET);
	}
}else{
	HAL_GPIO_WritePin(LED1_GPIO_Port,LED1_Pin,GPIO_PIN_SET);
}
```

即可实现按下按键开灯，松开按键关灯的效果。

## 常用的 GPIO 函数

读取 GPIO 状态，返回高 / 低电平：

```c
GPIO_PinState HAL_GPIO_ReadPin(GPIOx, GPIO_Pin);
```

写 GPIO 状态，写入高 / 低电平：

```c
HAL_GPIO_WritePin(GPIOx, GPIO_Pin, PinState);
```

翻转 GPIO 电平：

```c
HAL_GPIO_TogglePin(GPIOx, GPIO_Pin);
```



## 参考与致谢 

- [【STM32】STM32CubeMX 教程二 -- 基本使用 (新建工程点亮 LED 灯)](https://blog.csdn.net/as480133937/article/details/98947162)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
