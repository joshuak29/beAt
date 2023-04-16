<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { useMainStore } from "@/stores/main.js"

import Navbar from '@/components/Navbar.vue'
import { onBeforeMount, onMounted } from "vue"

const mainStore = useMainStore()

onMounted(() => {
  mainStore.fetchUsers()
})
</script>

<template>
<div class="mb-12 bg-gray-100">
  <router-view />
  <footer>
    <navbar />
  </footer>
</div>
  
</template>

<style>
:root {
  @apply bg-gray-100
}
</style>
<style scoped>
div {
  min-height: 100vh;
  margin-bottom: 3rem
}
</style>
