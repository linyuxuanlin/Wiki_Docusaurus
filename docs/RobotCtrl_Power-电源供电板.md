---
id: RobotCtrl_Power-电源供电板
title: RobotCtrl_Power - 电源供电板
---

![](https://cos.wiki-power.com/img/20220527113517.png)

项目仓库：[**linyuxuanlin/RobotCtrl/RobotCtrl_Power**](https://github.com/linyuxuanlin/RobotCtrl/tree/main/RobotCtrl_MultiBoard_Project/RobotCtrl_Power)

项目在线预览：

<div class="iframe_viewer">
    <iframe 
    scrolling="no"
  src="https://viewer.wiki-power.com/RobotCtrl_Power.html"
></iframe>
</div>

注：项目包含于 [**RobotCtrl - STM32 通用开发套件**](https://wiki-power.com/RobotCtrl-STM32%E9%80%9A%E7%94%A8%E5%BC%80%E5%8F%91%E5%A5%97%E4%BB%B6)。

## 主要功能

- 24V 电源输入（理论可以 15-40V）
- 电池电源转 12V/5A 稳压器（带使能开关与指示灯）
- 电池电源转 5V/5A 稳压器（带使能开关与指示灯）
- 防反接保护（PMOS）
- 防过压保护（大于 30V 开始保护）
- 电池电源输出、12V 电源输出、5V 电源输出

## RobotCtrl_Power 的 PCB 设计

RobotCtrl_Power 的 layout，需要注意反馈网络的上下分压电阻需要尽量靠近芯片的 FB 引脚，Vout 采样路径应尽量原理噪声产生路径（电感二极管环路），最好是通过过孔走屏蔽层后的层；电感应该靠近 SW 引脚放置，以降低磁噪声和静电噪声；二极管、输入和输出电容的接地节点应尽可能小，最好是仅在一个点连接到系统阶地层，以最大限度减少系统接地层中的传导噪声；输出电容应尽量靠近电感和二极管的节点放置，且走线尽可能短而粗，以降低传导和辐射噪声，提高效率。

RobotCtrl_Power 的 PCB 顶层和底层走信号和电源，中间插入两层地平面以增强信号与电源完整性。

## 硬件测试

- 防反接测试：输入电压反接时是否可不开启系统。
- 使能开关与电源指示灯：测试是否可以正常运行。
- 输出：测试 12V/5V 输出是否达标，以及纹波大小。

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
