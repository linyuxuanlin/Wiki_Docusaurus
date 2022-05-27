---
id: RobotCtrl_Core-核心板
title: RobotCtrl_Core - 核心板
---

![](https://cos.wiki-power.com/img/20220527113423.png)

项目仓库：[**linyuxuanlin/RobotCtrl/RobotCtrl_Core**](https://github.com/linyuxuanlin/RobotCtrl/tree/main/RobotCtrl_MultiBoard_Project/RobotCtrl_Core)

项目在线预览：

<div class="iframe_viewer">
    <iframe 
    scrolling="no"
  src="https://viewer.wiki-power.com/RobotCtrl_Core.html"
></iframe>
</div>

注：项目包含于 [**RobotCtrl - STM32 通用开发套件**](https://wiki-power.com/RobotCtrl-STM32%E9%80%9A%E7%94%A8%E5%BC%80%E5%8F%91%E5%A5%97%E4%BB%B6)。

## 主要功能

- 单片机系统
  - 电源电路（供电去耦、ADC 模拟电源）
  - 复位电路（外部复位按键）
  - 时钟电路（HSE 无源晶振）
  - 启动模式配置（选择从主闪存存储器启动）
  - USB 供电与通信电路（USB-Micro）
- B2B 连接器（引出所有 IO）
- 供电稳压电路（5V 转 3.3V，引出测试点）
- 用户按键与 LED

## 设计参数

### 启动模式

- 选择从主闪存存储器启动，即 BOOT0 串接 10 K 的下拉电阻，BOOT1 任意。

### 外部高速时钟（HSE）

- 选用村田 8M 晶振。

### 去耦电容

- VDD：总的一个 10 μF 的陶瓷电容，外加每个 VDD 引脚旁接一个 100 nF 陶瓷电容。
- VDDA：100 nF 陶瓷电容 + 1 µF 陶瓷电容。

### VCAP 电容

- 各对地接一个 2.2 µF 陶瓷电容

### 复位电路

- 启用电源监控器：PDR_ON 通过 120Ω 电阻上拉。
- 添加按键复位按键

### 下载调试接口

- 直接引出，不需要外部上拉／下拉电阻（因为 STM32 内部有集成）。

## 硬件测试

主控核心板的电源测试，通过 USB 或 B2B 输入 5V，测量 3.3V 的测试点的电压；功能测试通过烧录初始程序，实现用户按键控制用户 LED、USB 虚拟串口通信即通过验证。

## 参考与致谢

- [STM32 的 PDR_ON 引脚，比较好的解释（转载+补充）](https://blog.csdn.net/Frankenstien_/article/details/105971841)
- [正点原子【STM32-F407 探索者】第五十六章 USB 读卡器(Slave)实验](https://zhuanlan.zhihu.com/p/136163591)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
