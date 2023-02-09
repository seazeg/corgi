---
title: 开发规范
---

## 介绍

为保证多人协作项目的代码统一，以便项目维护，并提高代码可读性。

在脚手架中加入 ESLint、Prettier、husky、lint-staged 、commitlint 来规范代码

通过命令行工具`corgi`作为启动、构建和站点生成工具

## 环境准备

保证依赖兼容性，基础`node`版本采用 `16.13.0`

通过安装`nvm`切换 `node` 版本，来兼容历史项目

包地址：https://github.com/coreybutler/nvm-windows/releases

```bash
nvm install <node.Verison>
nvm use <node.Verison>
```

安装`nrm`源切换工具和`pnpm`包管理工具

```bash
npm install -g nrm //安装源切换工具
nrm use taobao //切换至taobaoi源
npm install -g pnpm //全局安装pnpm包管理
```

进入根目录后执行

```bash
#安装依赖
pnpm install
```

## 开发流程

### 本地启动

通过 `corgi` 启动 http 静态资源服务

```bash
# corgi start <siteName>
corgi start example
```

### 构建打包方式

打包成功后会在相应项目中生成 build 目录

```bash
# 测试打包
corgi build --env test --siteName <siteName>
# 生产打包
corgi build --env pro --siteName <siteName>
```

### 自动化部署

在`jenkins`脚本处直接调用

```bash
# 测试
corgi push --env test
# 生产
corgi push --env pro
```

## 使用规范

### 分支管理

从 `dev` 分支切出新分支，命名方式如下

```txt
# 开发人员姓名_任务模块名_当前日期
# jinyuxi_productlist_20230101
```

### 提交规则

为提高项目维护质量，需按要求提交 `commit` 信息

可用的`type-name`列表

-   `feat` 增加新功能
-   `fix` 修复问题/BUG
-   `style` 代码风格相关无影响运行结果的
-   `perf` 优化/性能提升
-   `refactor` 重构
-   `revert` 撤销修改
-   `docs` 文档/注释
-   `chore` 依赖更新/脚手架配置修改等
-   `wip` 开发中

```bash
git commit -m "[type-name]: [subject-name]"
```

### H5 命名规范

-   页面模块名即目录名，语义化命名 `例：产品列表 product_list`，当前页面模块中只能存在 js、less、shtml 文件以及 resource 目录

-   Js、less 和 shtml，都以页面模块名为命名 `例：产品列表 product_list.less`

-   resource 中存放当前页面模块所引用的资源，其中包括各类型图片(jpg、png、gif、svg)，媒体文件(mp4、mov、m3u8)

-   public 目录中只能存放公用资源，包括公用 js、公用 less、公用头尾和头尾资源的 shtml 以及 resource 中的公用图片以及媒体文件

### Vue 命名规范

-   页面模块名即目录名，语义化命名 `例：产品列表 product_list`，当前页面模块中只能存在 js、less、shtml 文件以及 resource 目录

-   Js、less 和 shtml，都以页面模块名为命名 `例：产品列表 product_list.less`

-   resource 中存放当前页面模块所引用的资源，其中包括各类型图片(jpg、png、gif、svg)，媒体文件(mp4、mov、m3u8)

-   public 目录中只能存放公用资源，包括公用 js、公用 less、公用头尾和头尾资源的 shtml 以及 resource 中的公用图片以及媒体文件
