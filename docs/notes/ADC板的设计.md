---
id: ADC板的设计
title: ADC 板的设计
---

## 参考

- [ADS1015 +/-24V ADC breakout](https://shop.pimoroni.com/products/ads1015-adc-breakout)
- [ADS1015](https://www.ti.com.cn/product/cn/ADS1015)

- 24 V 供电
- 9 通道
  - 7 pin's 0 or 24vac(on/off)
  - 2pin's 0-10vac(variable)
- 10 个螺丝端子（1 个地）
- 过电压保护
- 耐反向电压
- 和 BlueNano V1 兼容同一个外壳

客户给了一个方案：3\*ads1015，或者用 ADS111x 系列组建 9 通道；
