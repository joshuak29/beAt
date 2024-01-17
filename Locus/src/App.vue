<script setup>
import { onBeforeMount, onMounted, computed } from "vue"
import { useRouter } from 'vue-router';

import { useMainStore } from "@/stores/main.js"

import Navbar from '@/components/Navbar.vue'

const router = useRouter()

const showNav = computed(() => {
  return !(router.currentRoute.value.name == 'chat');
})

const mainStore = useMainStore()

onMounted(() => {
  mainStore.fetchUsers()
  console.log()
})
</script>

<template>
<div>
  <router-view />
  <footer>
    <navbar v-if="showNav"/>
  </footer>
</div>
  
</template>

<style>
:root {
  @apply bg-white;
}
</style>
<style scoped>
div {
  min-height: 100vh;
}
</style>
