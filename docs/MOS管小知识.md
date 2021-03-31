---
id: MOS管小知识
title: MOS 管小知识
---


MOS 管是由是金属（metal）、氧化物（oxide）、半导体（semiconductor）组成的场效应晶体管。

## MOS 管的作用

【待编辑】

## MOS 管的引脚定义

MOS 管有三个引脚（G，S，D）其定义如下：

- G：gate / 栅极
- S：source / 源极
- D：drain / 漏极

N 沟道的电源一般接在 D，输出接 S；P 沟道的电源一般接在 S，输出接 D，增强型 / 耗尽型接法基本一样。

MOS 管的 source 和 drain 是可以对调的，他们都是在 P 型 backgate 中形成的 N 型区，在大多数情况下，这个两个区是一样的，即使对调也不会影响性能。

## 常见的封装（贴片）

### SOT 封装

SOT（Small Out-Line Transistor，小外形晶体管封装）封装一般用于小功率 MOS 管。

SOT-23 封装：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210331162749.png)

SOT-89 封装：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210331162842.png)


## TO 封装

TO（Transistor Out-line，晶体管外形）是比较早期的封装规格，原来多为直插封装（例如 TO-92，TO-220，TO-252），后来也慢慢进化到标贴式封装。TO252 和 TO263 是其典型，其中 TO-252 又称之为 D-PAK，TO-263 又称之为 D2PAK。

D-PAK 封装的 MOS 管有 3 个电极，其中漏极（D）的引脚被剪断不用，而是用背面的散热板作为漏极，能输出更大电流的同时也能更好地散热。

TO-252 封装：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210331163718.png)

TO-263 封装：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210331163731.png)

## SOP 封装

SOP（Small Out-Line Package，小外形封装），也叫 SO、SOL或DFP。通常有SOP-8、SOP-16、SOP-20、SOP-28等等（数字表示引脚数）。MOS 的 SOP 封装多数采用 SOP-8 规格。

SOP-8 封装：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210331165427.png)

## 参考与致谢

- [贴片 mos 管的封装知识和排列](http://www.yushin88.com/news/1670.html)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
