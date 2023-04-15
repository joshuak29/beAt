<template>
  <main class="w-full py-4 flex flex-col items-center">
    <form class="w-5/6 pl-2 pr-4 mb-4 h-10 bg-white border hover:border-teal-400 rounded-lg flex flex-row items-center overflow-hidden" @submit.prevent="">
    <!-- search icon -->
      <font-awesome-icon icon="search" class="text-gray-600 text-xl" />
      <!-- search input -->
      <input type="text" placeholder="Search for locations and friends" class="h-full grow text-gray-500 text-md pl-2" v-model="searchTerm">

      <font-awesome-icon icon="xmark" class="text-gray-600 text-xl" v-if="searchTerm" @click="searchTerm = null" />
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";


const searchTerm = ref()
</script>