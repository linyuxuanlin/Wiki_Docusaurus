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

DDR3（Double-Data-Rate 3 Synchronous Dynamic RAM）即第三代双倍速率同步动态随机存储器。其中，**同步** 指的是读写都是按照时钟基准的，**动态** 指数据不能掉电存储，且需要周期性地刷新才能保持存储，**随机存储** 指的是可随机操作任意地址的数据，**双倍速率** 指在时钟的上升和下降沿都可进行数据传输。

更多存储器的基本知识，请跳转文章 [**存储器的分类**](https://wiki-power.com/%E5%AD%98%E5%82%A8%E5%99%A8%E7%9A%84%E5%88%86%E7%B1%BB)

## DDR3 引脚定义

以 DDR3 SDRAM（Micron）为例，引脚符号对应的类型和描述如下：

| 引脚符号                         | 类型     | 描述                             |
| -------------------------------- | -------- | -------------------------------- |
| A0-A9, A10/AP, A11, A12/BC#, A13 | 输入     | 地址输入                         |
| BA0-BA2                          | 输入     | Bank 地址输入                    |
| CK, CK#                          | 输入     | 时钟                             |
| CKE                              | 输入     | 时钟使能                         |
| CS#                              | 输入     | 片选                             |
| DM                               | 输入     | 数据输入屏蔽                     |
| ODT                              | 输入     | 片上终端使能                     |
| RAS#, CAS#, WE#                  | 输入     | 命令输入                         |
| RESET#                           | 输入     | 复位（低电平有效）               |
| DQ0-DQ7                          | I/O      | 数据输入 / 输出                  |
| DQS, DQS#                        | I/O      | 数据选通                         |
| TDQS, TDQS#                      | 输出     | 终端数据选通                     |
| VDD                              | 供电     | 电源电压（1.5V±0.075V）          |
| VDDQ                             |          | DQ 电源（1.5V±0.075V，隔离降噪） |
| VREFCA                           | 供电     | 控制、命令、地址的参考电压       |
| VREFDQ                           | 供电     | 数据的参考电压                   |
| VSS                              | 供电     | 地                               |
| VSSQ                             | 供电     | DQ 地（隔离降噪）                |
| ZQ                               | 参考电压 | 输出驱动校准的外部参考           |

详细的描述：

- A0-A9, A10/AP, A11, A12/BC#, A13：为 ACTIVATE 命令提供行地址，同时为 READ/WRITE 命令提供列地址和自动预充电位（A10），以便从某个 Bank 的内存阵列里选出一个位置。
- BA0-BA2：
- CK, CK#：
- CKE：
- CS#：
- DM：
- ODT：
- RAS#, CAS#, WE#：
- RESET#：
- DQ0-DQ7：
- DQS, DQS#：
- TDQS, TDQS#：
- VDD：
- VDDQ：
- VREFCA：
- VREFDQ：
- VSS：
- VSSQ：
- ZQ：
