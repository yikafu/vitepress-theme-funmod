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

<script setup></script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
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
