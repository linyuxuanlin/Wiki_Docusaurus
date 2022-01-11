---
id: 电源方案（Buck）-LMR14050
title: 电源方案（Buck）- LMR14050
---

## 主要特性

- 拓扑：DC/DC（Buck）
- 器件型号：LMR14050SDDA
- 封装：HSOIC-8
- 输入电压：4-40 V
- 输出电压：0.8-28V
- 输出电流： 5A 持续
- 工作频率： 200kHz-2.5MHz
- 效率：最高 ？%
- 参考价格：￥ 11.3
- 其他特性
  - 40µA 超低工作静态电流
  - 关断电流：1µA
  - 90mΩ 高侧 MOS 管
  - 最短导通时间：75ns
  - 电流模式控制
  - 热保护、过压保护和短路保护

## 参考与致谢

- [技术文档 · LMR14050](https://www.ti.com.cn/product/cn/LMR14050#tech-docs)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 引脚定义

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220110170233.png)

- BOOT：给高侧 MOS 管的自举电容。在 BOOT 和 SW 间接一个 0.1uF 电容。
- VIN：电源输入，经过去耦电容 $C_IN$ 后接到此引脚。
- EN：使能开关，内部上拉。外部拉低于 1.2V 可关闭输出，浮空或接 VIN 使能输出。欠压锁定的调节请见下文。
- RT/SYNC：电阻时序或外部时钟输入。当使用外部电阻接地来设置开关频率时，内部放大器将此引脚保持在固定电压。如果引脚被拉至高于 PLL 上限阈值，则会发生模式更改并且引脚变为同步输入。内部放大器被禁用，引脚是内部 PLL 的高阻抗时钟输入。如果时钟边沿停止，则重新启用内部放大器并且操作模式返回到通过电阻器进行的频率编程。？
- FB：反馈输入引脚，由电阻从 $V_OUT$ 分压输入反馈，不可直接接地。
- SS：软启动控制引脚，接电容设置软启动时间。
- SW：稳压开关输出，在内部连高侧 MOS 管。接功率电感。

## 参考设计

## 参数设置

## Layout 参考

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220110183248.png)

Layout is a critical portion of good power supply design. The following guidelines will help users design a PCB
with the best power conversion performance, thermal performance, and minimized generation of unwanted EMI.

1. The feedback network, resistor RFBT and RFBB, should be kept close to the FB pin. VOUT sense path away
   from noisy nodes and preferably through a layer on the other side of a shielding layer .
2. The input bypass capacitor CIN must be placed as close as possible to the VIN pin and ground. Grounding
   for both the input and output capacitors should consist of localized top side planes that connect to the GND
   pin and PAD .
3. The inductor L should be placed close to the SW pin to reduce magnetic and electrostatic noise.
4. The output capacitor, COUT should be placed close to the junction of L and the diode D. The L, D, and COUT
   trace should be as short as possible to reduce conducted and radiated noise and increase overall efficiency.
5. The ground connection for the diode, CIN, and COUT should be as small as possible and tied to the system
   ground plane in only one spot (preferably at the COUT ground point) to minimize conducted noise in the
   system ground plane
6. For more detail on switching power supply layout considerations see Application Note AN-1149

内部功能框图：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220111090855.png)
