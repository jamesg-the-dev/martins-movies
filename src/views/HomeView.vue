<template>
  <MainBanner title="Movie Grid 3" />
  <main>
    <section class="section movie-grid">
      <div class="main-container">
        <div class="flex justify-between mb-12">
          <div class="flex gap-3">
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
        <MoveGrid :movies="movies.movies" />
      </div>
    </section>
  </main>
  <MainFooter />
</template>

<script lang='ts'>
import MainBanner from '@/components/MainBanner.vue';
import MainFooter from '@/components/MainFooter.vue';
import MoveGrid from '@/components/MoveGrid.vue';
import { movies } from '@/stores/movies';

export default {
  components: { MainBanner, MainFooter, MoveGrid },
  data() {
    return {
      displayType: this.$route.query.displayType as string ?? "grid",
      loading: false,
      movies
    }
  },
  created() {
    if (!this.$route.query.q) {
      this.getMovies()
    } else {
      this.searchMovies()
    }
  },
  methods: {
    getMovies() {
      this.movies.loading = true
      this.$axios({
        url: 'discover/movie',
        params: {
          language: this.language,
          api_key: this.apiKey,
          page: 1
        }
      }).then(response => {
        this.movies.movies = response.data.results
        this.movies.loading = false
      }).catch(err => {
        this.movies.loading = false
      })
    },
    searchMovies() {
      const query = this.$route.query.q
      if (query?.length === 0) {
        this.getMovies();
        return;
      }
      this.movies.searchQuery = query as string
      this.movies.loading = true
      this.$router.push({ query: { q: query } })
      this.$axios({
        url: 'search/movie',
        params: {
          api_key: this.apiKey,
          language: this.language,
          query,
        }
      })
        .then(response => {
          this.movies.movies = response.data.results
          this.movies.loading = false
        })
        .catch(err => {
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