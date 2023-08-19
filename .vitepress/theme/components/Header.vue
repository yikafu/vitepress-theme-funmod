<template>
  <header>
    <span class="brand"></span>
    <span class="container">
      <ul class="menu">
        <li>
          <a id="goHome" href="/">
            <i class="fa-solid fa-home"></i>
            主页
          </a>
        </li>
        <li>
          <a id="goArchive" href="/archive/">
            <i class="fa-solid fa-file"></i>
            归档
          </a>
        </li>
        <li>
          <a id="goTags" href="/tags/">
            <i class="fa-solid fa-tag"></i>
            标签
          </a>
        </li>
      </ul>
    </span>
  </header>
</template>

<script setup>
function showTocList() {
  let isshow = document.getElementsByClassName("toclist toc")[0];
  if (isshow.style.display === "block") {
    isshow.style.display = "none";
  } else {
    isshow.style.display = "block";
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 毛玻璃半透明效果 */
  background-color: rgba(45, 73, 90, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 100;
}
.container {
  margin: 0 auto;
}
ul.menu li {
  display: inline-block;
  margin: 0 10px;
  list-style: none;
}
</style>
