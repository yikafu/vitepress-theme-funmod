<template>
  <h1 class="archive-title">归档</h1>
  <div class="archive">
    <!-- 遍历yeardata，生成跳转列表 -->
    <ul v-for="(value, key) in yeardata" :key="key">
      <div class="year">{{ key }}</div>
      <li v-for="p in value" :key="p.id">
        <div id="text">
          <a :href="`/posts/${p.name}.html`">
            <span>{{ p.time }}</span>
            {{ p.name }}
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  yeardata: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped>
h1.archive-title {
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 160px;
  font-size: 40px;
}
.archive {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 20px;
}
.archive .year {
  cursor: pointer;
  margin: 0;
  padding: 20px 0;
  font-size: 28px;
  font-weight: 400;
  border-bottom: 1px solid #eee;
}

#text a {
  display: inline-block;
  margin-right: 5px;
  padding: 10px 0;
  font-size: 18px;
  text-decoration: none;
}

#text:hover {
  cursor: pointer;
  box-shadow: var(--main-color) 0px 1px 0px;
  width: 100%;
}

.archive ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.archive ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
