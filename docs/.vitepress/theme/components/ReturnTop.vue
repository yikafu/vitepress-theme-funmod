<template>
  <a href="#" class="returntop" @click="returntop()">
    <span>返回頂部</span>
  </a>
</template>

<script setup>

function returntop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    document.querySelector(".returntop").style.display = "block";
  } else {
    document.querySelector(".returntop").style.display = "none";
  }
});
</script>

<style>
.returntop {
  position: fixed;
  right: 190px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border: 2px solid #a29daa;
  border-radius: 10%;
  z-index: 999;
  display: none;
}
.returntop span {
  position: absolute;
  color: #a29daa;
  text-align: center;
}
@media (max-width: 1280px) {
  .returntop {
    display: none;
  }
}
</style>
