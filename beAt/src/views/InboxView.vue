<template>
  <main class="w-full py-4 flex flex-col items-center p-4 mb-12">
    <h1 class="text-2xl font-semibold flex flex-row justify-center mb-2 pb-2">Inbox</h1>
    <form
      class="w-full pl-2 pr-4 mb-8 h-10 bg-brand-platinum border hover:border-teal-400 rounded-lg flex flex-row items-center overflow-hidden"
      @submit.prevent="">
      <!-- search icon -->
      <font-awesome-icon icon="search" class="text-gray-600 text-xl" />
      <!-- search input -->
      <input type="text" placeholder="Search" class="h-full grow bg-brand-platinum text-gray-500 text-xl pl-2" v-model="searchTerm">

      <font-awesome-icon icon="xmark" class="text-gray-600 text-xl" v-if="searchTerm" @click="searchTerm = null" />
    </form>

    <!-- users -->
    
    <div class="flex flex-col gap-6 w-full">
      <ChatVue v-for="chat in 18" :key="chat" />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

import ChatVue from "@/components/chat/Chat.vue";
</script>