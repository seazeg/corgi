---
title: Pkg资源包项目模板
---

## 介绍

用于第三方活动开发，已经集成海尔官网公用部分，可本地预览开发。

## 项目结构

```bash
├─ projects                                         # 项目根目录
   └─ pkg                                           # 资源包目录
      ├─ config.json                                # 站点配置文件
      └─ src                                        # 开发目录
         ├─ libs                                    # 类库资源
         └─ pages
            └─ demo                                 # 页面模块
                ├─ demo.js                          # 页面js
                ├─ demo.less                        # 页面样式
                ├─ demo.shtml                       # 页面html
                └─ resourse                         # 资源目录

```

## 常用命令

```bash
# 依赖安装
pnpm install

# 本地http启动，预览开发
corgi start pkg

# eslint
pnpm lint

# stylelint
pnpm stylelint
```

```bash
#本地打包 生产prod/测试test环境
corgi build pkg --env test
corgi build pkg --env prod
```

::: tip 生成的 dist 目录可直接打包上传
