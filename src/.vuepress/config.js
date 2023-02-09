/*
 * @Author       : Evan.G
 * @Date         : 2023-02-09 14:51:20
 * @LastEditTime : 2023-02-09 17:22:17
 * @Description  :
 */
const path = require("path");
const moment = require("moment");

function resolve(dir) {
  return path.join(__dirname, "../../", dir);
}

module.exports = {
  title: "Corgi Integration",
  description: "集中化工具文档库",
  base: "/",
  head: [["link", { rel: "icon", href: "/corgi.svg" }]],
  dest: "./dist",
  port: 9901,
  theme: "antdocs",
  themeConfig: {
    logo: "/corgi.svg",
    // 顶部导航栏配置
    nav: [
      { text: "主页", link: "/" },
      { text: "使用说明", link: "/guide/introduction" },
      { text: "Corgi", link: "/docs/corgi-core" },
      { text: "H5脚手架", link: "/docs/template-h5" },
      { text: "Vue脚手架", link: "/docs/template-vue" },
      { text: "开发说明", link: "/docs/specification" },
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
          path: "corgi-core",
        },
        {
          title: "H5模板",
          path: "template-h5",
        },
        {
          title: "Vue模板",
          path: "template-vue",
        },
        {
          title: "开发说明",
          path: "specification",
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
