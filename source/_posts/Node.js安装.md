---
title: Node.js安装
categories: Node.js
---
## 一、windows
---
#### 1.下载
Node.js：**[https://nodejs.org/en/](https://nodejs.org/en/)**
其中，LTS为长时间支持版本，Current为最新版。
#### 2. 安装
打开下载后的exe，一路next即可，即可完成安装。然后打开cmd命令行，输入：
**node – v**
如果有显示版本号则安装成功。
#### 3.配置
打开Node.js目录，建立cache目录，然后打开命令，配置npm路径：
**npm config set prefix "D:\Program Files\nodejs"**
**npm config set cache "D:\Program Files\nodejs\cache"**
#### 4.环境
设置系统变量。进入我的电脑→属性→高级→环境变量→系统变量
新建“**NODE_PATH**”，输入“**D:\Program Files\nodejs\node_modules**”。
#### 5.包管理器
node.js自带的包管理器（npm）不论是在速度上还是在功能上都有所不足。所以这里可以安装其他的包管理器。

首先是cnpm，淘宝基于npm的国内镜像版
**npm install -g cnpm --registry=https://registry.npm.taobao.org**

然后是yarn，和npm兼容的包管理器，提供多线程下载和更多的功能。
下载地址：**[https://yarnpkg.com/latest.msi](https://yarnpkg.com/latest.msi)**

## 二、linux
---
linux是基于Centos7.5的版本进行说明的
#### 1. 下载
命令行：
**curl https://nodejs.org/dist/latest-v8.x/**
可浏览所有v8版本
**cur https://nodejs.org/dist/latest-v9.x/**
可浏览所有v9版本
下载相应的版本使用wget，例如：
**wget https://nodejs.org/dist/latest-v8.x/node-v8.4.0-linux-x64.tar.gz**

#### 2. 解压
假如我们在/usr/local/目录下载的node.js

首先要解压下载回来的压缩包：
**tar zxvf node-v8.4.0-linux-x64.tar.gz**
接着把解压出来的文件夹重命名：
**mv node-v8.4.0-linux-x64 node**

#### 3.配置
##### 1).配置文件
然后使用vim配置环境变量
**vim /etc/profile**
在最后边添加
**#set for nodejs  
export NODE_HOME=/usr/local/node  
export PATH=\$NODE_HOME/bin:$PATH**
按Esc，输入:wq保存并退出。
##### 2).检查
使用source命令使环境变量生效
**source /etc/profile**
最后，使用命令查看版本
**node -v**
**npm –v**
出现相应版本号则表示成功，如果报错可以重启后在尝试
#### 4.包管理器
node.js自带的包管理器（npm）不论是在速度上还是在功能上都有所不足。所以这里可以安装其他的包管理器。

首先是cnpm，淘宝基于npm的国内镜像版
**npm install -g cnpm --registry=https://registry.npm.taobao.org**

然后是yarn，和npm兼容的包管理器，提供多线程下载和更多的功能。
下载：**sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo**
安装：**sudo yum install yarn**
