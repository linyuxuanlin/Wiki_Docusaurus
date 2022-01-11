---
id: 电源方案（Buck）-LMR14050
title: 电源方案（Buck）- LMR14050
---

LMR1405 是 TI 的一款 Buck 转换器芯片，输入电压范围很宽（4-40V），且能提供 5A 的持续输出电流，轻载有休眠模式提高效率。它的内部集成度高，所以外围需要设计的元器件很少。开关频率能通过外部电阻 $R_T$ 在 200kHz-2.5MHz 范围内选择，也能够与 250 kHz-2.3 MHz 频率范围内的外部时钟同步。保护功能有过温关断、$V_OUT$ 过压保护（OVP）、$V_IN$ 欠压锁定（UVLO）、逐周期电流限制和带频率折返的短路保护。

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

## 引脚定义

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220110170233.png)

- BOOT：给高侧 MOS 管的自举电容。在 BOOT 和 SW 间接一个 0.1uF 电容。
- VIN：电源输入，经过去耦电容 $C_IN$ 后接到此引脚。
- EN：使能开关，内部上拉。外部拉低于 1.2V 可关闭输出，浮空或接 VIN 使能输出。欠压锁定的调节请见下文。
- RT/SYNC：电阻时序或外部时钟输入。当使用外部电阻接地来设置开关频率时，内部放大器将此引脚保持在固定电压。如果引脚被拉至高于 PLL 上限阈值，则会发生模式更改并且引脚变为同步输入。内部放大器被禁用，引脚是内部 PLL 的高阻抗时钟输入。如果时钟边沿停止，则重新启用内部放大器并且操作模式返回到通过电阻器进行的频率编程。？
- FB：反馈输入引脚，由电阻从 $V_OUT$ 分压输入反馈，不可直接接地。
- SS：软启动控制引脚，接电容设置软启动时间。
- SW：稳压开关输出，在内部连高侧 MOS 管。接功率电感。

## 设计原理

### 内部功能框图

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220111090855.png)

### 稳压原理

LMR14050 的输出电压通过开启高侧 N-MOS 并控制导通时间来调节。在高侧 N-MOS 导通期间，SW 引脚电压摆动至大约 VIN，电感电流 iL 随线性斜率 (VIN – VOUT) / L 增加；当高侧 N-MOS 关断时，电感电流通过续流二极管，以 VOUT / L 的斜率放电。稳压器的控制参数由占空比 D = tON /TSW 决定，其中 tON 是高端开关导通时间，TSW 是开关周期。稳压器控制环路通过调整占空比 D 来保持恒定的输出电压。在理想的降压转换器中，损耗被忽略，D 与输出电压成正比，与输入电压成反比：D = VOUT / VIN。

连续导通模式（CCM）下的 SW 电压与电感电流的对应关系：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220111095020.png)

### 睡眠模式

轻载状态下会进入睡眠模式，以提高效率、减少门极驱动损耗（通过减少开关切换）。如果输出的峰值低于 300mA 将会触发睡眠模式。

### BOOT 自举电路的设计

LMR14050 内部集成了自举电压转换器，在 BOOT 和 SW 引脚借一个自举电容，就可以提供足以驱动高侧 MOS 管门极的电压。BOOT 电容的参考值为 0.1uF（X7R 或 X5R 陶瓷电容，耐压至少 16V）。

### 输出电压调节

LMR14050 提供一个 0.75V 的内部参考电压。输出电压通过电阻分压器，从 VOUT 分压出来输入 FB 引脚，在内部进行比较调节。分压电阻建议使用偏差 1% 或更低的、温度系数 100 ppm 或更低的。通过所需分压电流选择低侧电阻 $R_{FBB}$（参考值是 10-100kΩ），并通过公式计算高侧电阻 $R_{FBT}$。选择较大的阻值有利于提高轻载效率，但如果太大，稳压器将更容易受到来自 FB 输入电流的噪声和电压误差的影响。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220111105814.png)

$$
R_{FBT}=\frac{V_{OUT}-0.75}{0.75}R_{FBB}
$$

### EN 使能与欠压锁定调节

当 VIN 高于 3.7V，且 EN 高于 1.2V 阈值时 LMR14050 开启输出，当 VIN 掉落到低于 3.52V 或 EN 低于 1.2V 时稳压器关闭。EN 有内部上拉电流源（1uA）以确保 EN 脚浮空时稳压器正常输出。

可通过调节 EN 的外部上下拉电阻，以调节启动和关闭的电压阈值：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220111111613.png)

$R_{ENT}$ 和 $R_{ENB}$ 遵从以下公式计算：

$$
R_{ENT}=\frac{V_{STRAT}-V_{STOP}}{I_{HYS}} \newline

R_{ENB}=\frac{V_{EN}}{\frac{V_{START}-V_{EN}}{R_{ENT}}+I_{EN}}
$$

其中，$V_{STRAT}$ 是希望使能启动的电压阈值，$V_{STOP}$ 是希望欠压关闭的电压阈值，$I_{HYS}$ 是当 EN 电压超过 1.2V 时从 EN 来的滞后电流（典型值为 3.6uA）。

### 外部软启动

软启动用于抵御通电时冲击稳压器与负载的浪涌电流，可通过外置连接于 SS 与 GND 之间的电容 $C_{SS}$ 来进行配置。有一个内部电流源 $I_{SS}$（典型值为 3uA）为电容充电并生成一个从 0V 到 $V_REF$ 的斜坡。软启动时间可通过公式配置：

$t_{SS}(ms)=\frac{C_{SS})(nF)*V_{REF}(V)}{I_{SS}(uA)}$

在稳压器失能或内部关闭时，软启动将会被重置。

## 参考设计

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

## 参考与致谢

- [技术文档 · LMR14050](https://www.ti.com.cn/product/cn/LMR14050#tech-docs)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
