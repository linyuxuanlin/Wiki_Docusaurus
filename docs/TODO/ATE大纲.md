讲一下我对 ATE 的认识。ATE 是自动化测试设备，主要指的是 Tester, Handler, Prober, Loadboard 这一类仪器，因为现在的芯片原来越复杂，普通的 Bench 测试没法满足需求。我们这边做的主要是对封装后的芯片进行测试，算是半导体产业链上游里面最末端的一个组成部分。

测试最基础的是测 DC 和 AC 参数。DC 参数用的方法可以是 Static，就是用 PE 卡的 Driver 和 PMU，然后 Force V Measure I 或 Force I Measure V ；也可以用 Functional 的方法，就是 Current Load 和 Voltage Comparator，然后跑 Pattern 来测试。

DC 测试的话主要有这么一些参数：

- OS
  - Static
  - Functional
- IDD
  - Static
- VOL/IOL,VOH/IOH
  - Static
  - Functional
- VIL/VIH
  - Functional
- IIL/IIH
  - Static
- IOZL/IOZH
  - Static
  - Functional

---

- OS 用来判断 DUT 是不是正确连接测试系统了
- IDD 用来看芯片总电流会不会超标，一般要看最低功耗和最大工频下的电流
- VOL/IOL,VOH/IOH 是用来看在输出一定的电流下能不能达到电平阈值
- VIL/VIH 是看能不能正常识别输入的逻辑
- IIL/IIH 引脚对电源的漏电流会不会超标，也就是看隔离的程度
- IOZL/IOZH 是看引脚关断时漏电流会不会超标

---

1. **OS**：测芯片引脚是不是短路或开路了
   - 静态法：给电流，测上下保护二极管正偏电压。
   - 功能测试法：用 Load 和 Receiver 测，给 VREF 形成动态负载电流，再测电压
2. **IDD**：芯片总电流会不会超标？
   - 静态法：给电压，测最低功耗下的总电流。
   - 动态法：给电压，测最高工频下的总电流。
3. **VOL/IOL & VOH/IOH**：在规定电流下能不能输出正确的电平？
   - 静态法：给电流测电压是否达标。
   - 功能测试法：用 Load 和 Receiver 测，给 VREF 形成动态负载电流，再测电压
4. **VIL/VIH**：输入识别的逻辑对不对
   - 功能测试法：（逻辑芯片）输入标称的 VIL/VIH，测输出 VOL/VOH 是否达标。
5. **IIL/IIH**：引脚对电源的漏电流会不会超标，也就是看隔离程度
   - 串行静态法：拉高、拉低输入引脚电平，测电流值。
   - 并行静态法：用多个 PMU 同时测多个引脚。但是 pin 之间的漏电流没法测出
   - 合并静态法：用一个 PMU 测多个漏电流总和。
6. **IOZL/IOZH**：引脚关断时漏电流会不会超标？
   - 串行静态法：拉高拉低单个高阻引脚，测电流。
   - 并行静态法：用多个 PMU 测多个引脚。
   - 功能测试法：用 Load 和 Receiver 测，给 VREF 形成动态负载电流，再测电压

（OS 电源测试的话主要是给小电压测电流，看有没有短路。小电压的原因是避免让其他模块上电烧掉）
（**timing level data**）
并行法：有可能 pin2pin 测不出？

DC 方法测：

---


