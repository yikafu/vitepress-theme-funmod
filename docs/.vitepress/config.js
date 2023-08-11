import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  title: "自定义的 title", // 网站的标题
  lang: "zh-CN", // 语言
  head: [
    ['link',{ rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;900&display=swap"}],
    ['link',{ rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Space+Mono"}],
    ['link',{ rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&display=swap"}],
  ],
  // 主题配置
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/22140988?s=200&v=4", // 网站logo
    search: {
      provider: "local",
    },
    // 打包配置(输出目录)
    outDir: "../dist",
  },
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    }
  },
});
