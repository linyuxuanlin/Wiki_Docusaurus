---
id: 电源方案（PMIC）-EA3036
title: 电源方案（PMIC）- EA3036
---

EA3036C 是一款 3 通道 PMIC，适用于由锂电池或直流 5V 供电的应用。它内部集成三个同步降压转换器，可在轻载和重载运行时提供高效率输出。内部补偿架构使应用电路设计简单。此外，独立的使能控制方便控制上电顺序。EA3036C 采用 20 脚 QFN 3x3 封装。

项目仓库： [**Collection_of_Power_Module_Design/DC-DC(Buck)/LMR14050**](https://github.com/linyuxuanlin/Collection_of_Power_Module_Design/tree/main/PMIC/EA3036)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 主要特性

- 输入电压：2.7-5.5V
- 输出电压（3 个 Buck 转换器）：0.6V-Vin
- 连续负载电流：1A（3 通道总输出必须小于 6W）
- 固定 1.5MHz 开关频率
- 100% 占空比低压差操作
- 关断电流：<1uA
- 每路独立使能开关
- 内部补偿
- 逐周期电流限制
- 短路保护
- 自恢复过温（OTP）保护
- 输入过压（OVP）保护
- 采用 20 引脚 3mm x 3mm QFN 封装

## 引脚定义

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220416234110.png)

| 引脚名称 | 引脚描述                                                   |
| -------- | ---------------------------------------------------------- |
| VCC      | 内部控制电路的电源输入脚                                   |
| VINx     | 通道 x 的电源输入脚，加 10uF MLCC 电容去耦                 |
| LXx      | 通道 x 内部 MOS 管开关输出，可接低通滤波电路输出更稳定电压 |
| FBx      | 通道 x 的反馈脚，通过分压电路连接电压输出                  |
| ENx      | 使能脚，不能浮空                                           |
| GNDx     | 通道 x 的地                                                |
| AGND     | 模拟地                                                     |
| 底部焊盘 | 散热用，需要接地                                           |

内部功能框图：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220417001936.png)