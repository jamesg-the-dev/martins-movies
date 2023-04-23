import { ref } from "vue";

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
export interface MovieStore {
  movies: Movie[];
  loading: boolean;
  searchQuery: string;
  currentPage: number;
  totalPages: number
}
export const movies = ref<MovieStore>({
  movies: [],
  loading: false,
  searchQuery: '',
  currentPage: 1,
  totalPages: 1
})