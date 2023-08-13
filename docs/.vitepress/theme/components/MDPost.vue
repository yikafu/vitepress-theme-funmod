<template>
  <div class="titlebox">
    <h1 class="title">{{ fm.title }}</h1>
    <div class="info">更新于 {{ fm.date.split("T")[0] }}</div>
  </div>
  <div class="post">
    <p>{{ $frontmatter.description }}</p>
    <Content class="content" />
  </div>
  <Toc class="toc" :tocdata="tocdata" />
</template>

<script>
import { useData, useRoute } from "vitepress";
import Toc from "./Toc.vue";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  components: {
    Toc,
  },
  setup() {
    const data = useData();
    const fm = data.frontmatter.value;
    const tocdata = ref([]);
    let tocTop = 0;

    onMounted(() => {
      tocdata.value = getTocData();
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    function handleScroll() {
      tocTop = document.documentElement.scrollTop;
      const toc = document.querySelector(".toc");
      if (tocTop >= 200) {
        toc.style.position = "fixed";
        toc.style.top = "77px";
      } else {
        toc.style.top = "260px";
        toc.style.position = "absolute";
      }
    }
    function getTocData() {
      let all = document.querySelectorAll("h2 ,h3, h4");
      // 遍历获取innerText
      let num = 0;
      let dataArr = Array.from(all).map((item) => {
        if (item.tagName === "H2") {
          num++;
        }
        const data = {
          tag: item.tagName,
          href: "#" + item.id,
          name: item.innerText.replace(/^#/, ""),
          number: "a" + num,
        };
        return data;
      });
      return dataArr;
    }

    return {
      fm,
      tocdata,
    };
  },
};
</script>

<style scoped>
.post {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}
.toc {
  position: absolute;
  width: 265px;
  height: 100vh;
  top: 260px;
  right: 0px;
  bottom: 0;
}
.titlebox {
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 160px;
  font-size: 40px;
}
.info {
  margin-top: 27px;
  font-size: 1.2rem;
  color: #eee;
}
</style>
