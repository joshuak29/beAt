<template>
  <div class="w-full px-4 py-2 flex flex-row border-b-2 border-gray-300">
    <!-- Profile img -->
    <router-link to="/user"><img src="" class="w-16 aspect-square rounded-full bg-gray-500" /></router-link>

    <!-- name and username -->
    <router-link to="/user">
      <div class="flex flex-col grow justify-center pl-4">
        <div class="text-lg">Rukundo Josue</div>
        <div class="opacity-60">@dark_jnr</div>
      </div>
    </router-link>

    <!-- add friend icon -->
    <div class="grow flex items-center justify-center" @click="follow">
      <font-awesome-icon icon="user-minus" class="text-2xl text-red-500" v-if="following"/>
      <font-awesome-icon icon="user-plus" class="text-2xl" v-else/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const following = ref(false)

const follow = () => {
  following.value = !following.value
}
</script>