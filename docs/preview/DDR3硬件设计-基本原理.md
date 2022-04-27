---
id: DDR3硬件设计-基本原理
title: DDR3 硬件设计 - 基本原理
---

## 参考与致谢

- 《Cadence 高速 PCB 设计实战攻略\_李增-林超文》
- [Xilinx FPGA 平台 DDR3 设计保姆式教程（汇总篇）——看这一篇就够了](https://blog.csdn.net/m0_52840978/article/details/121191410?spm=1001.2014.3001.5501)
- [DDR3 总结笔记](https://mp.weixin.qq.com/s?__biz=Mzg5NDYyMzg3NQ==&mid=2247484794&idx=1&sn=b9f8acc771de990dcd941795330894d8&chksm=c01d8c96f76a0580216939860c46bf5edd289f14a306a92b60888f785e7146b7f71846eb9f46&token=203917856&lang=zh_CN#rd)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

DDR3（double-data-rate 3 synchronous dynamic RAM）即第三代双倍速率同步动态随机存储器。其中，**同步** 指的是读写都是按照时钟基准的，**动态** 指数据不能掉电存储，且需要周期性地刷新才能保持存储，**随机存储** 指的是可随机操作任意地址的数据，**双倍速率** 指在时钟的上升和下降沿都可进行数据传输。

关于存储器的基本知识，请跳转文章 [**存储器的分类**](https://wiki-power.com/%E5%AD%98%E5%82%A8%E5%99%A8%E7%9A%84%E5%88%86%E7%B1%BB)


