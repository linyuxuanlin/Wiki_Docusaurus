---
id: SWD与JTAG的区别与对比
title: SWD 与 JTAG 的区别与对比
---

## 参考与致谢 

- [下载调试接口 SWD 和 JTAG 的区别](https://mp.weixin.qq.com/s/MW57t266yvv6TOweeFEUVA)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

众所周知，SWD 和 JTAG 是单片机下载程序与调试的常用接口。

## JTAG

JTAG, 全名为 Joint Test Action Group（联合测试行动小组）。截至本文最新的标准为 IEEE Standard 1149.1-1990.

其拓扑图（菊花链）如下：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210209191921.png)

JTAG 一般使用 5 个引脚来进行下载调试：

- **TDI**（Test Data In）：串行输入引脚
- **TDO**（Test Data Out）：串行输出引脚
- **TCK**（Test Clock）：时钟引脚
- **TMS**（Test Mode Select）：模式选择（控制信号）引脚
- **TRST**（Test Reset）：复位引脚
