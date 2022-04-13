---
id: HAL库开发笔记（十）-USB通信
title: HAL 库开发笔记（十）- USB 通信
---

## 简单步骤

### CubeMX 内配置

1. 配置为外部高速时钟（HSE）。
2. 配置时钟树，确保时钟树末端 `48MHz Clocks (MHz)` 为 48MHz。
3. 在 `USB_OTG_FS` 页面，将 `Mode` 配置为 `Device_Only`，默认引脚是 `PA11` 和 `PA12`。
4. 在 `USB_DEVICE` 页面，将 `Class For FS IP` 配置为 `Commmunication Device Class (Virtual Port Com)`。

### Keil 内代码

实现数据回环功能，只需要在 `CDC_Receive_FS` 函数内添加一行：

```c
CDC_Transmit_FS(Buf,*Len);//添加数据原样返回
```

### 测试

打开设备管理器查看设备是否已经显示，如果没有发现设备，或有黄色的感叹号，请到 ST 官网下载驱动 [**STM32 Virtual COM Port Driver**](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-utilities/stsw-stm32102.html)。

如果安装了驱动还是未能正常识别，可尝试在 CubeMX - `Project Manager` - `Project` - `Linker Settings`，将 `Minimum Heap Size` 调整为 `0x600` 或更高。

打开串口工具（波特率任意），可发现发送任意字符，将返回相同字符。

## 参考与致谢

- [STM32 使用 CubeMX HAL 库快速生成 USBVCP 虚拟串口工程](https://blog.csdn.net/yxy244/article/details/102620249)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
