---
id: HAL库开发笔记（四）-串口通信
title: HAL 库开发笔记（四）- 串口通信
---

## 参考与致谢 

- [STM32CubeMX 实战教程（六）—— 串口通信](https://blog.csdn.net/weixin_43892323/article/details/105339949)
- [进阶篇 III [UART & USART]](https://alchemicronin.github.io/posts/b4c69a89/#1-0-%E4%BB%80%E4%B9%88%E6%98%AFUART%E5%92%8CUSART%EF%BC%9F%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E5%98%9B%EF%BC%9F)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

串口通信算得上是单片机中最常用、最基础的一种通讯方式。

## 基本原理

### 通信接口

从通信接口上分，通信方式可分为并行通信和串行通信两种。

**并行通信**：各个数据位同时传输，速度快但占用引脚资源多。  
**串行通信**：数据按位顺序传输，占用引脚资源少但速度相对慢。
