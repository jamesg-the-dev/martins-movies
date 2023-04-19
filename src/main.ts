import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './assets/icons'
import './assets/main.css'

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)

app.mixin({
  methods: {
    appName: () => 'martin\'s movies'
  }
})
app.mount('#app')
