<template>
    <main class="w-full h-screen bg-gray-100 pb-14 pt-14 box-border">
        <!-- header -->
        <div class="py-1 px-4 flex gap-6 items-center w-full border-b border-b-gray-200 bg-white fixed left-0 top-0">
            <font-awesome-icon icon="angle-left" class="text-xl" @click="back" />
            <TinyUserVue />
            <font-awesome-icon icon="phone" class="text-xl" />
        </div>

        <!-- convo box -->
        <div class="px-2 grow w-full h-full overflow-y-scroll flex flex-col gap-2 py-6">
            <MyMessageVue text="My guy wagwan" />
            <ForMessageVue text="Ahh kanigga...ngo vip mutaa" />
            <MyMessageVue
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus optio praesentium sunt quas voluptatum distinctio, provident sit amet nostrum enim?" />
            <ForMessageVue text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus optio praesentium sunt quas voluptatum distinctio, provident sit amet nostrum enim?" />
        </div>

        <!-- message form -->
        <form class="w-full bg-gray-300 h-10 rounded-3xl flex mb-2 fixed left-0 bottom-0 text-sm" @submit.prevent="add">
            <input type="text" required placeholder="Message..." v-model="message"
                class="bg-transparent grow rounded-l-3xl px-4" />
            <button class="ml-4 mr-6"><font-awesome-icon icon="paper-plane" class="text-2xl text-blue-400" /></button>
        </form>
    </main>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import TinyUserVue from '@/components/shared/TinyUser.vue';
import MyMessageVue from '@/components/chat/MyMessage.vue';
import ForMessageVue from '@/components/chat/ForMessage.vue';

const router = useRouter();

const back = () => {
    router.back()
}

const messages = ['Hey bro!', "Wagwan."]

const message = ref();
</script>
<style scoped></style>