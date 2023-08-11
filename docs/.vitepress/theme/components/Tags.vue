<template>
  <div>
    <h1 class="tags-title">{{ st ? st : "标签" }}</h1>
    <TagList v-if="showTagList" :selectedTag="selectedTag" />
    <BlogList v-if="!showTagList" :tag="st" />
  </div>
</template>

<script>
import TagList from "./TagList.vue";
import { ref , onMounted , onUnmounted} from "vue";

export default {
  name: "Tag",
  components: {
    TagList,
  },
  setup() {
    const st = ref("");
    const showTagList = ref(true);
    function selectedTag(e) {
      st.value = e.target.innerText;
      showTagList.value = false;
    }
    
    onMounted(()=>{
      window.addEventListener("click", goTags);
    })

    onUnmounted(()=>{
      window.removeEventListener("click", goTags);
    })
    
    function goTags(e){
      if (e.target.id === "goTags") {
        st.value = "";
        showTagList.value = true;
      }
    }

    return {
      st,
      selectedTag,
      showTagList,
    };
  },
};
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
</style>
