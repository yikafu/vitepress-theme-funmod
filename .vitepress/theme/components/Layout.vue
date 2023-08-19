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
import { computed} from "vue";
import { useRoute , useData} from "vitepress";
import { data as alldata } from "../../post.data.js";

const route = useRoute();
const { page, frontmatter } = useData()
const path = computed(() => route.path.replace('index.html', ''))
const yearData = alldata.yearData;
const tagData = alldata.tagData;

</script>