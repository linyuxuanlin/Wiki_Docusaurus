---
id: 电源设计-LDO的电源抑制比（PSRR）与测量方法
title: 电源设计 - LDO的电源抑制比（PSRR）与测量方法
---

低压差线性稳压器（LDO）相比 DC-DC 的优点之一，是输出电压纹波小。但是高速电路下，LDO 的电源抑制比（PSRR）也是不可忽略的因素，通常被误认为是单一的静态值，本篇文章将详细讲解电源抑制比（PSRR）及如何测量它。

## 电源抑制比（PSRR）的定义

电源抑制比（Power Supply Rejection Ratio, PSRR）也称纹波抑制比，通常在 LDO 的数据手册中能找到，它代表 LDO 在某个频率下从输入到输出的衰减程度，代表不同频率下纹波抑制能力。在有些高速通信电路如 Wi-Fi、蓝牙等，就需要用上电源抑制比较大的高速 LDO，当芯片需要瞬间拉大电流时能快速响应，不至于掉到低于额定电压导致负载重启。还有一些场景是使用 DC-DC 作为一级降压、LDO 作为二级降压 / 滤波，因为 DC-DC 开关频率在 kHz-MHz 级别，即 LDO 在 100kHz 以上，就需要严格考虑 PSRR 了。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220424100347.png)

电源抑制比（PSRR）用公式表示为：

$$
PSRR(dB)=20\log\frac{V_rp(in)}{V_rp(out)}
$$

其中，$V_rp(in)$ 表示输入纹波，$V_rp(out)$ 表示输出纹波。高速 LDO 的 PSRR 一般大于 60dB，而普通 LDO 的 PSRR 一般在 20dB 左右。60dB 的 PSRR 代表表当输入纹波为 1V 时，输出纹波将为 1mV。

我们先看普通 LDO（XC6206 系列）的纹波抑制曲线：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220421142140.png)

可以看出，在频率为 1kHz 时，XC6206P302 的纹波抑制比约为 23dB。

再看高速 LDO（XC6217x302）的纹波抑制曲线：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220421141923.png)

在频率为 1kHz 时，XC6217x302 的纹波抑制比约为 68dB。

## 电源抑制比（PSRR）的测量方法

电源抑制比（PSRR）的测量分 **输入注入** 和 **输出测量** 两个部分。

电源抑制比（PSRR）的测量有三种方法：

- 使用注入器与网分仪测量
- 使用 AP 音频测试仪与放大器测量
- 使用信号发生器、直流电源与示波器测量

通过以上方法测试，并记录输入与输出的电压纹波，根据公式即可算出 PSRR 的值。

### 使用信号发生器与示波器测量

使用信号发生器产生正弦波，接 LDO 的输入端；使用示波器同时测量输入与输出端的纹波。此方法受限于信号发生器的输出电流（像 DG4062 输出电流峰值在 100kHz 正弦波下是 1.65A）与示波器的精度。

### 使用放大器与示波器测量

放大器的作用是将 AC 纹波叠加到直流电源的 DC 电压上，然后用示波器直接测量 LDO 的输入和输出纹波。但此方法不适用于高 PSRR 的 LDO，因为如果输出纹波太小，示波器无法精确测量。

运放的选择需要满足几个基本条件：

1. 运放带宽满足 LDO 测试范围。
2. 运放最大输出电流不小于 LDO 最大输出电流。
3. 运放输出电压范围覆盖 LDO 输入电压范围。

可按照以下的示意图设计加法器：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220424101211.png)

其中，R1 与 R2 相等，最低截止频率由 C1 和 R1 共同决定，最高截止频率由运放的带宽所决定。

也可以使用运放作为信号发生器的电压跟随器，解除信号发生器驱动电流不够的限制。

### 使用放大器与音频分析仪

音 频 分 析 仪（Audio Precision）自身没有能力产生 DC 直流电压，且驱动能力弱，需要通过一个高带宽大电流的运放，把 AC 纹波叠加到直流电源的 DC 电压上，然后再连接到 LDO 的输入端。但因为音频分析仪带宽的限制，不能测到频率 100kHz 以上的 PSRR。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220424095319.png)

### 使用注入器与网分仪测量

此方法需要用到专用的输入注入器（例如 J2120A，带宽 10Hz-10MHz，直流电压最大值为 50V，输出电流最高 5A），它可以把 AC 纹波和直流电源 DC 电压直接叠加，但经过注入器后的输入电压会有所衰减。配合网分仪分别测量输入与输出电压纹波值：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220421145125.png)

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220424095347.png)

## 测量注意事项

1. 测试时应首先使用示波器观察 LDO 输入端交流电压波形是否正常。
2. LDO 电路最好按数据手册，加相应的电容去耦，但使用运放方法测试时，需要去掉 LDO 的输入电容，避免运放不稳定。
3. 如果使用注入器，输出电压有衰减，则电压需要适当增加。
4. LDO 的输出负载不要用电子负载提供，建议用功率电阻。

## 参考与致谢

- Seeed Studio 内部文档
- [Reducing high-speed signal chain power supply issues](https://e2e.ti.com/blogs_/b/powerhouse/posts/reducing-high-speed-signal-chain-power-supply-issues)
- [LDO 基础知识：电源抑制比](https://e2echina.ti.com/blogs_/b/analogwire/posts/ldo)
- [LDO PSRR 测量简化说明](https://www.ti.com/cn/lit/an/zhca089/zhca089.pdf?ts=1650452714023&ref_url=https%253A%252F%252Fwww.google.com%252F)
- [LDO 的 PSRR 测量](http://www.3peakic.com.cn/Public/Uploads/files/LDO%E7%9A%84PSRR%E6%B5%8B%E9%87%8F.pdf)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 电源抑制比（PSRR）的测量方法

电源抑制比（PSRR）的测量分 **输入注入** 和 **输出测量** 两个部分。通过以下方法测试，并记录输入与输出的电压纹波，根据公式即可算出 PSRR 的值。

### 输入注入

#### 信号发生器