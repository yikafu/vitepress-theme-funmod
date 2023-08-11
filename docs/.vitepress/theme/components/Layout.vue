<template>
  <Header />
  <main>
    <template v-if="path === '/'">
      <Banner />
      <BlogList />
    </template>
    <template v-else-if="path === '/archive/'">
      <Archive :yeardata="yearData" />
    </template>
    <template v-else-if="path === '/tags/'">
      <Tags />
    </template>
    <MDPost v-else />
  </main>
</template>

<script setup>
import { computed , provide} from "vue";
import { useRoute } from "vitepress";
import { data as alldata } from "../../post.data.js";

import Header from './Header.vue'
import Banner from './Banner.vue'
import BlogList from "./BlogList.vue";
import Archive from "./Archive.vue";
import Tags from "./Tags.vue";
import MDPost from "./MDPost.vue";

const route = useRoute();
const path = computed(() => route.path);
const postData = alldata.postData;
const yearData = alldata.yearData;
const tagData = alldata.tagData; 

provide("postData", postData);
provide("tagData", tagData);
</script>


