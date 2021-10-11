---
id: Linux学习笔记-BeagleBone踩坑记录
title: Linux 学习笔记 - BeagleBone 踩坑记录
---

## 各版本 BeagleBone 的区别

| BeagleBone® Black | Seeed Studio BeagleBone® Green | Seeed Studio BeagleBone® Green Wireless       | Seeed Studio BeagleBone® Green Gateway                                 |
| ----------------- | ------------------------------ | --------------------------------------------- | ---------------------------------------------------------------------- |
| $ 60.00 USD       | $ 44.00 USD                    | $ 52.90 USD                                   | $ 78.90 USD                                                            |
| 1 x USB Host      | 1 x USB Host                   | 4 x USB2.0 Host                               | 2 x USB2.0 Host                                                        |
| Ethernet          | Ethernet 10/100M               | Wi-Fi 802.11b/g/n 2.4GHz and Bluetooth 4.1 LE | Ethernet 10/100M Bit and Wi-Fi 802.11b/g/n 2.4GHz and Bluetooth 4.1 LE |
| HDMI Port         | 2 x Grove Connectors           | 2 x Grove Connectors                          | 2 x Grove Connectors                                                   |

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

## 使用 Adafruit-BBIO 开发

### 安装 Adafruit-BBIO

```
sudo apt-get update
sudo apt-get install build-essential python3-dev python3-pip -y
sudo pip3 install Adafruit_BBIO
```

### 基本程序框架

```py
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

### GPIO

调用库：

```py
import Adafruit_BBIO.GPIO as GPIO
```

#### 设置引脚输入 / 输出

```py
GPIO.setup("P8_14", GPIO.OUT)
```

`输入` / `输出` 可选 `GPIO.IN`/`GPIO.OUT`。

#### 设置输出高 / 低电平

```py
GPIO.output("P8_14", GPIO.HIGH)
```

`高` / `低` 电平可选 `GPIO.HIGH`/`GPIO.LOW`，或 `1`/`0`。

#### 引脚输入模式

查看输入端口的状态：

```py
if GPIO.input("P8_14"):
  print("HIGH")
else:
  print("LOW")
```

等待边沿输入，参数有 `GPIO.RISING`/`GPIO.FALLING`/`GPIO.BOTH`：

```py
GPIO.wait_for_edge(channel, GPIO.RISING)

或

GPIO.wait_for_edge(channel, GPIO.RISING, timeout)
```

#### 监测输入

```py
GPIO.add_event_detect("P9_12", GPIO.FALLING)
if GPIO.event_detected("P9_12"):
    print "event detected!"
```

### 延时

延时 1 秒：

```py
import time
time.sleep(1)
```

### PWM

```py
import Adafruit_BBIO.PWM as PWM
#PWM.start(通道, 占空比, 默认频率=2000, 极性=0)
PWM.start("P9_14", 50)

#也可以自己定义频率和极性
PWM.start("P9_14", 50, 1000, 1)
```

其中，占空比的有效值为 0.0-100.0，start 函数用于激活该通道上的 PWM。

当启动 PWM 之后，就可单独设置占空比或频率了：

```py
PWM.set_duty_cycle("P9_14", 25.5)
PWM.set_frequency("P9_14", 10)
```

用完之后，也可以停止 PWM 输出，或清除信息：

```py
PWM.stop("P9_14")
PWM.cleanup()
```

### ADC

在这个框架里面，ADC 有三个函数方法：setup，read 和 read_raw。在读取数据之前，要先 setup。

在 BeagleBone 上，以下引脚可以使用 ADC：

```
"AIN4", "P9_33"
"AIN6", "P9_35"
"AIN5", "P9_36"
"AIN2", "P9_37"
"AIN3", "P9_38"
"AIN0", "P9_39"
"AIN1", "P9_40"
```

注意：ADC 的最大电压为 1.8V，ADC 的地是 GNDA_ADC (P9_34) 引脚。如果需要检测 3.3V，可以用电阻分压，就像下图，把 0-3.3V 分到 0-1.65V 以读取模拟值。

#### 初始化 ADC

```py
import Adafruit_BBIO.ADC as ADC

ADC.setup()
```

#### 读取模拟值

```py
value = ADC.read("P9_40")

或

value = ADC.read("AIN1")
```

这框架有个 bug，需要连续读两次，才能获取最新的的模拟值。

读回来的结果是一个 0-1.0 之间的值，可以乘以 1.8 以转换成电压值。如果不想这么麻烦，也可以用 read_raw 来直接读出真实电压值。

### I2C

使用 I2C，只需要导入库，设置 I2C 地址，选择是哪个 I2C（默认是 I2C-1）。

```py
from Adafruit_I2C import Adafruit_I2C

i2c = Adafruit_I2C(0x77)
```

I2C 功能需要安装 python 包 `python-smbus`，但目前这个包只兼容 python 2 版本。我们可以用 [**smbus2**](https://pypi.org/project/smbus2/) 替换使用。

### SPI

导入 SPI 库：

```py
from Adafruit_BBIO.SPI import SPI
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

## 驱动 Seeed OLED（SSD1306，I2C，12864）

使用 pip3 下载 smbus2 包：

```py
sudo apt-get install python3-pip
pip3 install smbus2
```

程序参考 [**Grove - OLED Display 0.96 inch**](https://wiki.seeedstudio.com/Grove-OLED_Display_0.96inch/#play-with-beaglebone-green)。

## 参考与致谢

- [Seeed Studio BeagleBone® Green Gateway](https://wiki.seeedstudio.com/BeagleBone-Green-Gateway/)
- [Beaglebone black 4G 调试中的问题](https://blog.csdn.net/qq_32543253/article/details/53536266)
- [项目](https://beagleboard.org/p)
- [Python Adafruit_GPIO.I2C Examples](https://www.programcreek.com/python/example/92524/Adafruit_GPIO.I2C)
- [Adafruit-BBIO 1.2.0](https://pypi.org/project/Adafruit-BBIO/#description)
- [Upgrade the software on your Beagle](https://beagleboard.org/upgrade#connect)
- [Setting up IO Python Library on BeagleBone Black](https://learn.adafruit.com/setting-up-io-python-library-on-beaglebone-black)
- [测试固件](http://plm.seeedstudio.com.cn:9002/Windchill/app/#ptc1/tcomp/infoPage?oid=VR%3Awt.doc.WTDocument%3A30844361&u8=1)

## BeagleBone Green Gateway

### 连接 Wi-Fi

```shell
debian@beaglebone:~$ connmanctl
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
    se.101               wifi_1862e41aec0d_73652e313031_managed_psk
    STU-EE               wifi_1862e41aec0d_5354552d4545_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_1862e41aec0d_5354552d4545_managed_psk
Agent RequestInput wifi_1862e41aec0d_5354552d4545_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory, Alternates=[ WPS ] ]
  WPS = [ Type=wpspin, Requirement=alternate ]
Passphrase? 输入密码
Connected wifi_1862e41aec0d_5354552d4545_managed_psk
connmanctl> quit
```

### 连接蓝牙

```shell
sudo apt install bluez
```

如果有错误，就先更新一下：

```shell
sudo apt update
```

连接附近的蓝牙：

```shell
bb-wl18xx-bluetooth
bluetoothctl
scan on
```

配对连接设备（后面一串是要配对设备的 MAC 地址）：

```shell
pair A4:xx:xx:xx:xx:30
trust A4:xx:xx:xx:xx:30
connect A4:xx:xx:xx:xx:30
```

可使用 `quit` 推出蓝牙命令行。