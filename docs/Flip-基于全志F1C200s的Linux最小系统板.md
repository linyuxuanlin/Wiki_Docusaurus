---
id: Flip-基于全志F1C200s的Linux最小系统板
title: Flip - 基于全志 F1C200s 的 Linux 最小系统板 🚧
---

![](https://cos.wiki-power.com/img/20220527234815.jpeg)

![](https://cos.wiki-power.com/img/20220527234855.jpeg)

项目仓库：[**linyuxuanlin/Flip**](https://github.com/linyuxuanlin/Flip)

项目在线预览 🚧：

<div class="iframe_viewer">
    <iframe 
    scrolling="no"
  src="https://viewer.wiki-power.com/Flip.html"
></iframe>
</div>

F1C100s/F1C200s 基于 ARM9 CPU 架构，封装相同，区别仅仅是 F1C100S 内置 32MB DDR1 内存，而 F1C200S 为 64MB。

除此之外，这个芯片还集成了 USB OTG、UART、SPI、TWI、TP、SD/MMC、CSI 等通用外设。

## 基本参数

F1C200s 的基本参数如下：

- ARM9 CPU architecture 400M
- Memory SIP 64MB DDR1
- SD2.0, eMMC 4.41
- Video H.264/MPEG1 1920x1080@30fps decoding，MJPEG 1280x720@30fps encoding
- Audio, 2xDAC 和 1xADC, DAC up to 192kHz,ADC up to 48kHz
- 1 x I2S/PCM interface
- Display RGB interface up to 1280x720@60fps
- TV CVBS output, support NTSC/PAL
- USB OTG
- SDIO
- IR
- 3 x TWI
- 2 x SPI
- 3 x UART
- Melis or Linux SDK OS
- Package QFN88, 10mm x 10mm

F1C200s 的系统架构框图：

![](https://cos.wiki-power.com/img/20220422152227.png)

典型应用示意图：

![](https://cos.wiki-power.com/img/20220513232027.png)

Pin 定义：

![](https://cos.wiki-power.com/img/20220422153239.png)

## 参考与致谢

- [【目录】全志 F1C100S/F1C200S 学习笔记](https://blog.csdn.net/p1279030826/article/details/113370239)
- [peng-zhihui/Planck-Pi](https://github.com/peng-zhihui/Planck-Pi)
- [小白自制 Linux 开发板 一. 瞎抄原理图与乱画 PCB](https://www.cnblogs.com/twzy/p/14714651.html)
- [MangoPi](https://mangopi.cc/f1c200s)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 各模块的设计
