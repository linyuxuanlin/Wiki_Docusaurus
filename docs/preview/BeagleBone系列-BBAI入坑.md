---
id: BeagleBone系列-BBAI入坑
title: BeagleBone 系列 - BBAI 入坑
---

## 参考与致谢

- [镜像](https://rcn-ee.net/rootfs/debian-arm64/)
- [测试代码](https://gitee.com/gary87m/notes_seeed/blob/master/BBAI_Robotics%20Cape.md)
- [Cape 问题](https://docs.qq.com/sheet/DU1BBZnNORlJhRG5w)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 初始化

首先，连接 Cape 的 12V 电源输入，使用 USB 转串口模块，连接板载串口（J3 口才能用于调试）：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211027164010.png)

确保 USB 转串口模块有驱动（我用到是 FTDI 模块，驱动下载地址是 <https://ftdichip.com/drivers/vcp-drivers/>）。

使用命令行工具连接串口（我用的是 MobaXterm），波特率设置为 115200。

## 安装插件

```shell
wget https://github.com/linyuxuanlin/File-host/blob/main/stash/k3-j721e-beagleboneai64.dtb?raw=true
```

改名为 `k3-j721e-beagleboneai64.dtb`，移至 `/boot` 目录下并覆盖原文件。（我将文件传到 GitHub 仓库，使用 `wget` 命令获取。可能需要修改 GitHub host 才能正常下载）

## evtest

event test 工具是打印 evdev 内核事件的工具，它直接从内核设备读取并打印设备描述的带有值和符号名的事件，可以用来调试鼠标、键盘、触摸板等输入设备。

下载 evtest 工具：

```shell
sudo apt install evtest
```

使用工具：

```shell
sudo evtest /dev/input/eventｘ（ｘ就是时间编号）
```

## 检测按键输入

```shell
debian@BeagleBone:~$ evtest
No device specified, trying to scan all of /dev/input/event*
Available devices:
/dev/input/event0:      gpio-keys
Select the device event number [0-0]: 0
Input driver version is 1.0.1
Input device ID: bus 0x19 vendor 0x1 product 0x1 version 0x100
Input device name: "gpio-keys"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 256 (BTN_0)
    Event code 257 (BTN_1)
    Event code 258 (BTN_2)
Key repeat handling:
  Repeat type 20 (EV_REP)
    Repeat code 0 (REP_DELAY)
      Value    250
    Repeat code 1 (REP_PERIOD)
      Value     33
Properties:
Testing ... (interrupt to exit)
Event: time 1634868166.060258, type 1 (EV_KEY), code 257 (BTN_1), value 1
Event: time 1634868166.060258, -------------- SYN_REPORT ------------
Event: time 1634868166.284257, type 1 (EV_KEY), code 257 (BTN_1), value 0
Event: time 1634868166.284257, -------------- SYN_REPORT ------------
```

## SPI 总线上设备

- Barometer - BMP280
- 6-DOF - LSM6DS3TR
- Compass - BMM150

```shell
cd /sys/bus/iio/devices
ls -l

cat iio\:device0/name
cat iio\:device1/name
cat iio\:device2/name
cat iio\:device3/name
cat iio\:device4/name
cat iio\:device5/name
```
