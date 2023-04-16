<template>
  <main class="w-full h-full min-h-screen flex flex-col p-4 gap-6 mt-10">
    <!-- header -->
    <header class="w-full fixed flex flex-row top-0 left-0 h-10 items-center px-2 pr-4 justify-between bg-gray-100">
      <span class="text-xl font-bold">dark_jnr</span>
      <font-awesome-icon icon="user-minus" class="text-xl text-red-500" v-if="following"  @click="follow"/>
      <font-awesome-icon icon="user-plus" class="text-xl" v-else @click="follow"/>
    </header>

    <!-- profile pic and posts, followers and following -->
    <div class="w-full flex flex-row items-center gap-2">
      <!-- pic -->
      <img src="" class="w-24 rounded-full bg-gray-400 aspect-square" />

      <!-- followers -->
      <div class="flex flex-row gap-2">
        <!-- post  -->
        <div class="text-center">
          <div class="font-semibold text-lg">3</div>
          <div class="text-xs">Posts</div>
        </div>

        <div class="text-center">
          <div class="font-semibold text-lg">100</div>
          <div class="text-xs">Followers</div>
        </div>

        <!-- following -->
        <div class="text-center">
          <div class="font-semibold text-lg">23</div>
          <div class="text-xs">Following</div>
        </div>
      </div>
      
    </div>

    <!-- bio -->
    <div class="text-gray-700">
      <!-- name -->
      <h1 class="font-bold text-lg">Rukundo Josue</h1>
      <p>Son of God</p>
      <p>John 3:16</p>
    </div>

    <!-- posts -->
    <article>
      <h1 class="text-lg font-semibold mb-4 flex flex-row justify-between"><span>Posts</span> <span class="text-xs text-blue-400 underline">View all</span></h1>
      <div class="flex flex-col w-full">
        <PostVue />
        <PostVue />
        <PostVue />
      </div>
    </article>
  </main>
</template>

<script setup>
import { ref } from "vue";

import PostVue from '@/components/shared/Post.vue'

const following = ref(false)

const follow = () => {
  following.value = !following.value
}
</script>