---
id: 通信协议-USB
title: 通信协议 - USB 🚧
---

## USB 版本

![](https://cos.wiki-power.com/img/20211129094423.png)

## USB 机械接口

![](https://cos.wiki-power.com/img/20211129094855.png)

![](https://cos.wiki-power.com/img/20211129094944.png)

接口定义 - 标准 USB：

| 触点 | 功能                 |
| ---- | -------------------- |
| 1    | VBUS（4.75－5.25 V） |
| 2    | D-                   |
| 3    | D+                   |
| 4    | GND                  |

接口定义 - Mini USB：

| 触点 | 功能                 | 颜色 |
| ---- | -------------------- | ---- |
| 1    | VBUS（4.75－5.25 V） | 红   |
| 2    | D-                   | 白   |
| 3    | D+                   | 绿   |
| 4    | ID                   |      |
| 5    | GND                  | 黑   |

## USB 插头与版本的兼容性

![](https://cos.wiki-power.com/img/20211129094829.png)

## 参考与致谢

- [USB 相关介绍](https://blog.infonet.io/2020/03/21/USB%E7%9B%B8%E5%85%B3%E4%BB%8B%E7%BB%8D/)
- [USB](https://zh.wikipedia.org/wiki/USB)
- [USB Logo Usage Guidelines](https://www.usb.org/sites/default/files/usb-if_logo_usage_guidelines_final_103019.pdf)
- [AN1953 | USB Type-C™ 简介](http://www.microchip.com.cn/community/Uploads/Download/Library/00001953a_cn.pdf)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## USB Type-C

![](https://cos.wiki-power.com/img/20220520105345.png)

### 端口类型

数据：

- 下行端口（Downstream Facing Port，DFP）：主机 / 下行集线器端口。典型示例为传统的标准 Type-A 端口。
- 上行端口（Upstream Facing Port，UFP）：设备 / 上行集线器端口。典型示例为传统的标准 Type-B 端口。
- 双重角色端口（Dual-Role Port，DRP）：连接事件发生前，在 DFP 端口和 UFP 端口之间切换的端口。初始连接事件后，可通过 USB 供电协议协商进行动态交换。

供电：

- 拉电流电源或供电设备——5V-20V 时的拉电流最多为 5A。典型示例为传统的标准 Type-A 端口。
- 灌电流电源或耗电设备——5V-20V 时的灌电流最多为 5A。典型示例为传统的标准 Type-B 端口。
