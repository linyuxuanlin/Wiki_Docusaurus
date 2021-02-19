---
id: 如何批量拉取Git仓库更新
title: 如何批量拉取 Git 仓库更新
---

仓库一多起来后，逐个手动拉取就变得很麻烦，使用本文的方法，可以对 Git 仓库进行批量拉取操作。

## 步骤

1. 新建脚本文件 `pull-master.sh`，并将以下代码粘贴进去：

```bash title="pull-master.sh"
#!/bin/bash

function showMsg()
 {
   echo -e "\033[32m$1\033[0m"
 }

function getdir(){
    for element in `ls $1`
    do  
        dir_or_file=$1"/"$element
        if [ -d $dir_or_file ]
        then
            cd $1"/"$element 
            showMsg 'git pull '$element
            git pull
        else
            echo $dir_or_file
        fi  
    done
}
root_dir="【包含多个仓库的路径】"
getdir $root_dir
```

2. 将 `【包含多个仓库的路径】` 修改为你的路径，比如我的是 `C:\repos`。
3. 运行命令：

```bash
sh pull-master.sh
```

或

```bash
./pull-master.sh
```

## 参考与致谢 

- [批量 git pull 小脚本](https://www.jianshu.com/p/42e8da5eb0af)
- [git 批量 pull_shell 脚本 -- 多个代码库批量 pull 最新 master 代码](https://blog.csdn.net/weixin_39618730/article/details/113024998)
