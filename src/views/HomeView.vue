<template>
  <section ref="movieGrid" class="section movie-grid">
    <div class="main-container">
      <div class="flex flex-wrap justify-between items-center mb-12">
        <div class="flex gap-3 basis-1/2">
          <button @click="displayType = 'list'" :class="{ 'bg-purple text-white': displayType === 'list' }"
            class="transition-all duration-300 w-10 h-10 hover:bg-purple hover:text-white rounded-md"><font-awesome-icon
              :icon="['fas', 'list']" /></button>
          <button @click="displayType = 'grid'" :class="{ 'bg-purple text-white': displayType === 'grid' }"
            class="transition-all duration-300 w-10 h-10 hover:bg-purple hover:text-white rounded-md"><font-awesome-icon
              :icon="['fas', 'grip']" /></button>
        </div>
        <div>
          <select>
            <option value="default">Default Order</option>
            <option value="featured">Featured</option>
            <option value="topViewed">Top Viewed</option>
            <option value="topRated">Top Rated</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <MoveGrid class="mb-4" :movies="movies.movies" />

      <div class="flex justify-center items-center mt-8">
        <PaginationWrapper @change-page="handlePaginationChange" :length="movies.totalPages" />
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import MoveGrid from '@/components/MoveGrid.vue';
import PaginationWrapper from '@/components/PaginationWrapper.vue';
import { movies, type Movie } from '@/stores/movies';
import { ref } from 'vue';

export default {
  setup() {
    const movieGrid = ref<HTMLElement>()
    return {
      movieGrid
    }
  },
  components: { MoveGrid, PaginationWrapper },
  data() {
    return {
      displayType: this.$route.query.displayType as string ?? "grid",
      loading: false,
      movies
    }
  },
  created() {
    this.getMovies()
  },
  methods: {
    handlePaginationChange(pageNumber: number) {
      this.movies.currentPage = pageNumber
      this.getMovies()
      setTimeout(() => {
        this.movieGrid?.scrollIntoView({
          behavior: 'smooth'
        })
      }, 0);
    },
    getMovies() {
      this.movies.loading = true
      this.$axios({
        url: 'discover/movie',
        params: {
          language: this.language,
          api_key: this.apiKey,
          page: this.movies.currentPage
        }
      }).then((response) => {
        const watchedMovies = this.movies.getWatchedMovies()
        response.data.results.filter((movie: Movie) => watchedMovies.has(movie.id)).forEach((movie: Movie) => movie.watched = true)
        this.movies.movies = response.data.results
        this.movies.totalPages = response.data.total_pages
        this.movies.loading = false
      }).catch(() => {
        this.movies.loading = false
      })
    }
  }
}
</script>

<style scoped>
.movie-grid {
  background-color: #edf5f7;
}
</style>