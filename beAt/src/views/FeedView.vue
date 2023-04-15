<template>
  <article class="px-2 py-2">
      <h1 class="text-2xl font-semibold flex flex-row justify-between mb-2">Posts</h1>
      <div class="flex flex-col w-full">
        <PostVue v-for="i in 10" :key="i" />
      </div>
    </article>
</template>

<script setup>
import { ref } from 'vue';
import PostVue from "@/components/shared/Post.vue";
</script>