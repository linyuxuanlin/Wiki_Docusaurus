---
id: ATE-直流参数测试
title: ATE-直流参数测试
---

## 参考与致谢

- 《The Fundamentals Of Digital Semiconductor Testing》
- [闩锁效应（Latch-up）详解](https://zhuanlan.zhihu.com/p/125519142)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 基本术语

### 热切换（Hot Switching）

继电器在电流在流动时进行开关切换，这样可能会损坏继电器，需要通过编程来避免这样的情况。

### 闩锁效应（Latch-up）

当对某个引脚施加过高的电压时，导致 CMOS 器件中出现大电流状态，可能会损坏器件。

### 