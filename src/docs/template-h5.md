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
         │  │  └─ resourse                            #模块资源目录
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

