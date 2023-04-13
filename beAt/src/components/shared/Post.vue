<template>
  <article class="flex flex-col gap-2">
    <div class="flex flex-row justify-between items-center">
      <!-- pic and username -->
      <div class="flex flex-row grow gap-4">
        <!-- pic -->
        <img src="" class="bg-gray-400 aspect-square rounded-full h-10">
        <!-- username and time -->
        <div>
          <div class="">dark_jnr</div>
          <div class="text-gray-400 text-xs">2h ago</div>
        </div>
      </div>
    </div>

    <!-- map -->
    <div class="w-full h-44 bg-gray-400 rounded-lg"></div>

    <!-- caption -->
    <div class="w-full h-full py-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempore error velit laudantium maiores aperiam eum tempora atque neque soluta.
    </div>

    <!-- footer -->
    <div class="w-full flex flex-row items-center justify-end gap-4 mt-2">
      <font-awesome-icon icon="thumbs-up" class="text-2xl" :class="{'text-blue-500': liked}" @click="like" />
      <font-awesome-icon icon="location-arrow" class="text-2xl" :class="{'text-red-500': followed}" @click="follow" />
      <font-awesome-icon icon="comment" class="text-2xl" />
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";

const liked = ref(false)
const followed = ref(false)

const like = () => {
  liked.value = true
}
const follow = () => {
  followed.value = true
}
</script>