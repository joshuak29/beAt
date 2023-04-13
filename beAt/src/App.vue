<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
<div class="h-full min-h-screen bg-gray-100">
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
