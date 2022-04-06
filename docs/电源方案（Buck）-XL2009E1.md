---
id: 电源方案（Buck）-XL2009E1
title: 电源方案（Buck）- XL2009E1
---

## 参考与致谢

- [XL2009_Datasheet](https://datasheet.lcsc.com/lcsc/1806111754_XLSEMI-XL2009E1_C73335.pdf)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

XL2009E1 是芯龙的一款最高 36V 输入、3A 输出、固定 180kHz 的 Buck 芯片，被指过流保护功能，当短路的时候，频率会降到 48kHz。

评估板开源文件请见 [**Collection_of_Power_Module_Design/DC-DC(Buck)/XL2009E1**](<https://github.com/linyuxuanlin/Collection_of_Power_Module_Design/tree/main/DC-DC(Buck)/XL2009E1>)

项目在线预览：

<div style={{height: "60vh"}}>
<iframe
  width="100%"
  height="100%"
  scrolling="no"
  src="https://viewer.wiki-power.com/XL2009E1.html"
></iframe>
</div>

## 主要特性

- 拓扑：DC/DC（Buck）
- 器件型号：XL2009E1
- 封装：SOP8L
- 输入电压：8-36 V
- 输出电压：1.25-32V
- 最小输入输出差：0.3V
- 最大占空比：100%
- 工作频率：固定 180kHz
- 最大输出电流： 3A
- 参考价格：￥ 2.1
- 其他特性
  - 带输出恒流环
  - 内置短路保护
  - 内置限流保护

## 引脚定义

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220407065806.png)

- FB：反馈输入引脚，由电阻从 $V_{OUT}$ 分压输入反馈，不可直接接地。反馈参考电压为 1.25V。
- OCSET：输出恒流设置引脚。
- VC：内部稳压器旁路电容。一般接 1uF 到 VIN。
- VIN：供电输入引脚。输入电压为 8-36V。需要有大电容去耦。
- SW：Buck 开关输出。


## 特性描述

### 内部功能框图

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220407070413.png)

