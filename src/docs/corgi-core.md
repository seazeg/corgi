---
title: WY CLI
---

## 介绍

多模板多功能的集成工具


## 安装

```bash
npm i corgi-biu -g
```

## corgi init

初始化一个工程。目前可选择`H5`和`Vue`两种类型，根据提示选项输出相对应配置的工程目录

目前支持的脚手架模板：

```bash
◯ H5（jQuery + gulp + less + hopeUI）
◯ Vue（Vue.js 3.x + Vue Router + vite + axios + less + pinia + ant-design-vue）
```

- [H5模板使用文档](/docs/template-vue2-manage.html)
- [Vue模板使用文档](/docs/template-node-egg.html)
- [命令行脚手架使用文档](/docs/template-node-cli.html)


## corgi start

启动一个 HTTP 静态资源服务。

```bash
# 指定 项目 目录启动服务（初始化时候目录名）
corgi start <siteName>
```

## corgi build
打包构建代码

```bash
# 指定 项目 目录构建服务（初始化时候目录名）
corgi build <siteName>
```

## corgi push
配合`jenkins`和`git`将改动的内容提交到服务器上

```bash
# 指定 项目 目录推送服务（初始化时候目录名）
corgi push <siteName>
```

## .corgirc
生成的工程中都包含`.corgirc`文件，用来配置当前`corgi`选项

```bash
# mode指定模板模式类型，生成后不要轻易修改
{
    "mode": "h5"
}
```