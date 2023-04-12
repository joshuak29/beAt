<template>
  <main class="w-full py-4 flex flex-col items-center">
    <form class="w-5/6 pl-2 mb-4 h-10 bg-white border hover:border-teal-400 rounded-lg flex flex-row items-center gap-2 overflow-hidden">
      <font-awesome-icon icon="search" class="text-gray-600 text-xl" />
      <input type="text" placeholder="Search" class="h-full grow text-gray-500 text-xl pl-2">
    </form>

    <!-- user results -->
    <div class="w-full">
      <SmallUserVue v-for="i in 10" :key="i" />
    </div>
  </main>
</template>

<script setup>
import SmallUserVue from "../components/SmallUser.vue";
</script>