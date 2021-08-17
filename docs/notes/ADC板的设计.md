---
id: ADC板的设计
title: ADC 板的设计
---

ADC：模数转换，将模拟信号变成数字信号，便于数字设备处理。

## 参考

- [ADS1015 +/-24V ADC breakout](https://shop.pimoroni.com/products/ads1015-adc-breakout)
- [ADS1015](https://www.ti.com.cn/product/cn/ADS1015)
- [电路保护解决方案大全](https://mp.weixin.qq.com/s/6cR89cHOvxBzbsDqKUv6Ig)
- [ADS1015使用指南及STM32驱动程序](https://blog.csdn.net/Dinvent/article/details/103371720)
- [使用A/D转换器时的注意事项](https://titron.github.io/2019/10/16/ADC_appnote/)
- [ADC转换精度的定义](https://titron.github.io/2019/10/16/ADC_precision/)
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

客户给了一个方案：3 x ads1015，或者用 ADS111x 系列组建 9 通道；

设计参数：



## ADC 的工作原理

模拟信号转换为数字信号,一般分为 4 个步骤进行,即采样、保持、量化和编码。前 2 个步骤在采样-保持电路中完成,后两步骤则在ADC中完成。ADC是把经过与标准量比较处理后的模拟量转换成以二进制数值表示的离散信号的转换器。故任何一个模数转换器都需要一个参考模拟量作为转换的标准，比较常见的参考标准为最大的可转换信号大小。而输出的数字量则表示输入信号相对于参考信号的大小。

### 性能参数

- MSR：采样率，定义单位周期或时间内的从信号中的采样点数，采样率越高后级的数字表示精度越高。
- SFDR：无杂散动态范围，指载波频率与最大噪声的幅度比值，表征的是信号源失真。
- SNR：输出的信号电压与噪声电压的比值（dB），SNR越高信号的噪声越小。

## ADS1015

ADS1015 是TI公司生产的一款 delta-sigma(ΔΣ) AD转换芯片，采用IIC串口协议通信，4个转换通道，12位转换精度，最大转换速度为3.3ksps，内置增益放大器，用户可以根据自己所需设置增益。

### 基本参数

- 电源电压：2.0-5.5V
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

ADS1015 可以根据 ADDR 接 GND VDD SDA SCL四个引脚，来设置不同地址：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210817142432.png)

注：优先使用 GND，VDD 和 SCL 来定义地址。