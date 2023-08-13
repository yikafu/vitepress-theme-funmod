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
  background: url('https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/p9/wallhaven-p97l5e.png?w=2560&h=1440&fmt=webp') no-repeat center center;
  /* background: #000000; */
  background-size: cover;
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
</style>
