(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{828:function(t,e,a){"use strict";a.r(e);var s=a(75),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("为保证多人协作项目的代码统一，以便项目维护，并提高代码可读性。")]),t._v(" "),e("p",[t._v("在脚手架中加入 "),e("code",[t._v("ESLint、Prettier、husky、lint-staged 、commitlint")]),t._v(" 来规范代码")]),t._v(" "),e("p",[t._v("通过命令行工具"),e("code",[t._v("corgi")]),t._v("作为启动、构建和站点生成工具")]),t._v(" "),e("h2",{attrs:{id:"环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("nvm")]),t._v("安装和切换指定 "),e("code",[t._v("node")]),t._v(" 版本")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("保证依赖兼容性，基础"),e("code",[t._v("node")]),t._v("版本采用 "),e("code",[t._v("16.19.1")]),t._v("，\n通过安装"),e("code",[t._v("nvm")]),t._v("切换 "),e("code",[t._v("node")]),t._v(" 版本来兼容历史项目")]),t._v(" "),e("p",[t._v("包地址："),e("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm 安装包-windows"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("nvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("node.Verison"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nnvm use "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("node.Verison"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("安装"),e("code",[t._v("nrm")]),t._v("源切换工具")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("nrm 安装完成后，可能会出现 open 依赖未找到问题，需要再次执行"),e("code",[t._v("npm install -g nrm open@8.4.2 -save")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装源切换工具")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" nrm\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换至taobaoi源")]),t._v("\nnrm use taobao\n")])])]),e("p",[t._v("安装"),e("code",[t._v("pnpm")]),t._v("包管理工具")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局安装pnpm包管理")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v("\n")])])]),e("p",[t._v("安装"),e("code",[t._v("corgi")]),t._v("集中管理工具")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局安装pnpm包管理")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" corgi-biu\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级方式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" update "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" corgi-biu\n")])])]),e("h2",{attrs:{id:"工具配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具配置"}},[t._v("#")]),t._v(" 工具配置")]),t._v(" "),e("p",[t._v("使用的 IDE 是"),e("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode"),e("OutboundLink")],1),t._v("，以下插件根据实际情况安装")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=antfu.iconify",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iconify IntelliSense"),e("OutboundLink")],1),t._v(" - Iconify 图标插件")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense",target:"_blank",rel:"noopener noreferrer"}},[t._v("windicss IntelliSense"),e("OutboundLink")],1),t._v(" - windicss 提示插件")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally",target:"_blank",rel:"noopener noreferrer"}},[t._v("I18n-ally"),e("OutboundLink")],1),t._v(" - i18n 插件")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vetur"),e("OutboundLink")],1),t._v(" - vue 开发必备 （也可以选择 Volar）")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),e("OutboundLink")],1),t._v(" - 脚本代码检查")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),e("OutboundLink")],1),t._v(" - 代码格式化")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stylelint"),e("OutboundLink")],1),t._v(" - css 格式化")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv",target:"_blank",rel:"noopener noreferrer"}},[t._v("DotENV"),e("OutboundLink")],1),t._v(" - .env 文件 高亮")])]),t._v(" "),e("h2",{attrs:{id:"开发流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[t._v("#")]),t._v(" 开发流程")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/lc.jpeg"),alt:"mixureSecure"}}),t._v(" "),e("ul",[e("li",[e("code",[t._v("git clone")]),t._v("项目到本地或利用"),e("code",[t._v("corgi")]),t._v("初始化环境")]),t._v(" "),e("li",[t._v("由本项目静态页开发负责人，从"),e("code",[t._v("dev")]),t._v("分支新建一个中心分支（命名规则：项目名"),e("em",[t._v("core")]),t._v("日期），并将当前项目的所用公用资源以及页面全部部署完成（"),e("code",[t._v("初始新项目要求，否则直接进入下一步")]),t._v("）")]),t._v(" "),e("li",[t._v("项目组其他成员从核心分支新建各自分支，随后自行开发")]),t._v(" "),e("li",[t._v("如果核心分支有公共资源调整，及时告知组员，用各自分支对中心分支进行"),e("code",[t._v("merge")]),t._v("合并")]),t._v(" "),e("li",[t._v("各自分支"),e("code",[t._v("merge")]),t._v("到"),e("code",[t._v("test")]),t._v("分支，进行测试环境上的测试")]),t._v(" "),e("li",[t._v("上线前，所有人的分支全部"),e("code",[t._v("merge")]),t._v("到核心分支，然后统一由静态页开发负责人提交核心分支"),e("code",[t._v("merge")]),t._v("到"),e("code",[t._v("dev")]),t._v("的合并请求到项目经理，然后由项目经理合并到"),e("code",[t._v("master")]),t._v("分支")])]),t._v(" "),e("h3",{attrs:{id:"本地启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地启动"}},[t._v("#")]),t._v(" 本地启动")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("corgi")]),t._v(" 启动 http 静态资源服务")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基本格式")]),t._v("\ncorgi start "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("siteName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子")]),t._v("\ncorgi start example\n")])])]),e("h3",{attrs:{id:"构建打包方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建打包方式"}},[t._v("#")]),t._v(" 构建打包方式")]),t._v(" "),e("p",[t._v("打包成功后会在相应项目中生成 build 目录")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试打包")]),t._v("\ncorgi build "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("siteName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--env")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生产打包")]),t._v("\ncorgi build "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("siteName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--env")]),t._v(" prod\n")])])]),e("h3",{attrs:{id:"自动化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署"}},[t._v("#")]),t._v(" 自动化部署")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("jenkins")]),t._v("脚本处直接调用")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试")]),t._v("\ncorgi push "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--env")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生产")]),t._v("\ncorgi push "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--env")]),t._v(" prod\n")])])]),e("h2",{attrs:{id:"使用规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用规范"}},[t._v("#")]),t._v(" 使用规范")]),t._v(" "),e("h3",{attrs:{id:"分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),e("p",[t._v("从 "),e("code",[t._v("dev")]),t._v(" 分支切出新分支，命名方式如下")]),t._v(" "),e("div",{staticClass:"language-txt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[t._v("# 开发人员姓名_任务模块名_当前日期\n# jinyuxi_productlist_20230101\n")])])]),e("h3",{attrs:{id:"提交规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交规则"}},[t._v("#")]),t._v(" 提交规则")]),t._v(" "),e("p",[t._v("为提高项目维护质量，需按要求提交 "),e("code",[t._v("commit")]),t._v(" 信息")]),t._v(" "),e("p",[t._v("可用的"),e("code",[t._v("type-name")]),t._v("列表")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("feat")]),t._v(" 增加新功能")]),t._v(" "),e("li",[e("code",[t._v("fix")]),t._v(" 修复问题/BUG")]),t._v(" "),e("li",[e("code",[t._v("style")]),t._v(" 代码风格相关无影响运行结果的")]),t._v(" "),e("li",[e("code",[t._v("perf")]),t._v(" 优化/性能提升")]),t._v(" "),e("li",[e("code",[t._v("refactor")]),t._v(" 重构")]),t._v(" "),e("li",[e("code",[t._v("revert")]),t._v(" 撤销修改")]),t._v(" "),e("li",[e("code",[t._v("docs")]),t._v(" 文档/注释")]),t._v(" "),e("li",[e("code",[t._v("chore")]),t._v(" 依赖更新/脚手架配置修改等")]),t._v(" "),e("li",[e("code",[t._v("wip")]),t._v(" 开发中")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基本格式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<type-name>: <subject-name>"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feat: 新增产品列表页相关模块"')]),t._v("\n\n")])])]),e("h3",{attrs:{id:"h5-命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h5-命名规范"}},[t._v("#")]),t._v(" H5 命名规范")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("页面模块名即目录名，语义化命名 "),e("code",[t._v("例：产品列表 product_list")]),t._v("，当前页面模块中只能存在 js、less、shtml 文件以及 resource 目录")])]),t._v(" "),e("li",[e("p",[t._v("Js、less 和 shtml，都以页面模块名为命名 "),e("code",[t._v("例：产品列表 product_list.less")])])]),t._v(" "),e("li",[e("p",[t._v("resource 中存放当前页面模块所引用的资源，其中包括各类型图片(jpg、png、gif、svg)，媒体文件(mp4、mov、m3u8)")])]),t._v(" "),e("li",[e("p",[t._v("public 目录中只能存放公用资源，包括公用 js、公用 less、公用头尾和头尾资源的 shtml 以及 resource 中的公用图片以及媒体文件\nd")])]),t._v(" "),e("li",[e("p",[t._v("待补充")])])]),t._v(" "),e("h3",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("当定义全局变量在公用 js，并且这个变量会在某些 js 中使用，或者一些第三方插件变量的初始化，会导致"),e("code",[t._v("eslint")]),t._v(" 会提示 "),e("code",[t._v("not defined")]),t._v("错误")]),t._v(" "),e("p",[t._v("解决方案：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1.将变量放到`common.js`中的`interfaceMap`中做统一管理\n\n2.将第三方插件变量在 eslintrc.js 的 global 中加入\n")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);