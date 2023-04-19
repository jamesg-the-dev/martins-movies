<template>
  <nav class="flex justify-between py-3 px-6 items-center">
    <img class="w-44" src="../assets/logo.png" alt="">
    <div class="flex gap-6">
      <RouterLink class="text-gray-500" to="">Home</RouterLink>
      <RouterLink class="text-gray-500" to="">Pages</RouterLink>
      <RouterLink class="text-gray-500" to="">Movies & TV Shows</RouterLink>
      <RouterLink class="text-gray-500" to="">Blog</RouterLink>
      <RouterLink class="text-gray-500" to="">Contact Us</RouterLink>
    </div>
    <div class="flex gap-9 items-center">
      <!-- search -->
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      <font-awesome-icon :icon="['fas', 'earth-europe']" />
      <button class="px-4 py-2 bg-purple rounded-md text-white font-semibold flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'user']" />
        Login
      </button>
    </div>
  </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>