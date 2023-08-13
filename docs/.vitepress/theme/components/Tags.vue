<template>
  <div>
    <h1 class="tags-title">{{ st !== 'undefined' ? st : "标签" }}</h1>
    <div class="tags-box" v-if="isshow">
      <a :href="`/tags/?tag=${t}`" v-for="t in tagdata" :key="t.id">
        <span @click="selectedTag()">{{ t }}</span>
      </a>
    </div>
    <BlogList v-if="!isshow" :tag="st" />
  </div>
</template>

<script setup>
import { ref , onMounted, onUnmounted } from "vue";
let query = decodeURI(window.location.href.split('?tag=')[1]);
const st = ref(query)
const isshow = ref(true)
const props = defineProps({
  tagdata: {
    type: Array,
    default: () => {},
  },
});

function selectedTag() {
  let newTag = decodeURI(window.location.href.split('?tag=')[1]);
  if (newTag !== st) {
    st.value = newTag;
  }
  isshow.value = false;
}

function setgoTags(){
  document.getElementById('goTags').onclick = () => {
    isshow.value = true;
    st.value = '标签';
  }
}

onMounted(() => {
  setgoTags()
})

onUnmounted(() => {
  setgoTags()
})
</script>

<style scoped>
.tags-title {
  /* 居中 */
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 160px;
  font-size: 40px;
}
.tags-box {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
a {
  margin: 10px;
  text-decoration: none;
}
span {
  width: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  border: 2px solid #777777;
}

span:hover {
  color: rgb(138, 20, 89);
  border-color: rgb(138, 20, 89);
}
span:active {
  color: rgb(138, 20, 89);
  border-color: rgb(138, 20, 89);
}
</style>
