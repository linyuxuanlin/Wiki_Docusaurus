---
id: AD基本操作-多板系统设计
title: AD 基本操作 - 多板系统设计
---

使用多板系统设计的原因是，一个硬件项目内可能包含多块 PCB、各种装配元素例如外壳，如果仅仅从每块板的角度去设计，最终做出来的产品有可能会出现配合误差或干涉。在设计多元素的硬件项目时，我们最好使用机电协同。对于硬件工程师来说，可以不用 SolidWorks 等软件，直接在 Altium Designer 里实现。

## 创建多板项目

首先，新建多板项目类型文件（`.PrjMbd`），在项目下创建基于原理图的逻辑设计文件（`.MbsDoc`）和基于 PCB 的文件（`.MbaDoc`）。在文件系统的层面上把多个单独的 PCB 项目文件夹拷贝到 `.PrjMbd` 同级目录下，例如：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20220106152537.png)

## 输入逻辑设计

我们根据 PCB 上的连接器，进行输入逻辑设计

### 创建模块并链接项目

### 导入子项目的接口数据

### 添加模块间的逻辑连接

## 物理多板装配

### 从逻辑设计文件导入 PCB

### 模拟装配

## 生成生产数据

## 参考与致谢

- [PCB 中进行多板设计会是怎样的体验？](https://www.altium.com.cn/blog/pcb%E4%B8%AD%E8%BF%9B%E8%A1%8C%E5%A4%9A%E6%9D%BF%E8%AE%BE%E8%AE%A1%E4%BC%9A%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84%E4%BD%93%E9%AA%8C%EF%BC%9F)
- [输入逻辑系统设计](https://www.altium.com/cn/documentation/altium-designer/capturing-the-logical-system-design-ad)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
