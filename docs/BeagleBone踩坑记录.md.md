---
id: BeagleBone踩坑记录
title: BeagleBone 踩坑记录
---

## 硬件资源

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211008090724.png)

- USB Type-A：作为 USB 从机（Host）模式使用
- USB Micro：为板子供电并且作为从机
- LEDs
  - D2：在启动时以心跳灯闪烁
  - D3：读写 SD 卡数据时亮起
  - D4：当 CPU 活动时亮起
  - D5：当 eMMC 读写时亮起
- Boot/User 按钮：不管按不按，如果有 SD 卡都会默认从 SD 卡启动（殊途同归），当启动后就作为一个普通按钮，连接到 GPIO_72
- I2C Grove 接口：连接到 I2C2
- Uart Grove 接口：连接到 UART2
- Serial Debug：连接到 UART0，靠近 USB 的引脚为 pin1，从 pin1-pin6 分别为：GND, NC, NC, RX, TX, NC

## 环境配置

### 驱动安装问题

在 Windows 10 及以上版本系统，默认采用驱动程序强制签名，这可能是驱动安装失败的原因。

解决方法：

- 按住 `shift`，点击重启电脑
- 进入 `疑难解答` - `高级选项` - `启动设置`，点击 `重启`
- 重启后，按页面提示，按键盘 `7`，即可禁用驱动程序强制签名
- 开机后，即可正常安装 BeagleBone 的驱动程序

### 镜像下载烧录

官网镜像下载地址：https://beagleboard.org/latest-images  
烧录工具：https://sourceforge.net/projects/win32diskimager/files/latest/download

将镜像烧录进 SD 卡，断电插入 BeagleBone，下次上电就会从 SD 卡启动系统

### 使用串口访问

使用 USB 转串口连接板载的串行端子，在电脑端打开串口工具（如 WindTerm）进行连接。（初始用户名和密码均为 `root`）

波特率是 115200！

### 使用以太网访问

在串口连接内使用命令 `ifconfig` 找到以太网地址，通过地址连接。用户名为 `debian`，密码为 `temppwd`。

### 通过 USB 访问

usb0：192.168.7.2  
usb1：192.168.6.2

使用 SSH 方式访问，用户名为 `debian`，密码为 `temppwd`。

## 使用 BBIO 框架运行程序

```python
pip install adafruit-bbio
```

### 基本程序框架

```python
import time
import Adafruit_BBIO.GPIO as GPIO

RELAY = "P9_22"            # GPIO P9_22
GPIO.setup(RELAY, GPIO.OUT)

while True:

    GPIO.output(RELAY, GPIO.HIGH)
    time.sleep(1)
    GPIO.output(RELAY, GPIO.HIGH)
    time.sleep(1)
```

## 使用 Adafruit-BBIO 开发

### 安装 Adafruit-BBIO

```
sudo apt-get update
sudo apt-get install build-essential python3-dev python3-pip -y
sudo pip3 install Adafruit_BBIO
```

## GPIO

调用库：

```python
import Adafruit_BBIO.GPIO as GPIO
```

#### 设置引脚输入 / 输出

```python
GPIO.setup("P8_14", GPIO.OUT)
```

`输入` / `输出` 可选 `GPIO.IN`/`GPIO.OUT`。

#### 设置输出高 / 低电平

```python
GPIO.output("P8_14", GPIO.HIGH)
```

`高` / `低` 电平可选 `GPIO.HIGH`/`GPIO.LOW`，或 `1`/`0`。

#### 引脚输入模式

查看输入端口的状态：

```python
if GPIO.input("P8_14"):
  print("HIGH")
else:
  print("LOW")
```

等待边沿输入，参数有 `GPIO.RISING`/`GPIO.FALLING`/`GPIO.BOTH`：

```python
GPIO.wait_for_edge(channel, GPIO.RISING)

或

GPIO.wait_for_edge(channel, GPIO.RISING, timeout)
```

#### 监测输入

```python
GPIO.add_event_detect("P9_12", GPIO.FALLING)
if GPIO.event_detected("P9_12"):
    print "event detected!"
```

---

### 延时：

延时 1 秒：

```python
import time
time.sleep(1)
```

```python

```

```python

```

```python

```

```python

```

```python

```

## 其他

安装 Adafruit-BBIO 时，如果失败可选手动安装：

```
sudo apt-get update
sudo apt-get install build-essential python3-dev python3-pip -y
git clone git://github.com/adafruit/adafruit-beaglebone-io-python.git
cd adafruit-beaglebone-io-python
sudo python3 setup.py install
```

升级 Adafruit-BBIO：

```
sudo pip3 install --upgrade Adafruit_BBIO
```

因为 python-smbus 这个依赖的原因，I2C 仅限在 python2 下使用。

## 参考与致谢

- [Seeed Studio BeagleBone® Green Gateway](https://wiki.seeedstudio.com/BeagleBone-Green-Gateway/)
- [Beaglebone black 4G 调试中的问题](https://blog.csdn.net/qq_32543253/article/details/53536266)
- [项目](https://beagleboard.org/p)
- [Python Adafruit_GPIO.I2C Examples](https://www.programcreek.com/python/example/92524/Adafruit_GPIO.I2C)
- [Adafruit-BBIO 1.2.0](https://pypi.org/project/Adafruit-BBIO/#description)
- [Upgrade the software on your Beagle](https://beagleboard.org/upgrade#connect)
