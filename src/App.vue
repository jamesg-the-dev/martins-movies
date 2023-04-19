<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNavigation from './components/MainNavigation.vue';
</script>

<template>
  <header>
    <MainNavigation/>
  </header>

  <RouterView />
</template>