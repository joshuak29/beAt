import { createRouter, createWebHistory } from 'vue-router'

import FeedView from '@/views/FeedView.vue'
import InboxView from '@/views/InboxView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SearchView from '@/views/SearchView.vue'
import PostDetails from '@/views/post/PostDetailsView.vue'
import UserProfile from '@/views/user/UserProfile.vue'
import LoginView from '@/views/auth/LoginView.vue'
import ChatView from '@/views/chat/ChatView.vue'

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
      name: "inbox",
      path: '/inbox',
      component: InboxView
    },
    {
      name: "profile",
      path: '/profile',
      component: ProfileView
    },
    {
      name: "post",
      path: '/post',
      component: PostDetails
    },
    {
      name: 'user-profile',
      path: '/user',
      component: UserProfile
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView
    },
    {
      name: 'chat',
      path: '/chat',
      component: ChatView
    }
  ]
})

export default router
