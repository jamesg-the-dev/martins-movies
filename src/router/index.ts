import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Move Grid 3',
        breadcrumbs: ['Home', 'Move Grid 3']
      },
    },
    {
      path: '/browse/:searchTerm',
      name: 'browse',
      component: BrowseView,
      meta: {
        title: 'Browse',
        breadcrumbs: ['Browse']
      },
    }
  ]
})

export default router
