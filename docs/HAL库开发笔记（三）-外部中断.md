---
id: HAL库开发笔记（三）-外部中断
title: HAL库开发笔记（三）-外部中断
---

## 参考与致谢 

- []()

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

上一篇文章我们提到，用轮询的方法消除按键抖动、检测输入，有可能会消耗过多的系统资源并导致卡机，也有可能会错过检测。这就是为什么我们需要使用中断了。