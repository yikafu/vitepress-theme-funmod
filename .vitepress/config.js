import { defineConfigWithTheme } from "vitepress";

export default defineConfigWithTheme({
  title: "MyBlog", // 网站的标题
  base: "/",
  lang: "zh-CN", // 语言
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;900&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Space+Mono",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&display=swap",
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    search: {
      provider: "local"
    },
    // 打包配置(输出目录)
    outDir: "../dist",
  },
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#",
    },
  },
});
