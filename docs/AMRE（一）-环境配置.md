---
id: AMRE（一）-环境配置
title: AMRE（一）- 环境配置
---

## 参考与致谢 

- [零基础学 R 语言](https://bookdown.org/qiyuandong/intro_r/)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。




## 教学资源

### 在线资源（推荐）

- [R-tutorial](http://www.r-tutor.com/r-introduction)

### 书籍

- [The R-book](https://www.cs.upc.edu/~robert/teaching/estadistica/TheRBook.pdf)
- [R for Data Science](https://r4ds.had.co.nz/index.html)



## 软件安装

- [**R-software**](https://cran.r-project.org/)
  - 如果是在 Windows 上使用，请在网站主页点击 `Download R for Windows`，然后点击 `install R for the first time`，最后点击 `Download R 4.0.4 for Windows`，下载软件后请自行完成安装。
  - R 语言支持软件仅在后台运行，没有图形化界面。
- [**RStudio**](https://rstudio.com/products/rstudio/download/#download)
  - 直接点击蓝色的 `Download` 按钮，或者在页面下方选择其他系统版本下载。下载软件后请自行完成安装。


## 基本数据类型

R 语言的数据类型，主要有这几种：

- **数值型（numerics）**：例如 1，2.5
- **逻辑判断（logical）**：TRUE/FALSE
- **字符型（characters）**
- **因子（factors）**


### 数值型（numerics）

数值型是 R 语言中最基本的数据类型。当我们把一个数字值赋给变量，那变量的类型就是数值型：

```r
> x = 11.15       # 把 11.15 这个数值赋给变量 x
> x              # 输出出 x 的值
[1] 11.15 
> class(x)       # 输出 x 的类型
[1] "numeric"
```

整数或小数都可以是数值型变量。但如果按照以上的方法创建，那么整数变量也会被视为小数变量。

如果非要创建整数变量，就得使用函数 `is.integer`：

```r
> y = as.integer(3) 
> y              # 输出 y 的值
[1] 3 
> class(y)       # 输出 y 的类型
[1] "integer" 
> is.integer(y)  # y 是否为整数？
[1] TRUE
```

除了使用 `is.integer` 函数，你也可以附加 `L` 后缀来实现：

```r
> y = 3L 
> is.integer(y)  # y 是否为整数？
[1] TRUE
```

如果要对小数进行取整，我们可以使用函数 `as.integer`：

```r
> as.integer(3.14)    # 对变量进行强制数值转换
[1] 3
```

也可以对字符串类型进行解析并取整：

```r
> as.integer("5.27")  # 对变量进行强制数值转换 
[1] 5
```

但如果解析的字符串不是数值，那就会出错：

```r
> as.integer("Joe")   # 解析一个非数值型的字符串
[1] NA 
Warning message: 
NAs introduced by coercion
```

R 语言像 C 语言一样，把整数 `1` `0` 与逻辑 `TRUE` `FALSE`对应了起来：

```r
> as.integer(TRUE)    # TRUE 的数值型变量 
[1] 1 
> as.integer(FALSE)   # FALSE 的数值型变量 
[1] 0
```