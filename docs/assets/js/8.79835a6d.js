(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{825:function(s,a,t){"use strict";t.r(a);var e=t(75),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("为保证多人协作项目的代码统一，以便项目维护，并提高代码可读性。")]),s._v(" "),a("p",[s._v("在脚手架中加入 ESLint、Prettier、husky、lint-staged 、commitlint 来规范代码")]),s._v(" "),a("p",[s._v("通过命令行工具"),a("code",[s._v("corgi")]),s._v("作为启动、构建和站点生成工具")]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("p",[s._v("保证依赖兼容性，基础"),a("code",[s._v("node")]),s._v("版本采用 "),a("code",[s._v("16.13.0")])]),s._v(" "),a("p",[s._v("通过安装"),a("code",[s._v("nvm")]),s._v("切换 "),a("code",[s._v("node")]),s._v(" 版本，来兼容历史项目")]),s._v(" "),a("p",[s._v("包地址：https://github.com/coreybutler/nvm-windows/releases")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node.Verison"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nnvm use "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node.Verison"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("安装"),a("code",[s._v("nrm")]),s._v("源切换工具和"),a("code",[s._v("pnpm")]),s._v("包管理工具")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" nrm //安装源切换工具\nnrm use taobao //切换至taobaoi源\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" //全局安装pnpm包管理\n")])])]),a("p",[s._v("进入根目录后执行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h2",{attrs:{id:"开发流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[s._v("#")]),s._v(" 开发流程")]),s._v(" "),a("h3",{attrs:{id:"本地启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地启动"}},[s._v("#")]),s._v(" 本地启动")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("corgi")]),s._v(" 启动 http 静态资源服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# corgi start <siteName>")]),s._v("\ncorgi start example\n")])])]),a("h3",{attrs:{id:"构建打包方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建打包方式"}},[s._v("#")]),s._v(" 构建打包方式")]),s._v(" "),a("p",[s._v("打包成功后会在相应项目中生成 build 目录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试打包")]),s._v("\ncorgi build "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("siteName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--env")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生产打包")]),s._v("\ncorgi build "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("siteName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--env")]),s._v(" pro\n")])])]),a("h3",{attrs:{id:"自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署"}},[s._v("#")]),s._v(" 自动化部署")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("jenkins")]),s._v("脚本处直接调用")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试")]),s._v("\ncorgi push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--env")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生产")]),s._v("\ncorgi push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--env")]),s._v(" pro\n")])])]),a("h2",{attrs:{id:"使用规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用规范"}},[s._v("#")]),s._v(" 使用规范")]),s._v(" "),a("h3",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[s._v("#")]),s._v(" 分支管理")]),s._v(" "),a("p",[s._v("从 "),a("code",[s._v("dev")]),s._v(" 分支切出新分支，命名方式如下")]),s._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("# 开发人员姓名_任务模块名_当前日期\n# jinyuxi_productlist_20230101\n")])])]),a("h3",{attrs:{id:"提交规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交规则"}},[s._v("#")]),s._v(" 提交规则")]),s._v(" "),a("p",[s._v("为提高项目维护质量，需按要求提交 "),a("code",[s._v("commit")]),s._v(" 信息")]),s._v(" "),a("p",[s._v("可用的"),a("code",[s._v("type-name")]),s._v("列表")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("feat")]),s._v(" 增加新功能")]),s._v(" "),a("li",[a("code",[s._v("fix")]),s._v(" 修复问题/BUG")]),s._v(" "),a("li",[a("code",[s._v("style")]),s._v(" 代码风格相关无影响运行结果的")]),s._v(" "),a("li",[a("code",[s._v("perf")]),s._v(" 优化/性能提升")]),s._v(" "),a("li",[a("code",[s._v("refactor")]),s._v(" 重构")]),s._v(" "),a("li",[a("code",[s._v("revert")]),s._v(" 撤销修改")]),s._v(" "),a("li",[a("code",[s._v("docs")]),s._v(" 文档/注释")]),s._v(" "),a("li",[a("code",[s._v("chore")]),s._v(" 依赖更新/脚手架配置修改等")]),s._v(" "),a("li",[a("code",[s._v("wip")]),s._v(" 开发中")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[type-name]: [subject-name]"')]),s._v("\n")])])]),a("h3",{attrs:{id:"h5-命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5-命名规范"}},[s._v("#")]),s._v(" H5 命名规范")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("页面模块名即目录名，语义化命名 "),a("code",[s._v("例：产品列表 product_list")]),s._v("，当前页面模块中只能存在 js、less、shtml 文件以及 resource 目录")])]),s._v(" "),a("li",[a("p",[s._v("Js、less 和 shtml，都以页面模块名为命名 "),a("code",[s._v("例：产品列表 product_list.less")])])]),s._v(" "),a("li",[a("p",[s._v("resource 中存放当前页面模块所引用的资源，其中包括各类型图片(jpg、png、gif、svg)，媒体文件(mp4、mov、m3u8)")])]),s._v(" "),a("li",[a("p",[s._v("public 目录中只能存放公用资源，包括公用 js、公用 less、公用头尾和头尾资源的 shtml 以及 resource 中的公用图片以及媒体文件")])])]),s._v(" "),a("h3",{attrs:{id:"vue-命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-命名规范"}},[s._v("#")]),s._v(" Vue 命名规范")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("页面模块名即目录名，语义化命名 "),a("code",[s._v("例：产品列表 product_list")]),s._v("，当前页面模块中只能存在 js、less、shtml 文件以及 resource 目录")])]),s._v(" "),a("li",[a("p",[s._v("Js、less 和 shtml，都以页面模块名为命名 "),a("code",[s._v("例：产品列表 product_list.less")])])]),s._v(" "),a("li",[a("p",[s._v("resource 中存放当前页面模块所引用的资源，其中包括各类型图片(jpg、png、gif、svg)，媒体文件(mp4、mov、m3u8)")])]),s._v(" "),a("li",[a("p",[s._v("public 目录中只能存放公用资源，包括公用 js、公用 less、公用头尾和头尾资源的 shtml 以及 resource 中的公用图片以及媒体文件")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);