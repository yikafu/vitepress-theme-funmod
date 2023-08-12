<template>
  <div class="toclist">
    <ol>
      <li v-for="i in tocdata" :key="i">
        <a
          class="h2"
          v-if="i.tag === 'H2'"
          :href="i.href"
          :id="i.number"
          @click="activeLabel($event)"
          >{{ i.name }}</a
        >
        <a
          class="h3"
          v-else-if="i.tag === 'H3'"
          :href="i.href"
          :id="i.number"
          style="display: none"
          >{{ i.name }}</a
        >
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  setup() {
    function activeLabel(e) {
      let active = "#" + e.target.id;
      document.querySelectorAll("li").forEach((item) => {
        item.classList.remove('active');
      });
      e.target.parentElement.classList.add('active');
      document.querySelectorAll("a.h3").forEach((item) => {
        item.style.display = "none";
      });
      const all = document.querySelectorAll(active);
      all.forEach((item) => {
        item.style.display = "block";
      });
      }
    return {
      activeLabel,
    };
  },
  props: {
    tocdata: {
      type: Array,
    },
  },
};
</script>

<style scoped>
div.toclist {
  overflow: auto;
}

ol {
  position: sticky;
  top: 80px;
  list-style: none;
  padding-inline-start: 0;
}

li {
  border-left: 3px solid var(--bg-color);
  transition: border-left .3s cubic-bezier(.645,.045,.355,1);
}

li.active {
  border-left: 3px solid var(--main-color);
}

a {
  display: block;
  color: var(--color-text);
  padding-bottom: 0.2em;
}

.h2 {
  padding-left: 8px;
}

.h3 {
  display: block;
  padding-left: 20px;
}
@media (max-width: 1280px) {
  .toc {
    display: none;
  }
}
</style>
