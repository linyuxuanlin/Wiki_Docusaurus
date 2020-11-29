---
id: 使用VSCode进行远程开发
title: 使用 VSCode 进行远程开发
---

—— 将 VS Code 作为 SSH 工具，连接开发远程服务器。

## 背景

尝试了各类 SSH 工具，最终还是回到免费好用颜值又高的 VS Code.
本篇文章仅记录以供日后参考用，部分内容未详细展开说明。更多教程请参考文末链接。

VS Code 基础配置篇：[**VS Code 生产力指南 - 环境配置**](https://wiki-power.com/post/%E9%AB%98%E6%95%88%E5%B7%A5%E4%BD%9C/VSCode%E7%94%9F%E4%BA%A7%E5%8A%9B%E6%8C%87%E5%8D%97-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html)

## 配置扩展

点击安装扩展：[**Remote - SSH**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)

点击左下角 `Remote` 按钮即可使用。

## 其他配置

### VS Code 无法监视大型工作区的文件变化

运行此命令查看当前限制：

```shell
$ cat /proc/sys/fs/inotify/max_user_watches
```

编辑 `/etc/sysctl.conf` 文件：

```shell
$ sudo vim /etc/sysctl.conf
```

增加如下代码，将此限制增加到最大值：

```shell
$ fs.inotify.max_user_watches=524288
```

保存，启用设置：

```shell
$ sudo sysctl -p
```

## 参考与致谢

- [VSCode Remote 体验 | 远程 Linux 环境开发真香](https://zhuanlan.zhihu.com/p/64849549)
- [VSCode 报警处理：VisualStudioCode 无法监视这个大型工作区的文件变化](http://www.deadnine.com/somehow/2019/0208/1481.html)

<br />

<br />

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
