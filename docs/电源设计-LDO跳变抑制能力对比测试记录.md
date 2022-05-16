---
id: 电源设计-LDO跳变抑制能力对比测试记录
title: 电源设计 - LDO 跳变抑制能力对比测试记录
---

如果缺少仪器对 LDO 的电源抑制比（PSRR）进行准确测量，那么可以使用以下的简单方法，对 LDO 的跳变抑制能力进行基本的测试。下文将展示三款高速 LDO 的对比测试过程与结果。

测试环境：

- 测试 PCB 板
  - 输入 / 输出去耦电容：1uF
- 电源
  - 供电：4.3V，1A
- 电子负载
  - 模式：CC
  - 跳变频率：1kHz
  - 跳变电流：30mA/0-30mA/30-100mA
- 示波器
  - 探头：有源探头，缩短接地线长度，并联在输出电容上测量
  - 耦合：AC 耦合
  - 带宽：20MHz
  - 数字滤波器：开启 1Mhz 捕获与触发

![](https://cos.wiki-power.com/img/20220516141413.jpg)

![](https://cos.wiki-power.com/img/20220516141418.jpg)

![](https://cos.wiki-power.com/img/20220516141424.jpg)

### AP7333-33SRG-7

30mA 稳定负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516140355.png)

0-30mA 跳变负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516140747.png)

30-100mA 跳变负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516140848.png)

### BCT2036EUR33-TR

30mA 稳定负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516141008.png)

0-30mA 跳变负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516141016.png)

30-100mA 跳变负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516141019.png)

### CL9195A33L3M

30mA 稳定负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516141024.png)

0-30mA 跳变负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516141028.png)

30-100mA 跳变负载时的纹波曲线：

![](https://cos.wiki-power.com/img/20220516141032.png)
