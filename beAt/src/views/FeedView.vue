<template>
  <main class="px-2 py-2">
      <h1 class="text-3xl font-semibold flex flex-row justify-center mb-2 pt-2 pb-4">Locus</h1>
      <div class="flex flex-col w-full p-2">
        <PostVue v-for="user in 5" :key="user" />
        <!-- <PostVue v-for="user in mainStore.users" :key="user.id" :user="user" /> -->
      </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import PostVue from "@/components/shared/Post.vue";

import { useMainStore } from "@/stores/main.js"

const mainStore = useMainStore();

</script>