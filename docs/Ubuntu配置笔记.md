---
id: Ubuntu配置笔记
title: Ubuntu 配置笔记
---

【施工中】

## 安装系统

参考 https://www.bilibili.com/read/cv2480151/

1. 用 PE 盘清除原有 Windows 系统
2. 下载 .iso 镜像文件
3. 用 UltralISO 烧进新 U 盘
4. 进 BIOS 并安装 Ubuntu

## 安装软件

第三方软件不能安装的问题：https://linux.cn/article-12183-1.html

1. Chrome
2. VS Code
3. Qv2ray（https://qv2ray.net/）
4. Git
   - `sudo apt install git`
   - `git config --global user.name "John Doe"`
   - `git config --global user.email johndoe@example.com`

## 技巧

### 命令

注： `<xx>` 表示必须， `(xx)` 表示可选

- cd
  - 切换工作目录
  - `cd <目录路径>`
- pwd
  - 查看当前绝对路径
  - `pwd`
- mkdir
  - 创建目录
  - `mkdir （选项） <目录名称>`
- ls
  - 列出目录下的内容
  - `ls （选项） （目录名称）`
- touch
  - 改变文件 / 目录时间
  - `touch （选项） <文件名称>`
- mv
  - 剪切
  - `mv （选项） （源文件/目录） <目的地文件/目录>`
- cp
  - 复制
  - `cp （选项） （源文件名/目录名） <目的地文件名/目录名>`
- rm
  - 删除
  - `rm （选项） <文件名/目录名>`

### 快捷键

- 终端：`Ctrl` `Alt` `T`
- 显示隐藏文件：`Ctrl` `H`

## ROS

### 安装

编译器：

- `sudo apt-get install g++`
- `sudo apt-get install python`

1. 添加软件源：
   - sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
2. 添加密钥：
   - `sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654`
3. 安装 ROS：
   - `sudo apt update`
   - `sudo apt install ros-noetic-desktop-full`
4. 初始化 rosdep
   - `sudo apt-get install python3-rosdep`
   - `sudo rosdep init`
   - `rosdep update`
5. 设置环境变量
   - `echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc`
   - `source ~/.bashrc`
6. 安装 rosinstall
   - `sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential`

## 卸载

步骤：

- `sudo apt-get autoremove --purge ros-*`
- `sudo apt-get autoremove`
- 检查～/.bashrc 　以及／opt / 目录是否有 ros 文件夹存在

## 参考与致谢

- [ROS 安装教程](https://mp.weixin.qq.com/s?__biz=MzU4Mzc1NDA5Mw==&mid=2247486645&idx=1&sn=8ba442af57060b4d608d4c24d4307921&chksm=fda504b7cad28da11a2dd782b60dce466d53ad8e260f161b1e47f24423cc1e9f9aabc486c7f3&mpshare=1&scene=1&srcid=1125YhpxcX5as5se6rsek2IS&sharer_sharetime=1606233866320&sharer_shareid=57baeb2b96d0cff9b17ac2c15b36602b&key=a402d93e91746f46ae3228f3f1014e2c74a235c331168642475573a82dabce23902b3593a2a240439e9e37cd9b2ceaeab2b3b2130d952ee61260b30c6cad24ab3f1907dd57abfae9934d0c9487ddc4364b41261c6fb7277d94de784fa9718f9f60712a15b25f505ab7105346330f16f4b659970a5143e8aa882da96dc76c0100&ascene=1&uin=MTk5MDUwOTA0Mg%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=A0ZOktA1B68GOdT4vmLQPxA%3D&pass_ticket=b2tffRx7FG4vxDxfZxW7b9rGQf%2FK8YGbZtslM9VWUgnItoiwUPJYOD8ciwJbwx%2BC&wx_header=0)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
