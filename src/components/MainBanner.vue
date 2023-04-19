<template>
  <section class="py-11 main-banner relative text-white">
    <div class="main-container z-10 relative">
      <div class="text-4xl">{{ title }}</div>
      <ol class="flex list-none">
        <li class="py-2" v-for="(crumb, i) in breadcrumbs" :key="i"><span v-if="i > 0" class="px-4">|</span>
          <RouterLink to="" v-if="i !== breadcrumbs.length - 1">
            {{ crumb }}
          </RouterLink>
          <span class="opacity-60" v-else>
            {{ crumb }}
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>

<script lang='ts'>
import { RouterLink } from 'vue-router';

export default {
  props: {
    title: String
  },
  computed: {
    breadcrumbs() {
      return this.$route.meta.breadcrumbs;
    }
  },
  components: { RouterLink }
}
</script>

<style lang="scss" scoped>
.main-banner {
  background: url('../assets/banner.jpg');

  &::after {
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    opacity: .6;
    width: 100%;
    display: block;
    position: absolute;
    background: linear-gradient(to bottom, #a11f3c 0%, #9352b3 100%);
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .7;
  }
}
</style>