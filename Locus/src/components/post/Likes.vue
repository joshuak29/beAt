<template>
  <div>
    <SmallUserVue v-for="i in 5" :key="i" />
  </div>
</template>

<script setup>
import SmallUserVue from '@/components/shared/SmallUser.vue'
</script>