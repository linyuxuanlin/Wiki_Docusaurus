---
id: HAL库开发笔记（七）-TIM通用定时器
title: HAL 库开发笔记（七）-TIM 通用定时器
---


## 参考与致谢

- [STM32CubeMX 实战教程（四）—— 基本定时器（还是点灯）](https://blog.csdn.net/weixin_43892323/article/details/104534920)
- [进阶篇 VI [Timer & PWM]](https://alchemicronin.github.io/posts/fd31d369/)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。


在上一篇文章 [**HAL 库开发笔记（六）-TIM 基本定时器**](https://wiki-power.com/HAL%E5%BA%93%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0%EF%BC%88%E5%85%AD%EF%BC%89-TIM%E5%9F%BA%E6%9C%AC%E5%AE%9A%E6%97%B6%E5%99%A8) 中，我简单介绍了 STM32F4 的三类定时器，也详细讲解了基本定时器。在本篇文章中，我们将继续介绍通用定时器。