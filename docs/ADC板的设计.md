---
id: ADC板的设计
title: ADC 板的设计
---

ADC 板将模拟信号变成数字信号，以供数字设备处理。

需求：

- 9 通道
  - 7 pin's 0 or 24vac(on/off)
  - 2 pin's 0-10vac(variable)
- 10 个螺丝端子（其中 1 个是地）
- 过电压保护、耐反向电压
- 和 BlueNano V1 兼容同一个外壳
- 加两个 Microbus 座子以连接 Beagle Connect

## ADC 芯片方案

ADC 芯片选择 TI 的 ADS1115，其基本参数如下：

- 电源电压：2.0-5.5V
- 调制器：delta-sigma(ΔΣ) 型
- 参考电压：内部
- 通信接口协议：IIC
- 单芯片通道：4 个
- 分辨率：16 位（65536）
- 可编程数据速率：8-860 SPS
- 可编程比较器（PGA）
- 模式：单冲、持续

### 简化框图

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210823091816.png)

### 引脚分布

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210817111905.png)

未使用的引脚接法：

- 模拟：浮空或连接中间电源（接地会产生较大的漏电流）
- NC：浮空或接地
- ALERT/RDY：浮空或弱上拉

### 推荐使用条件

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210823170550.png)

### IIC

ADS1015 可以根据 ADDR 引脚选择接 GND，VDD，SDA，SCL 四个引脚，从而设置不同地址：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210817142432.png)

注：优先使用 GND，VDD 和 SCL 来定义地址（如果使用 SDA 作为设备地址，则需要在 SCL 线变为低电平后，保持 SDA 线为低电平至少 100 ns，以确保设备在 I2C 通信期间正确解码地址）。

### 参考原理图

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210817150513.png)

多个 ADS1015 一起使用：根据 ADDR 接法来区分地址

### 分压电路

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210820142209.png)

$V_{OUT}=\frac{V_S\times R_2}{R_1+R_2}$

0-24V -> 0-1.14V

- R1：7.5k
- R2：374r

- R1：10k
- R2：499r

FSR = ±2.048 V
LSB size:62.5 μV
010 : FSR = ±2.048 V (default)
common:6M
diff:4.9MΩ

### MUX

Input signal referenced to ground (All 4 inputs are selectable)
AIN0(+) ~ GND(-),
AIN1(+) ~ GND(-),
AIN2(+) ~ GND(-).
AIN3(+) ~ GND(-).
Two Differential inputs:
AIN0(+) ~ AIN1(-),
AIN2(+) ~ AIN3(-).
Three referenced inputs:
AIN0(+) ~ AIN3(-),
AIN1(+) ~ AIN3(-),
AIN2(+) ~ AIN3(-).

000 : AINP = AIN0 and AINN = AIN1 (default)

### PGA

010 : FSR = ±2.048 V (default)

### ESD

Electrostatic discharge (ESD) diodes connected to VDD and GND protect the ADS111x analog inputs. Keep the absolute voltage of any input within the range shown in Equation 3 to prevent the ESD diodes from turning on.

GND – 0.3 V < V(AINX) < VDD + 0.3 V

If the voltages on the input pins can potentially violate these conditions, use external Schottky diodes and series resistors to limit the input current to safe values (see the Absolute Maximum Ratings table).

### 过压过流保护

如果模拟输入电压长期超出规定值 300 mV，芯片将永久是损坏。防止过压的一种方法是放置限流电阻。ADS1115 的模拟输入可以承受高达 10 mA 的连续电流。

## 参考与致谢

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210820101621.png)

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210820144842.png)

- [ADS1015 +/-24V ADC breakout](https://shop.pimoroni.com/products/ads1015-adc-breakout)
- [ADS1015](https://www.ti.com.cn/product/cn/ADS1015)
- [电路保护解决方案大全](https://mp.weixin.qq.com/s/6cR89cHOvxBzbsDqKUv6Ig)
- [ADS1015 使用指南及 STM32 驱动程序](https://blog.csdn.net/Dinvent/article/details/103371720)
- [使用 A/D 转换器时的注意事项](https://titron.github.io/2019/10/16/ADC_appnote/)
- [ADC 转换精度的定义](https://titron.github.io/2019/10/16/ADC_precision/)
- [A/D(模数转换)的主要指标](http://c.biancheng.net/cpp/html/1960.html)
- [Differential inputs and programmable gain](https://github.com/pimoroni/ads1015-python/issues/8)
- [Using the ADS1115](https://www.best-microcontroller-projects.com/ads1115.html)

> This library is intended to be a generic driver for the ADS1015, although it's very strongly minded (by way of defaults and some, perhaps erroneous, comments) toward our Breakout Garden ADC breakout.
>
> The gain is only relevant to the range of the ADC itself, which is 0v to VCC (a maxmum of 5v). The +-24v range is provided by means of a voltage divider which only exists on our Breakout Garden breakout.
>
> Since our voltage divider divides 24v down to 1.14v there's no reason to ever use a gain value that gives a full-scale range higher than +-2.048
>
> In the case of a differential reading (which can only be measured between channels 0 and 1 due to VREF occupying channel 3 on our breakout) the input range is 0-24v since neither of the input voltages can be negative. The result produced would be a +-24v differential between input A and B
>
> In this case (again only on out breakout) you would be measuring the difference between 0-24v divided down to 0-1.14v on both channels, and subsequently multipled by by the resistor divider values.
