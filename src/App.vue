<template>
  <header>
    <MainNavigation />
  </header>

  <MainBanner :title="$route.meta.title" />

  <main>
  </main>

  <RouterView />

  <MainFooter />
</template>

<script lang="ts">
import MainNavigation from './components/MainNavigation.vue';
import MainFooter from './components/MainFooter.vue';
import MainBanner from './components/MainBanner.vue';
export default {
  components: { MainNavigation, MainFooter, MainBanner }
}
</script>
