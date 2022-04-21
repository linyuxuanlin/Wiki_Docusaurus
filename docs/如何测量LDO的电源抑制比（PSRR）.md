---
id: 如何测量LDO的电源抑制比（PSRR）
title: 如何测量 LDO 的电源抑制比（PSRR）
---

## 参考与致谢

- Seeed Studio 内部文档
- [Reducing high-speed signal chain power supply issues](https://e2e.ti.com/blogs_/b/powerhouse/posts/reducing-high-speed-signal-chain-power-supply-issues)
- [LDO 基础知识：电源抑制比](https://e2echina.ti.com/blogs_/b/analogwire/posts/ldo)
- [LDO PSRR 测量简化说明](https://www.ti.com/cn/lit/an/zhca089/zhca089.pdf?ts=1650452714023&ref_url=https%253A%252F%252Fwww.google.com%252F)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

低压差线性稳压器（LDO）相比 DC-DC 的优点之一，是输出电压纹波小。但是高速电路下，LDO 的电源抑制比（PSRR）也是不可忽略的因素，通常被误认为是单一的静态值，本篇文章将详细讲解电源抑制比（PSRR）及如何测量它。

## 电源抑制比（PSRR）的定义

电源抑制比（Power Supply Rejection Ratio, PSRR）也称纹波抑制比，通常在 LDO 的数据手册中能找到，它代表 LDO 在某个频率下从输入到输出的衰减程度，代表不同频率下纹波抑制能力。在有些高速通信电路如 Wi-Fi、蓝牙等，就需要用上电源抑制比较大的高速 LDO，当芯片需要瞬间拉大电流时能快速响应，不至于掉到低于额定电压导致负载重启。

电源抑制比（PSRR）用公式表示为：

$$
PSRR(dB)=20\log\frac{V_rp(in)}{V_rp(out)}
$$

其中，$V_rp(in)$ 表示输入纹波，$V_rp(out)$ 表示输出纹波。高速 LDO 的 PSRR 一般大于 60dB，而普通 LDO 的 PSRR 一般在 20dB 左右。

我们先看普通 LDO（XC6206 系列）的纹波抑制曲线：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220421142140.png)

可以看出，在频率为 1kHz 时，XC6206P302 的纹波抑制比约为 23dB。

再看高速 LDO（XC6217x302）的纹波抑制曲线：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220421141923.png)

在频率为 1kHz 时，XC6217x302 的纹波抑制比约为 68dB。

## 电源抑制比（PSRR）的测试方法
