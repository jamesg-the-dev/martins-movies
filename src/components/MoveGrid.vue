<template>
  <div>
    <h3 class="mb-4 text-2xl font-medium" v-if="movieStore.searchQuery">Showing results for "{{ movieStore.searchQuery }}"</h3>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <template v-if="movieStore.loading">
        <div v-for="i in 20" :key="i">
          <SkeletonLoader height="270px" border-radius="0px"/>
          <SkeletonLoader class="mt-3" border-radius="0px" height="25px" width="20%"/>
          <SkeletonLoader class="mt-3" border-radius="0px" height="25px"/>
          <SkeletonLoader class="mt-3" border-radius="0px" height="25px"/>
        </div>
      </template>
      <template v-else>
        <MovieCard v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.vote_average" :image="imageUrl + movie.poster_path" :overview="movie.overview" :watched="movie.watched" @mark-watched="markAsWatched(movie)"/>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import type { Movie } from '@/stores/movies';
import { movies } from '@/stores/movies';
import MovieCard from './MovieCard.vue';
import SkeletonLoader from './SkeletonLoader.vue';
import { toRaw } from 'vue';
export default {
  components: { MovieCard, SkeletonLoader },
  props: {
    movies: {
      type: Array<Movie>,
      required: true
    }
  },
  data() {
    return {
      movieStore: movies
    }
  },
  methods: {
    markAsWatched(movie: Movie) {
      const watchedMovies = this.movieStore.getWatchedMovies()
      if (!watchedMovies) {
        this.movieStore.setWatchedMovies([movie.id])
      } else {
        watchedMovies.add(movie.id)
        this.movieStore.setWatchedMovies([...watchedMovies])
      }

      movie.watched = true
    }
  }
}
</script>