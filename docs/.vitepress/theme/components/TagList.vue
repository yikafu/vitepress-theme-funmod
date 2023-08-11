<template>
  <div>
    <a :href="`/tags/?tag=${t}`" v-for="t in tagdatas" :key="t.id">
      <span @click="selectedTag($event)">{{ t }}</span>
    </a>
  </div>
</template>

<script>
import { inject} from "vue";
export default {
  name: "TagList",
  setup() {
    const tagdatas = inject("tagData");
    return {
      tagdatas,
    };
  },
  props: {
    selectedTag: {
      type: Function,
      
    },
  },
};
</script>

<style scoped>
div {
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
  color: #333;
  font-size: 18px;
  border: 2px solid #777777;
}
span:active {
  color: rgb(138, 20, 89);
  border-color: rgb(138, 20, 89);
}
</style>
