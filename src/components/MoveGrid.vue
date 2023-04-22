<template>
  <div class="grid grid-cols-3 gap-7">
    <MovieCard v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.vote_average" :image="imageUrl + movie.poster_path"/>
  </div>
</template>

<script lang='ts'>
export interface Movie {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}
import MovieCard from './MovieCard.vue';
export default {
  components: { MovieCard },
  props: {
    movies: {
      type: Array<Movie>,
      required: true
    }
  }
}
</script>