---
id: ADC板的设计
title: ADC 板的设计
---

ADC 是模数转换，将模拟信号变成数字信号，以供数字设备处理。

## 参考

- [ADS1015 +/-24V ADC breakout](https://shop.pimoroni.com/products/ads1015-adc-breakout)
- [ADS1015](https://www.ti.com.cn/product/cn/ADS1015)
- [电路保护解决方案大全](https://mp.weixin.qq.com/s/6cR89cHOvxBzbsDqKUv6Ig)
- [ADS1015 使用指南及 STM32 驱动程序](https://blog.csdn.net/Dinvent/article/details/103371720)
- [使用 A/D 转换器时的注意事项](https://titron.github.io/2019/10/16/ADC_appnote/)
- [ADC 转换精度的定义](https://titron.github.io/2019/10/16/ADC_precision/)
- [A/D(模数转换)的主要指标](http://c.biancheng.net/cpp/html/1960.html)

客户要求：

- 24 V 供电
- 9 通道
  - 7 pin's 0 or 24vac(on/off)
  - 2pin's 0-10vac(variable)
- 10 个螺丝端子（1 个地）
- 过电压保护
- 耐反向电压
- 和 BlueNano V1 兼容同一个外壳

客户给了一个方案：3 个 ads1015 组成 9 通道，或者用 ADS111x 系列组建 9 通道；

## ADC 芯片方案

ADC 芯片选择 TI 的 ADS1015，其基本参数如下：

- 电源电压：2.0-5.5V
- 调制器：delta-sigma(ΔΣ) 型
- 参考电压：内部
- 通信接口协议：IIC
- 单芯片通道：4 个
- 分辨率：12 位（4096）
- 可编程数据速率：128-3.3k SPS
- 可编程比较器（PGA）
- 模式：单冲、持续

### 简化框图

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210817110252.png)

### 引脚分布

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210817111905.png)

未使用的引脚接法：

- 模拟：浮空或连接中间电源（接地会产生较大的漏电流）
- NC：浮空或接地
- ALERT/RDY：浮空或弱上拉

### IIC

ADS1015 可以根据 ADDR 引脚选择接 GND，VDD，SDA，SCL 四个引脚，从而设置不同地址：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210817142432.png)

注：优先使用 GND，VDD 和 SCL 来定义地址（如果使用 SDA 作为设备地址，则需要在 SCL 线变为低电平后，保持 SDA 线为低电平至少 100 ns，以确保设备在 I2C 通信期间正确解码地址）。

### 参考原理图

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210817150513.png)

多个 ADS1015 一起使用：根据 ADDR 接法来区分地址
