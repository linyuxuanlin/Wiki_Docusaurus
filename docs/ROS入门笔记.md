---
id: ROS入门笔记
title: ROS入门笔记
---

本教程基于 ROS2 Foxy，Ubuntu20.04。

## ROS 环境安装

### 设置 UTF-8 编码

```bash
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

### 设置软件源

```bash
sudo apt update && sudo apt install curl gnupg2 lsb-release
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
```

```bash
sudo sh -c 'echo "deb [arch=$(dpkg --print-architecture)] http://packages.ros.org/ros2/ubuntu $(lsb_release -cs) main" > /etc/apt/sources.list.d/ros2-latest.list'
```

### 安装 ROS2

```bash
sudo apt update
sudo apt install ros-foxy-desktop
```

### 设置环境变量

```bash
source /opt/ros/foxy/setup.bash
```

### 安装自动补全工具

```bash
sudo apt install python3-argcomplete
```

### 安装成功后的测试

运行 Talker：

```bash
source /opt/ros/foxy/setup.bash
ros2 run demo_nodes_cpp talker
```

打开另一个命令行窗口，运行 Listener：
```bash
source /opt/ros/foxy/setup.bash
ros2 run demo_nodes_py listener
```

### 如果想卸载 ROS

```
sudo apt remove ros-foxy-* && sudo apt autoremove
```

随后检查～/.bashrc 　以及／opt / 目录是否有 ros 文件夹存在。

## Next?

【编辑中】

## 参考与致谢

- [ROS2 入门教程 ——2. Ubuntu20.04 安装 ROS2 Foxy](https://www.guyuehome.com/10226)


