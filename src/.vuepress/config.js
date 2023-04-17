/*
 * @Author       : Evan.G
 * @Date         : 2023-02-09 14:51:20
 * @LastEditTime : 2023-04-17 11:05:38
 * @Description  :
 */
const path = require("path");
const moment = require("moment");

function resolve(dir) {
    return path.join(__dirname, "../../", dir);
}

function createVueSidebar() {
    return [
        {
            title: "指南",
            children: [
                {
                    title: "开始",
                    path: "/docs/template-vue/guide/",
                },
                {
                    title: "项目配置",
                    path: "/docs/template-vue/guide/settings",
                },
                {
                    title: "路由",
                    path: "/docs/template-vue/guide/router",
                },
                {
                    title: "菜单",
                    path: "/docs/template-vue/guide/menu",
                },
                {
                    title: "权限",
                    path: "/docs/template-vue/guide/auth",
                },
                {
                    title: "Mock&联调",
                    path: "/docs/template-vue/guide/mock",
                },
                {
                    title: "组件注册",
                    path: "/docs/template-vue/guide/component",
                },
                {
                    title: "样式",
                    path: "/docs/template-vue/guide/design",
                },
                {
                    title: "构建&部署",
                    path: "/docs/template-vue/guide/deploy",
                },
            ],
        },
        {
            title: "深入",
            children: [
                {
                    title: "跨域处理",
                    path: "/docs/template-vue/dep/cors",
                },
                {
                    title: "图标",
                    path: "/docs/template-vue/dep/icon",
                },
                {
                    title: "国际化",
                    path: "/docs/template-vue/dep/i18n",
                },
                {
                    title: "项目规范",
                    path: "/docs/template-vue/dep/lint",
                },
                {
                    title: "黑暗主题",
                    path: "/docs/template-vue/dep/dark",
                },
            ],
        },
        {
            title: "其他",
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                {
                    title: "常见问题",
                    path: "/docs/template-vue/other/faq",
                },
                {
                    title: "常见疑点",
                    path: "/docs/template-vue/other/doubt",
                },
                {
                    title: "测试服务",
                    path: "/docs/template-vue/other/server",
                },
            ],
        },
        // {
        //   title: "组件",
        //   children: [
        //     {
        //       title: "前言",
        //       path: "/docs/template-vue/components/introduction",
        //     },
        //   ],
        // },
        // {
        //   title: "全局组件",
        //   children: [
        //     {
        //       title: "Button",
        //       path: "/docs/template-vue/components/glob/button",
        //     },
        //   ],
        // },
        {
            title: "常用组件",
            children: [
                {
                    title: "Basic",
                    path: "/docs/template-vue/components/basic",
                },
                {
                    title: "Page",
                    path: "/docs/template-vue/components/page",
                },
                {
                    title: "Icon",
                    path: "/docs/template-vue/components/icon",
                },
                {
                    title: "Authority",
                    path: "/docs/template-vue/components/auth",
                },
                {
                    title: "Form",
                    path: "/docs/template-vue/components/form",
                },
                {
                    title: "Table",
                    path: "/docs/template-vue/components/table",
                },
                // {
                //   title: "PopConfirmButton",
                //   path: "/docs/template-vue/components/pop-confirm-button",
                // },
                {
                    title: "CollapseContainer",
                    path: "/docs/template-vue/components/collapse-container",
                },
                {
                    title: "ScrollContainer",
                    path: "/docs/template-vue/components/scroll-container",
                },
                {
                    title: "LazyContainer",
                    path: "/docs/template-vue/components/lazy-container",
                },
                {
                    title: "CodeEditor",
                    path: "/docs/template-vue/components/code-editor",
                },
                {
                    title: "JsonPreview",
                    path: "/docs/template-vue/components/json-preview",
                },
                {
                    title: "CountDown",
                    path: "/docs/template-vue/components/count-down",
                },

                // {
                //   title: "ClickOutSide",
                //   path: "/docs/template-vue/components/click-out-side",
                // },
                {
                    title: "CountTo",
                    path: "/docs/template-vue/components/count-to",
                },
                {
                    title: "Cropper",
                    path: "/docs/template-vue/components/cropper",
                },
                {
                    title: "Description",
                    path: "/docs/template-vue/components/desc",
                },
                {
                    title: "Drawer",
                    path: "/docs/template-vue/components/drawer",
                },
                {
                    title: "Modal",
                    path: "/docs/template-vue/components/modal",
                },
                // {
                //   title: "FlowChart",
                //   path: "/docs/template-vue/components/flow-chart",
                // },
                {
                    title: "Upload",
                    path: "/docs/template-vue/components/upload",
                },
                {
                    title: "Tree",
                    path: "/docs/template-vue/components/tree",
                },
                {
                    title: "Excel",
                    path: "/docs/template-vue/components/excel",
                },
                {
                    title: "Qrcode",
                    path: "/docs/template-vue/components/qrcode",
                },
                {
                    title: "Markdown",
                    path: "/docs/template-vue/components/markdown",
                },
                {
                    title: "Loading",
                    path: "/docs/template-vue/components/loading",
                },
                {
                    title: "Tinymce",
                    path: "/docs/template-vue/components/tinymce",
                },
                // {
                //   title: "Time",
                //   path: "/docs/template-vue/components/time",
                // },
                {
                    title: "StrengthMeter",
                    path: "/docs/template-vue/components/strength-meter",
                },
                // {
                //   title: "Verify",
                //   path: "/docs/template-vue/components/verify",
                // },
                {
                    title: "Transition",
                    path: "/docs/template-vue/components/transition",
                },
                // {
                //   title: "VirtualScroll",
                //   path: "/docs/template-vue/components/virtual-scroll",
                // },
            ],
        },
        // {
        //   title: "函数式组件",
        //   children: [
        //     {
        //       title: "ContextMenu",
        //       path: "/docs/template-vue/components/functional/context-menu",
        //     },
        //     {
        //       title: "Loading",
        //       path: "/docs/template-vue/components/functional/loading",
        //     },
        //   ],
        // },
    ];
}

