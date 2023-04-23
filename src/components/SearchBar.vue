<template>
  <div class="search-bar flex items-center bg-white" :class="{ 'search-bar--show': show }"
    :style="{ visibility: show ? 'visible' : 'hidden' }">
    <form @submit.prevent="submit">
      <input type="text" ref="input" :value="movies.searchQuery" placeholder="Type and hit enter...">
    </form>
    <button type="button" @click="$emit('close')" class="pr-5">
      <font-awesome-icon size="lg" :icon="['fas', 'xmark']" />
    </button>
  </div>
</template>

<script lang='ts'>
import { movies } from '@/stores/movies';
import { ref } from 'vue';

export default {
  setup() {
    const input = ref<HTMLInputElement>();
    return {
      input
    }
  },
  props: {
    show: Boolean
  },
  emits: ['close'],
  data() {
    return {
      movies
    }
  },
  methods: {
    submit() {
      if (!this.input) return;
      const query = this.input?.value
      if (query.length === 0) return;
      this.movies.loading = true
      this.movies.searchQuery = query
      this.$router.push({query: {q: query}})
      this.$axios({
        url: 'search/movie',
        params: {
          api_key: this.apiKey,
          language: this.language,
          query,
          page: this.movies.currentPage
        }
      })
      .then(response => {
        this.movies.movies = response.data.results
        this.movies.totalPages = response.data.total_pages
        this.movies.loading = false
      })
      .catch(err => {
        this.movies.loading = false
      })
      this.$emit('close');
    },
  }
}
</script>

<style scoped lang="scss">
.search-bar {
  position: absolute;
  inset: 0;
  z-index: 1000;
  color: #666;
  opacity: 0;
  transition: all .3s;

  &--show {
    opacity: 1;
  }

  form,
  input {
    width: 100%;
    height: 100%;
  }

  input {
    padding: 1rem;
    font-size: 1.3rem;

    &:focus-visible {
      outline: none;
    }
  }
}</style>