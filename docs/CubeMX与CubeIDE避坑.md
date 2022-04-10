---
id: CubeMX与CubeIDE避坑
title: CubeMX 与 CubeIDE 避坑
---

## 项目名称路径不能是中文

如题，新建项目的名称与路径，都必须是英文的，不然可能会出现奇奇怪怪的错误。

## 默认关闭调试端口

问题描述：

- 检测到 ST-Link，却检测不到板子，提示 `No target connected`
- 首次能成功下载，第二次及以后就不行了

原因：

- CubeMX 把调试端口给关了

解决方法（本次）：

- 用 **STM32 ST-LINK Utility** 工具，刷出厂程序救回来
- 或者用 [**这篇文章**](https://www.jianshu.com/p/cea16b641c3d) 提供的方法（通过 Keil）

解决方法（长远）：

- 在 CubeMX 的 SYS 设置中，将 Debug 选项更改为 Serial Wire（SW）

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200531162352.jpg)

## STM32CubeIDE 中文注释乱码

如果代码是从 Keil 导入的，需要先确保原本的编码是 GB2312。

依次点击菜单栏 - `Window` - `Preferences` - `General` - `Apperance` - `Colors and Fonts` - `C/C++` - `Editor` - `C/C++ Editor Text Font`，点击右侧的 `Edit`，确认字体支持中文（如微软雅黑），并确认脚本为 `中文 GB2312`。

如果还是没有解决，那么可以在左侧文件树中，右键项目名称，点击最后的属性 `Properties`，将 `Resource` 面板中的字体编码改为 `GBK`（如果没得选，直接输入即可），保存即可解决。

## STM32CubeIDE 汉化

//todo

## 参考与致谢

- [STM32 调试器配置异常导致的问题与解决方法（一）](https://www.jianshu.com/p/cea16b641c3d)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
