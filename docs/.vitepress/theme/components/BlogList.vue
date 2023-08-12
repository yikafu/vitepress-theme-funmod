<template>
  <div class="bloglist">
    <!-- 遍历数据生成div -->
    <div v-for="item in postdata" :key="item.id">
      <div class="card" v-if="tag ? (item.tags ?? []).includes(tag) : true">
        <a :href="'/posts/' + item.title + '.html'">
          <div class="post">
            <article>
              <div class="title">{{ item.title }}</div>
              <div class="post-fm">
                <span class="post-time">
                  <i class="fa-solid fa-clock"></i>
                  创建于{{ item.date.split("T")[0] }}
                </span>
                <a :href="`/tags/?tag=${tag}`" v-for="tag in item.tags" :key="tag">
                  <i class="fa-solid fa-tag"></i>
                  {{ tag }}
                </a>
              </div>
            </article>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { data as alldata } from "../../post.data.js";
const postdata = alldata.postData;
const props = defineProps({
  tag: {
    type: String,
  },
})
</script>

<style scoped>
.bloglist {
  max-width: 100%;
  margin: 0 auto;
}

/* 具体盒子样式 */
.card {
  color: var(--text-color);
  max-width: 100%;
  width: 760px;
  height: 220px;
  margin: 20px auto;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 10px;
  box-shadow: 0 1px 15px -5px #00000080;
  transition: box-shadow 0.2s ease, color 0.2s ease;
}
.card:hover {
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);
}

/* ----------------------------------------- */
article {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: color 0.3s ease;
  text-align: center;
}
div.post {
  width: 100%;
  height: 100%;
  padding: 24px;
  position: relative;
}

div.title {
  font-size: 30px;
  font-weight: 600;
}
.post-time {
  font-size: 16px;
  display: inline;
  margin-right: 10px;
}
.post-fm {
  bottom: 24px;
  position: absolute;
}
.post-fm a {
  color: var(--text-color);
  margin-right: 10px;
  margin-top: 10px;
  font-size: 16px;
  transition: color 0.3s ease;
}
.post-fm a:hover {
  color: var(--main-color);
}
</style>
