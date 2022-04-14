---
id: HAL库开发笔记（十一）-以太网通信（LwIP）
title: HAL 库开发笔记（十一）- 以太网通信（LwIP）
---

本篇基于自研 RobotCtrl 开发套件，单片机内核为 STM32F407ZET6，以太网 PHY 芯片为 LAN8720A，原理图及详细介绍请见 [**RobotCtrl - STM32 通用开发套件**](https://wiki-power.com/RobotCtrl-STM32%E9%80%9A%E7%94%A8%E5%BC%80%E5%8F%91%E5%A5%97%E4%BB%B6)。

LwIP 是 轻型（Light Weight）IP 协议，不管有没有操作系统的支持，都可以运行。LwIP 实现的重点是在保持 TCP 协议主要功能的基础上减少对 RAM 的占用，它只需十几 KB 的 RAM 和 40K 左右的 ROM 就可以运行，这使 LwIP 协议栈适合在低端的嵌入式系统中使用。

LwIP 提供了三种编程接口，分别为 RAW/Callback API、 NETCONN API、 SOCKETAPI。它们的易用性从左到右依次提高，而执行效率从左到右依次降低。可以权衡利弊选择适合自己的 API 进行开发。在本文中，使用 Raw API，调用以下的函数：

| API 函数       | 说明                                     |
| -------------- | ---------------------------------------- |
| udp_new        | 创建新的 UDP PCB                         |
| udp_remove     | 移除 UDP PCB 并释放相关资源              |
| udp_bind       | 将 UDP PCB 与本地 IP 地址和端口绑定      |
| udp_connect    | 建立 UDP PCB 远程 IP 地址和端口          |
| udp_disconnect | 移除 UDP PCB 远程 IP 和端口              |
| udp_send       | 发送 UDP 数据                            |
| udp_recv       | 注册回调函数，当收到新数据报时即对其调用 |

## 参考与致谢

- [LwIP TCP/IP stack demonstration for STM32F4x7 microcontrollers (AN3966)](https://www.st.com/en/embedded-software/stsw-stm32070.html)
- [Developing applications on STM32Cube with LwIP TCP/IP stack (UM1713)](https://www.st.com/resource/en/user_manual/um1713-developing-applications-on-stm32cube-with-lwip-tcpip-stack-stmicroelectronics.pdf)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
