/*
 * @Author       : Evan.G
 * @Date         : 2023-02-09 14:51:20
 * @LastEditTime : 2023-02-09 15:14:56
 * @Description  : 
 */
const path = require('path')
const moment = require('moment')

function resolve (dir) {
  return path.join(__dirname, '../../', dir)
}

module.exports = {
  title: "Web Infrastructure",
  description:
    "前端基础建设文档库，包含中后台前端脚手架、组件库、后端脚手架等。",
  base: "/",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  dest: "./dist",
  port: 9901,
  theme: "antdocs",
  themeConfig: {
    logo: "/favicon.svg",
    // 顶部导航栏配置
    nav: [
      { text: "主页", link: "/" },
      { text: "使用说明", link: "/guide/introduction" },
      { text: "Corgi", link: "/docs/wy-cli" },
      { text: "H5模板", link: "/docs/template-vue2-manage" },
      { text: "Vue模板", link: "/docs/template-node-egg" },
      { text: "组件库", link: "/components/quick-start" },
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
          title: "Corgi",
          path: "wy-cli",
        },
        {
          title: "H5模板",
          path: "template-node-egg",
        },
        {
          title: "Vue模板",
          path: "template-node-cli",
        },
        {
          title: "开发规范",
          path: "v2-style-guide",
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
