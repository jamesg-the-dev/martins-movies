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
        <MoveGrid :movies="movies"/>
      </div>
    </section>
  </main>
  <MainFooter />
</template>

<script lang='ts'>
import MainBanner from '@/components/MainBanner.vue';
import MainFooter from '@/components/MainFooter.vue';
import MoveGrid, { type Movie } from '@/components/MoveGrid.vue';

export default {
  components: { MainBanner, MainFooter, MoveGrid },
  data() {
    return {
      displayType: this.$route.query.displayType ?? "grid",
      movies: [] as Movie[]
    }
  },
  created() {
    this.getMovies()
  },
  methods: {
    async getMovies() {
      try {
        const { data: { results } } = await this.$axios({
          url: 'discover/movie',
          params: {
            language: this.language,
            api_key: this.apiKey,
            page: 1
          }
        })
        if (typeof results === 'undefined') return;

        this.movies = results
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
</script>

<style scoped>
.movie-grid {
  background-color: #edf5f7;
}
</style>