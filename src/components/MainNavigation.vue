<template>
  <nav class="flex justify-between py-3 px-6 items-center relative">
    <img class="w-44" src="../assets/logo.png" alt="">
    <div class="flex gap-6">
      <RouterLink class="text-gray-500" to="/">Home</RouterLink>
      <RouterLink class="text-gray-500" to="">Pages</RouterLink>
      <RouterLink class="text-gray-500" to="">Movies & TV Shows</RouterLink>
      <RouterLink class="text-gray-500" to="">Blog</RouterLink>
      <RouterLink class="text-gray-500" to="">Contact Us</RouterLink>
    </div>
    <div class="flex gap-9 items-center">
      <button type="button" @click="showSearchBar = true">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
      <a href="#">
        <font-awesome-icon :icon="['fas', 'earth-europe']" />
      </a>
      <button class="px-4 py-2 bg-purple rounded-md text-white font-semibold flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'user']" />
        Login
      </button>
      <SearchBar :show="showSearchBar" @close="showSearchBar = false"/>
    </div>
  </nav>
</template>

<script lang='ts'>
import SearchBar from './SearchBar.vue';
export default {
  components: { SearchBar },
  data() {
    return {
      showSearchBar: false
    }
  }
}
</script>