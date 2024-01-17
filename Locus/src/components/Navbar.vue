<template>
  <nav class="w-full h-12 fixed bottom-0 left-0 flex flex-row items-center grow border-t border-gray-400 bg-white py-1">
    <router-link to="/" ><font-awesome-icon icon="house" /></router-link>
    <router-link to="/search" ><font-awesome-icon icon="search" /></router-link>
    <router-link to=""><font-awesome-icon icon="plus-circle" class="plus text-7xl" /></router-link>
    <router-link to="/inbox" ><font-awesome-icon icon="message" /></router-link>
    <router-link to="/profile" ><font-awesome-icon icon="user" /></router-link>
  </nav>
</template>

<script setup>
</script>

<style scoped>
nav a svg {
  @apply text-2xl
}
a {
  @apply grow text-3xl text-center;
  transition: all .3s
}
nav a.router-link-exact-active {
  @apply text-gray-400 hover:bg-opacity-60
}
.plus {
  @apply text-[2.75rem] text-gray-600
}
</style>