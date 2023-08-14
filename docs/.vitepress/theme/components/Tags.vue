<template>
  <div>
    <h1 class="tags-title">{{ st ? st : "标签" }}</h1>
    <div class="tags-box" v-if="!isshow">
      <a href="#" v-for="t in tagdata" :key="t.id">
          <span @click="setTag(t)">{{ t }}</span>
      </a>
    </div>
    <BlogList v-if="isshow" :tag="st" />
  </div>
</template>

<script setup>
import { ref , onMounted, onUnmounted } from "vue";

const st = ref(null)
const isshow = ref(false)
const props = defineProps({
  tagdata: {
    type: Array,
    default: () => {},
  },
});

function start() {
  st.value = new URLSearchParams(location.search).get('q')
  if(st.value){
    isshow.value = true
  }
}

function setTag(tag) {
  st.value = tag
  isshow.value = true
  history.replaceState(null, document.title, '?q=' + tag)
}

function setGoTags(){
  document.getElementById("goTags").onclick = function(){
    st.value = null
    isshow.value = false
  }
}

onMounted(() => {
  start()
  setGoTags()
})

onUnmounted(() => {
  start()
  setGoTags()
})

</script>s

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
  color: var(--light-color);
  border-color: var(--light-color);
}

</style>
