---
id: 个人知识库的搭建-基于Docusaurus
title: 个人知识库的搭建 - 基于 Docusaurus
---

【施工中】

## 参考与致谢 


> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

准备条件：
- 科学上网
- 随机应变的能力
- 一点儿英语基础


## 配置本地环境

### 安装 Node.js

访问 [**Node.js 官网**](https://nodejs.org/zh-cn/)，下载并安装 Node.js.

### VS Code 的安装配置

我们用 VS Code 作为本地编辑器，用于修改网站框架、编写文章。

首先，到 [**VS Code 官网**](https://code.visualstudio.com/) 下载安装 VS Code.

软件安装完成后，我们可以选装以下两个插件：

- [**Chinese (Simplified) Language Pack**](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)：汉化 VS Code 界面
- [**Markdown All in One**](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)：提供更多 Markdown 语法支持

安装插件后，可能需要按提示重启 VS Code.


更加详细的配置说明可以参考 [**VS Code 生产力指南 - 环境配置**](https://wiki-power.com/VSCode%E7%94%9F%E4%BA%A7%E5%8A%9B%E6%8C%87%E5%8D%97-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE) 这篇文章。



### 安装 Docusaurus 框架

切换到需要建立网站项目的目录。

> 例如：我想要在电脑的 D 盘下建立一个名为 `wiki` 的文件夹，作为这个知识库项目。那么请在 VS Code 内选择 `文件` - `打开文件夹`，点击 D 盘，并点击 `选择文件夹`

使用 npx 初始化网站：`npx @docusaurus/init@latest init [name] [template]`

> 例如：我的网站项目文件夹的名字为 `wiki`，那就将 `wiki` 替换掉 `[name]`，而根据 [**官方文档**](https://v2.docusaurus.io/docs/installation#scaffold-project-website)， `[template]` 指的是网站模板的主题，这里我们将其替换为 `classic` 即可。所以此处我们执行的命令为 **`npx @docusaurus/init@latest init wiki classic`**。我们在 VS Code 内使用快捷键 `Ctrl` + <code>`</code>

