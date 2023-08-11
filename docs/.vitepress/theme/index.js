// .vitepress/theme/index.js
// 自定义组件
import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import BlogList from "./components/BlogList.vue";
import Archive from "./components/Archive.vue";
import Tags from "./components/Tags.vue";
import MDPost from "./components/MDPost.vue";
import "./css/custom.css";



export default {
  Layout,
  // 注册全局组件
  enhanceApp({ app }) {
    app.component('Banner', Banner),
    app.component('Header', Header),
    app.component('BlogList', BlogList),
    app.component('Archive', Archive),
    app.component('Tags', Tags),
    app.component('MDPost', MDPost)
  }
};