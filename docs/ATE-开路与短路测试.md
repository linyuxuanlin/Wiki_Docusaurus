---
id: ATE-开路与短路测试
title: ATE - 开路与短路测试
---

## 参考与致谢

- 《The Fundamentals Of Digital Semiconductor Testing》

开路与短路测试（也称连续性或接触测试）用于验证测试系统与器件所有引脚的电接触性，且没有引脚与其他引脚、电源或地发生短路。可以快速验证 DUT 是否存在引脚短路、bond 连接异常、引脚损坏等问题，也可以验证测试系统的问题例如探针未正确接触引脚等。

## 串行静态测试

为了测试开路 / 短路，可以首先将设备所有引脚（包括电源和地）接地，然后用 PMU 给单个引脚加电流，这个电流会让引脚内的某个保护二极管正向偏置。正电流将使二极管正偏到 VDD，负电流将使二极管正偏到地。电流大小一般为 100µA~500µA，可以检测到正偏后压降（通常为 0.65V，根据不同器件和参数而异）。

![](https://cos.wiki-power.com/img/20220727175130.jpg)

![](https://cos.wiki-power.com/img/20220727175416.png)

![](https://cos.wiki-power.com/img/2022-07-27_13-17-58_2X.png)


https://blog.csdn.net/yunxianpiaoyu/article/details/9091697