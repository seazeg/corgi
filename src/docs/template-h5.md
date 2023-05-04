---
title: H5项目模板
---

## 介绍

基于 gulp 的 H5 项目脚手架

## 项目结构

```bash
├─ .eslintrc.js                                     # eslint配置
├─ .gitignore                                       # git排除设置
├─ .prettierignore                                  # prettier排除设置
├─ .prettierrc                                      # prettier设置
├─ README.md                                        # 说明文档
├─ package.json
├─ pnpm-lock.yaml
└─ projects                                         # 项目总目录
   └─ example                                       # 站点目录
      ├─ config.json                                # 站点配置文件
      └─ src
         ├─ fonts                                   # 字体资源
         ├─ libs                                    # 类库资源
         ├─ pages
         │  ├─ demo                                 # 页面模块
         │  │  ├─ demo.js
         │  │  ├─ demo.less
         │  │  ├─ demo.shtml
         │  │  └─ resourse                           #模块资源目录
         │  └─ public                               # 公用模块
         │     ├─ common.js                         # 公用js
         │     ├─ common.less                       # 公用样式
         │     ├─ foot.shtml                        # 底部资源文件
         │     ├─ footer.shtml                      # 公用底部
         │     ├─ head.shtml                        # 头部资源文件
         │     ├─ header.shtml                      # 公用头部
         │     └─ resourse                          # 模块资源目录
         ├─ shredder #碎片
         └─ template #模板

```

## 常用命令

```bash
# 依赖安装
pnpm install

# 本地http启动
corgi start <siteName>

# 本地打包
corgi build <siteName>

# eslint
pnpm lint

# stylelint
pnpm stylelint

```

## 默认类库说明

| 模块             | 功能介绍                                   | 备注                                                                           |
| ---------------- | ------------------------------------------ | ------------------------------------------------------------------------------ |
| hopeUI           | 公司内部前端页面 UI 库，包含常用大多数组件 | API 文档地址：[http://seazeg.gitee.io/hopeui/](http://seazeg.gitee.io/hopeui/) |
| jQuery           | JavaScript 库                              | 根据业务情况取舍版本                                                           |
| videojs          | 常用视频组件                               | 根据业务情况取舍版本                                                           |
| ajax.interceptor | csrf 拦截组件器                            |                                                                                |
| trs_spm          | spm 插件                                   |                                                                                |
| pro_exposure     | 产品曝光插件                               |                                                                                |
| jsmpeg           | 视频组件                                   | 适用于背景视频 video 转 canvas                                                 |
| clipboard        | 复制内容到剪贴板组件                       |                                                                                |
| checkPageNested  | 当页面被第三方嵌套时的弹层提示件           | by:孙永花                                                                      |
