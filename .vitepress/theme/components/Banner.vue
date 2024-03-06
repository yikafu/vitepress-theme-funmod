<template>
  <div class="banner">
    <div class="info">
      <span>
        <p class="text">Hello World</p>
      </span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.banner {
  height: 100vh;
  background: url('/public/bg.jpg') center center / cover no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
}
.info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

@media (max-width: 1280px) {
  .banner {
    height: 50vh;
    position: relative;
    overflow: hidden;
    display: flex;
  }
}
</style>
