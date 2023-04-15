<template>
  <div>
    <SmallUserVue v-for="i in 4" :key="i" />
  </div>
</template>

<script setup>
import SmallUserVue from '@/components/shared/SmallUser.vue'
</script>