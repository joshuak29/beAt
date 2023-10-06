<template>
  <article class="flex flex-col gap-2 mb-8 shadow-md rounded-2xl p-2">
    <div class="flex flex-row justify-between items-center">
      <!-- pic and username -->
      <div class="flex flex-row grow gap-4 items-center pr-2">
        <!-- pic -->
        <img src="" class="bg-gray-400 aspect-square rounded-full h-10">
        <!-- username and time -->
        <div>
          <!-- username  -->
          <router-link to="/user"><div>dark_jnr</div></router-link>

          <!-- time  -->
          <div class="text-gray-400 text-xs">2h ago</div>
        </div>

        <!-- pin icon  -->
        <div class="flex grow justify-end">
          <font-awesome-icon icon="location-arrow" class="text-2xl ml-2" :class="{'text-red-500': pinned}" @click="pin" />
        </div>
      </div>
    </div>

    <!-- map -->
    <div class="w-full h-44 bg-gray-400 rounded-lg"></div>

    <!-- caption -->
    <div class="w-full h-full pt-2 text-sm mb-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempore error velit laudantium maiores aperiam eum tempora atque neque soluta.
    </div>

    <!-- post action  -->
    <div class="flex justify-between px-1">
      <router-link to="/post" v-if="route.fullPath !== '/post'"><h1 class="text-gray-400 text-xs underline">View all 100 pins</h1></router-link>
      <div class="text-gray-400 text-xs" v-else>100 Pins</div>
      <div class="flex flex-row gap-2 justify-end grow">
        <font-awesome-icon icon="comment" class="text-2xl text-black ml-2" />
        <font-awesome-icon icon="thumbs-up" class="text-2xl ml-2" :class="{'text-brand-blue': liked}" @click="like" />
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
  user: {
    type: Object
  }
})

const router = useRouter()
const route = useRoute()

const liked = ref(false)
const pinned = ref(false)

const like = () => {
  liked.value = !liked.value
}
const pin = () => {
  pinned.value = !pinned.value
}
</script>