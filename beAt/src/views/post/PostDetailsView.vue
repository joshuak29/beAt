<template>
  <div class="h-full w-full p-2">
    <div class="h-10 flex items-center pl-2 mb-4">
      <font-awesome-icon
        icon="angle-left"
        class="text-2xl"
        @click="router.go(-1)"
      />
      <div class="font-semibold text-xl grow text-center">Post</div>
    </div>
    <PostVue />

    <!-- tabs -->
    <div>
      <nav class="flex flex-row grow mb-4">

        <!-- pins  -->
        <h1
          @click="tab = 'pins'"
          class="grow text-center"
          :class="{
            'border-b-2 border-black': tab === 'pins',
            'border-b': tab !== 'pins',
          }"
        >
          Pins
        </h1>

        <!-- likes  -->
        <h1
          @click="tab = 'likes'"
          class="grow text-center"
          :class="{
            'border-b-2 border-black': tab === 'likes',
            'border-b': tab !== 'likes',
          }"
        >
          Likes
        </h1>

        <!-- comments  -->
        <h1
          @click="tab = 'comments'"
          class="grow text-center"
          :class="{
            'border-b-2 border-black': tab === 'comments',
            'border-b': tab !== 'comments',
          }"
        >
          Comments
        </h1>
      </nav>

      <div>
        <LikesVue v-if="tab === 'likes'" />
        <CommentsVue v-if="tab === 'comments'" />
        <PinsVue v-if="tab === 'pins'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import PostVue from "@/components/shared/Post.vue";
import SmallUserVue from "@/components/shared/SmallUser.vue";

import CommentsVue from "@/components/post/Comments.vue";
import LikesVue from "@/components/post/Likes.vue";
import PinsVue from "@/components/post/Pins.vue";

const router = useRouter();

const tab = ref("pins");
</script>
<style scoped>
nav a.router-link-exact-active {
  @apply bg-gray-200;
}
</style>