module.exports = {
    title: "Corgi Integration",
    description: "集中化工具文档库",
    base: "/corgi-instructions/",
    head: [["link", { rel: "icon", href: "/corgi.svg" }]],
    dest: "./docs",
    port: 9901,
    theme: "antdocs",
    themeConfig: {
        logo: "/corgi.svg",
        // 顶部导航栏配置
        nav: [
            { text: "主页", link: "/" },
            { text: "使用说明", link: "/guide/introduction" },
            { text: "开发说明", link: "/docs/specification" },
            { text: "Corgi", link: "/docs/corgi-core" },
            { text: "H5脚手架", link: "/docs/template-h5" },
            // { text: "Vue脚手架", link: "/docs/template-vue" },
            { text: "Vue脚手架", link: "/docs/template-vue/guide/introduction" },
        ],
        // 侧边栏设置
        sidebar: {
            "/guide/": [
                {
                    title: "使用说明",
                    path: "introduction",
                },
            ],
            "/docs/": [
                {
                    title: "开发说明",
                    path: "specification",
                },
                {
                    title: "Corgi",
                    path: "corgi-core",
                    children: [
                        {
                            title: "使用指南",
                            path: "corgi-core",
                        },
                        {
                            title: "部署说明",
                            path: "deployment",
                        },
                    ],
                },
                {
                    title: "H5脚手架",
                    path: "template-h5",
                },
                {
                    title: "Vue脚手架",
                    children: createVueSidebar(),
                },
            ],
        },
        // 将同时提取 markdown 中的 h2、h3 显示在侧边栏上
        sidebarDepth: 2,
        // 上次更新
        lastUpdated: "最后更新时间",
    },
    markdown: {},
    plugins: [
        // 回到顶部插件
        "@vuepress/back-to-top",
        // 图片放大组件
        // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
        // ['@vuepress/medium-zoom', { selector: 'img' }]
        // 最后更新时间
        [
            "@vuepress/last-updated",
            {
                transformer: (timestamp, lang) => {
                    moment.locale(lang);
                    return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
                },
            },
        ],
    ],
    chainWebpack: (config, isServer) => {
        config.resolve.alias.set("@", resolve("src"));
    },
};
