---
id: BeagleBone踩坑记录
title: BeagleBone 踩坑记录
---

## 参考与致谢 

- [Seeed Studio BeagleBone® Green Gateway](https://wiki.seeedstudio.com/BeagleBone-Green-Gateway/)
- [Beaglebone black 4G 调试中的问题](https://blog.csdn.net/qq_32543253/article/details/53536266)

## 环境配置

### 驱动安装问题

在 Windows 10 及以上版本系统，默认采用驱动程序强制签名，这就是驱动安装失败的原因。

解决方法：

- 按住 `shift`，点击重启电脑
- 进入 `疑难解答` - `高级选项` - `启动设置`，点击 `重启`
- 重启后，按页面提示，按键盘 `7`，即可禁用驱动程序强制签名
- 开机后，即可正常安装 BeagleBone 的驱动程序


