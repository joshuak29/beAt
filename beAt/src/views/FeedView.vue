<template>
  <article class="px-2 py-2">
      <h1 class="text-2xl font-semibold flex flex-row justify-between mb-2">Posts</h1>
      <div class="flex flex-col w-full">
        <PostVue v-for="user in mainStore.users" :key="user.id" :user="user" />
      </div>
    </article>
</template>

<script setup>
import { ref } from 'vue';
import PostVue from "@/components/shared/Post.vue";

import { useMainStore } from "@/stores/main.js"

const mainStore = useMainStore();

</script>