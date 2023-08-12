<template>
  <Header />
  <ReturnTop />
  <main>
    <template v-if="path === '/'">
      <Banner />
      <BlogList />
    </template>
    <template v-else-if="path === '/archive/'">
      <Archive :yeardata="yearData" />
    </template>
    <template v-else-if="path === '/tags/'">
      <Tags :tagdata="tagData"/>
    </template>
    <NotFound v-else-if="page.isNotFound" />
    <MDPost v-else />
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute , useData} from "vitepress";
import { data as alldata } from "../../post.data.js";

import Header from './Header.vue'
import Banner from './Banner.vue'
import BlogList from "./BlogList.vue";
import Archive from "./Archive.vue";
import Tags from "./Tags.vue";
import MDPost from "./MDPost.vue";
import ReturnTop from "./ReturnTop.vue";
import NotFound from "./NotFound.vue";

const route = useRoute();
const { page, frontmatter } = useData()
const path = computed(() => route.path);
const yearData = alldata.yearData;
const tagData = alldata.tagData;
</script>