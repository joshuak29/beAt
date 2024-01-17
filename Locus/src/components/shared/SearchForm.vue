<template>
  <form class="w-5/6 pl-2 pr-4 mb-4 h-10 bg-white border hover:border-teal-400 rounded-lg flex flex-row items-center overflow-hidden" @submit.prevent="">
    <!-- search icon -->
    <font-awesome-icon icon="search" class="text-gray-600 text-xl" />
    <!-- search input -->
    <input type="text" placeholder="Search" class="h-full grow text-gray-500 text-xl pl-2" v-model="searchTerm">

    <font-awesome-icon icon="xmark" class="text-gray-600 text-xl" v-if="searchTerm" @click="searchTerm = null" />
  </form>
</template>
