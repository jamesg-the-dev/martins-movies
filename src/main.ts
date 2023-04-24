import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './assets/icons'
import './assets/main.css'
import axios from './plugins/axios'
const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)

app.use(axios, {
  baseUrl: 'https://api.themoviedb.org/3/'
})

app.mixin({
  data() {
    return {
      imageUrl: 'https://image.tmdb.org/t/p/original',
      apiKey: '1e448e0dfcdbb565f5d329820065b4d2',
      language: navigator.language ?? 'en-GB'
    }
  },
  methods: {
    appName: () => 'martin\'s movies'
  }
})
app.mount('#app')
