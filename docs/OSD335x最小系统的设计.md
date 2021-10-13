---
id: OSD335x最小系统的设计
title: OSD335x 最小系统的设计
---

## 参考与致谢

- [SO YOU WANT TO BUILD AN EMBEDDED LINUX SYSTEM?](https://jaycarlson.net/embedded-linux/#)
- [OSD335x-SM System-in-Package Smallest AM335x Module, Quickest Design](https://octavosystems.com/octavo_products/osd335x-sm/#Technical%20Documents)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

【编辑中】

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211012144907.png)

TI 的 OSD335x-SM 芯片，是一颗将 Cortex-A8 AM335x 处理器、DDR3 内存、TPS65217C PMIC（电源管理芯片）、TL5209 LDO、所需的被动器件、以及 4KB 的 EEPROM 集成在 BGA 封装内的 SIP（System-in-Package）模组。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211012153036.png)

OSD335x 的最小系统包括 4 个部分：电源、时钟、复位、烧录调试接口。为了让其更易于使用，还可以加上一对按钮、几颗 LED 和一些外设排针。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211012155857.png)

## 电源

### 输入

- VIN_AC：主电源输入（DC5V@2A），根据需要加保险丝、磁珠、二级管、输入保护等。
- VIN_USB：USB 电源输入（DC5V@0.5A，通过内部 PMIC 可提高至 1.3A），也作为 USB 2.0 host 的参考电压电流
- VIN_BAT：可作为电池输入（使用电池电源，2.75-5.5V）或输出（为电池充电），不可作为事件输入。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211012173057.png)

### 输出

- SYS_VOUT：等于输入 PMIC 的电压，要注意接在这个引脚上的元器件是能在 3-5V 区间内使用的，因为当电池充电的时候，PMIC 切换不同的电源输入。
- SYS_VDD1_3P3V：3.3V 输出，由 TL5209 LDO 提供，并由 PMIC 的 LDO4 使能，作为主电源输出。
- SYS_VDD2_3P3V：3.3V 输出，由 PMIC 的 LDO2 提供。
- SYS_RTC_1P8V：1.8V 输出，由 PMIC 的 LDO1 提供，也用于驱动 AM335x 内部 RTC。
- SYS_VDD_1P8V：1.8V 输出，由 PMIC 的 LDO3 提供。
- SYS_ADC_1P8V：1.8V 输出，由 PMIC 的 LDO3 提供，为模拟应用做了滤波，在内部也为 AM335x ADC 供电。

推荐为所有电源输出添加测试点，方便调试。

还有一些为内部供电的引脚：VDDSHV_3P3V、VDDS_DDR、VDD_MPU、VDD_CORE、VDDS_PLL。他们仅供引出测试点测量，但不要引出给外部电路使用。
