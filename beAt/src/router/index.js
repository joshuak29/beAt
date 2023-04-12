import { createRouter, createWebHistory } from 'vue-router'

import FeedView from '@/views/FeedView.vue'
import MapView from '@/views/MapView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "feed",
      path: '/',
      component: FeedView
    },
    {
      name: "search",
      path: '/search',
      component: SearchView
    },
    {
      name: "map",
      path: '/map',
      component: MapView
    },
    {
      name: "profile",
      path: '/profile',
      component: ProfileView
    }
  ]
})

export default router
