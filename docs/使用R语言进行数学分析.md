---
id: 使用R语言进行数学分析
title: 使用 R 语言进行数学分析
---

## 软件安装

- [**R-software**](https://cran.r-project.org/)
  - 如果是在 Windows 上使用，请在网站主页点击 `Download R for Windows`，然后点击 `install R for the first time`，最后点击 `Download R 4.0.4 for Windows`，下载软件后请自行完成安装。
  - R 语言支持软件仅在后台运行，没有图形化界面。
- [**RStudio**](https://rstudio.com/products/rstudio/download/#download)
  - 直接点击蓝色的 `Download` 按钮，或者在页面下方选择其他系统版本下载。下载软件后请自行完成安装。

## 教学资源

### 在线资源（推荐）

- [R-tutorial](http://www.r-tutor.com/r-introduction)
- [零基础学 R 语言](https://bookdown.org/qiyuandong/intro_r/)

### 书籍

- [The R-book](https://www.cs.upc.edu/~robert/teaching/estadistica/TheRBook.pdf)
- [R for Data Science](https://r4ds.had.co.nz/index.html)

## 基本数据类型

R 语言的数据类型，主要有以下这几种：

- **数值型（numerics）**
- **复数型（complex）**
- **逻辑型（logical）**
- **字符型（characters）**

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

### 复数型（complex）

在 R 语言中，复数变量通过 `i` 来定义：

```r
> z = 1 + 2i     # 创建一个复数变量 z
> z              # 输出 z 的值
[1] 1+2i
> class(z)       # 输出 z 的类型
[1] "complex"
```

如果我们单纯对 `-1` 开方，那将会出错：

```r
> sqrt(−1)       # 对 -1 开方
[1] NaN
Warning message:
In sqrt(−1) : NaNs produced
```

但是对复数 `−1+0i` 开方，那就没问题：

```r
> sqrt(−1+0i)    # 对 −1+0i 开方
[1] 0+1i
```

也可以用强制类型转换来进行运算：

```r
> sqrt(as.complex(−1))
[1] 0+1i
```

### 逻辑型（logical）

逻辑型通常通过比较变量而产生：

```r
> x = 1; y = 2   # 样本变量
> z = x > y      # x 比 y 大吗？
> z              # 输出逻辑变量
[1] FALSE
> class(z)       # 输出 z 的类型
[1] "logical"
```

基本逻辑操作有 `&`（与），`|`（或）, `!`（非）：

```r
> u = TRUE; v = FALSE
> u & v          # 对 u，v 进行 "与" 运算
[1] FALSE
> u | v          # 对 u，v 进行 "或" 运算
[1] TRUE
> !u             # 对 u 进行 "非" 运算
[1] FALSE
```

### 字符型（character）

字符型可通过函数 `as.character` 进行强制类型转换得到：

```r
> x = as.character(3.14)
> x              # 输出字符串
[1] "3.14"
> class(x)       # 输出 x 的类型
[1] "character"
```

要合并两个字符型变量，可以使用函数 `paste`：

```r
> fname = "Joe"; lname ="Smith"
> paste(fname, lname)
[1] "Joe Smith"
```

像 C 语法一样，可以用格式输出以增加可读性，用函数 `sprintf` 即可：

```r
> sprintf("%s has %d dollars", "Sam", 100)
[1] "Sam has 100 dollars"
```

如果要从字符串中提取子串，可以使用函数 `substr`：（示例中把第 `3` 到第 `12` 个字符之间的字符截取了下来）

```r
> substr("Mary has a little lamb.", start=3, stop=12) 
[1] "ry has a l"
```

如果要把第一个遇见的字符替换成另外一个，可以使用函数 `sub`：（示例中把 `little` 替换成了 `big`）

```r
> sub("little", "big", "Mary has a little lamb.") 
[1] "Mary has a big lamb."
```