<template>
  <div class="h-full w-full p-2">
    <div class="h-10 flex items-center pl-2 mb-4">
      <router-link to="/"><font-awesome-icon icon="angle-left" class="text-2xl" /></router-link>
      <div class="font-semibold text-xl grow text-center">
        Post
      </div>
    </div>
    <PostVue />

    <!-- likes, comments and pins -->
    <hr>
    <div>
      <!-- tabs -->
      <nav class="flex flex-row grow">
        <!-- <router-link to="/post">Pins</router-link>
        <router-link to="/post/likes">Likes</router-link>
        <router-link to="/post/comments">Comments</router-link> -->

        <h1 @click="tab = 'pins'">Pins</h1>
        <h1 @click="tab = 'likes'">Likes</h1>
        <h1 @click="tab = 'comments'">Comments</h1>
      </nav>

      <div>
        <LikesVue v-if="tab === 'likes'" />
        <CommentsVue v-if="tab === 'comments'" />
        <PinsVue v-if="tab === 'pins'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import PostVue from '@/components/shared/Post.vue';
import SmallUserVue from '@/components/shared/SmallUser.vue';

import CommentsVue from '@/components/post/Comments.vue'
import LikesVue from '@/components/post/Likes.vue'
import PinsVue from '@/components/post/Pins.vue'

const tab = ref('pins')
</script>
<style scoped>
nav a, nav h1 {
  @apply grow text-center border-b h-7
}
nav a.router-link-exact-active {
  @apply bg-gray-200
}
</style>