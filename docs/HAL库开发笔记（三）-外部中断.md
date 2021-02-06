---
id: HAL库开发笔记（三）-外部中断
title: HAL 库开发笔记（三）- 外部中断
---

上一篇文章我们提到，用轮询的方法消除按键抖动、检测输入，有可能会消耗过多的系统资源并导致卡机，也有可能会错过检测。这就是为什么我们需要使用中断了。

## 基本原理

### 轮询与中断

什么是轮询和中断？以取外卖举个例子，轮询就是每分钟我都要去一趟门口，看看外卖小哥来了没。那么这段时间我做不了别的事情了，就光盯着外卖；但假如外卖小哥在我恰好离开门口的时候送到了，那么就错过了外卖。相反的，中断就是让外卖小哥来的时候打个电话，我搁下手中的活去拿外卖，这样我既能够安心干活，又不怕错过外卖。

### NVIC

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210206121058.png)

NVIC 全称为 Nested Vectored Interrupt Controller, 翻译过来就是 **嵌套向量中断控制器** 。它主要有三个参数，分别是：中断使能，抢占优先级，响应优先级。

**中断使能**：指的就是是否开启中断。如果开启中断，那么当满足中断触发条件的时候，会跳到中断服务程序运行；否则不理会中断服务程序，继续运行主程序。

**抢占优先级**：用于判断一个中断是否可以打断另一个中断的服务程序，抢先运行。举个例子，条件触发了 A 中断，A 中断的服务程序正在运行中，此时条件触发了 B 中断。此时如果 B 中断的抢占优先级比 A 的高，那么 A 的服务程序就会被打断，先去执行 B 的服务程序，执行完之后再继续执行 A, 这也称为中断嵌套。如果 B 的抢占优先级不比 A 高，那还是乖乖先执行完 A, 再去执行 B.

**相应优先级**：如果抢占优先相同的几个中断同时被触发，那么响应优先级高的最先运行。





## 参考与致谢 

- [进阶篇 II [Interrupt]](https://alchemicronin.github.io/posts/ff6aca34/)
- [STM32CubeMX 实战教程（三）—— 外部中断（中断及 HAL_Delay 函数避坑）](https://blog.csdn.net/weixin_43892323/article/details/104383560?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。


中断分外部和外部

