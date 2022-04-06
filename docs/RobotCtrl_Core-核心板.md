---
id: RobotCtrl_Core-核心板
title: RobotCtrl_Core - 核心板
---

## 参考与致谢

- [STM32 的 PDR_ON 引脚，比较好的解释（转载+补充）](https://blog.csdn.net/Frankenstien_/article/details/105971841)
- [正点原子【STM32-F407 探索者】第五十六章 USB 读卡器(Slave)实验](https://zhuanlan.zhihu.com/p/136163591)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。


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