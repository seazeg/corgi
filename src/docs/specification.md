---
title: 开发规范
---

## 介绍

为保证多人协作项目的代码统一，以便项目维护，并提高代码可读性。

在脚手架中加入 `ESLint、Prettier、husky、lint-staged 、commitlint` 来规范代码

通过命令行工具`corgi`作为启动、构建和站点生成工具

## 环境准备

通过`nvm`安装和切换指定 `node` 版本
::: tip 注意

保证依赖兼容性，基础`node`版本采用 `16.19.1`，
通过安装`nvm`切换 `node` 版本来兼容历史项目

包地址：[nvm 安装包-windows](https://github.com/coreybutler/nvm-windows/releases)
:::

```bash
nvm install <node.Verison>
nvm use <node.Verison>
```

安装`nrm`源切换工具
::: tip 注意
nrm 安装完成后，可能会出现 open 依赖未找到问题，需要再次执行`npm install -g nrm open@8.4.2 -save`
:::

```bash
# 安装源切换工具
npm install -g nrm
# 切换至taobaoi源
nrm use taobao
```

安装`pnpm`包管理工具

```bash
# 全局安装pnpm包管理
npm install -g pnpm
```

安装`corgi`集中管理工具

```bash
# 全局安装pnpm包管理
npm install -g corgi-biu
# 升级方式
npm update -g corgi-biu
```

新初始化项目或者`clone`项目后，进入项目中，执行以下命令

```bash
# 安装项目依赖
pnpm install
```

::: tip 注意
依赖安装完成后，必须执行以下命令
:::

```bash
# 部署husky钩子
pnpm husky
```

## 工具配置

使用的 IDE 是[vscode](https://code.visualstudio.com/)，以下插件根据实际情况安装

-   [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
-   [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
-   [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
-   [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备 （也可以选择 Volar）
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
-   [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
-   [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 开发流程

<img :src="$withBase('/lc.jpeg')" alt="mixureSecure">

-   `git clone`项目到本地或利用`corgi`初始化环境
-   由本项目静态页开发负责人，从`dev`分支新建一个中心分支（命名规则：项目名*core*日期），并将当前项目的所用公用资源以及页面全部部署完成（`初始新项目要求，否则直接进入下一步`）
-   项目组其他成员从核心分支新建各自分支，随后自行开发
-   如果核心分支有公共资源调整，及时告知组员，用各自分支对中心分支进行`merge`合并
-   各自分支`merge`到`test`分支，进行测试环境上的测试
-   上线前，所有人的分支全部`merge`到核心分支，然后统一由静态页开发负责人提交核心分支`merge`到`dev`的合并请求到项目经理，然后由项目经理合并到`master`分支

### 本地启动

通过 `corgi` 启动 http 静态资源服务

```bash
# 基本格式
corgi start <siteName>
# 例子
corgi start example
```

### 构建打包方式

打包成功后会在相应项目中生成 build 目录

```bash
# 测试打包
corgi build <siteName> --env test
# 生产打包
corgi build <siteName> --env prod
```

### 自动化部署

在`jenkins`脚本处直接调用

```bash
# 测试
corgi push --env test
# 生产
corgi push --env prod
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
# 基本格式
git commit -m "<type-name>: <subject-name>"
# 例子
git commit -m "feat: 新增产品列表页相关模块"

```

### H5 命名规范

-   页面模块名即目录名，语义化命名 `例：产品列表 product_list`，当前页面模块中只能存在 js、less、shtml 文件以及 resource 目录

-   Js、less 和 shtml，都以页面模块名为命名 `例：产品列表 product_list.less`

-   resource 中存放当前页面模块所引用的资源，其中包括各类型图片(jpg、png、gif、svg)，媒体文件(mp4、mov、m3u8)

-   public 目录中只能存放公用资源，包括公用 js、公用 less、公用头尾和头尾资源的 shtml 以及 resource 中的公用图片以及媒体文件
    d

-   待补充

### 注意事项

::: tip 注意
当定义全局变量在公用 js，并且这个变量会在某些 js 中使用，或者一些第三方插件变量的初始化，会导致`eslint` 会提示 `not defined`错误

解决方案：

    1.将变量放到`common.js`中的`interfaceMap`中做统一管理

    2.将第三方插件变量在 eslintrc.js 的 global 中加入

:::
