<template lang="">
        <main class="w-full h-screen flex flex-col items-center bg-gray-100" >
            <!-- header -->
            <div class="py-1 px-4 flex gap-6 items-center w-full border-b border-b-gray-200 bg-white">
                <font-awesome-icon icon="angle-left" class="text-xl" />
                <TinyUserVue />
                <font-awesome-icon icon="phone" class="text-xl" />
            </div>

            <!-- convo box -->
            <div class="px-2 grow w-full overflow-y-scroll flex flex-col gap-2 justify-end pb-4">
                <MyMessageVue text="My guy wagwan"/>
                <ForMessageVue text="Ahh kanigga...ngo vip mutaa"/>
                <MyMessageVue text="ni pole pole ndaq"/>
            </div>

            <!-- message form -->
            <form class="w-full bg-gray-300 h-12 rounded-3xl flex mb-2" @submit.prevent="add">
                <input type="text" required placeholder="Message..." v-model="message" class="bg-transparent grow rounded-l-3xl px-4"/>
                <button class="ml-4 mr-6"><font-awesome-icon icon="paper-plane" class="text-3xl text-blue-400"/></button>
            </form>
        </main>
</template>
<script setup>
import { ref } from 'vue'

import TinyUserVue from '@/components/shared/TinyUser.vue';
import MyMessageVue from '@/components/chat/MyMessage.vue';
import ForMessageVue from '@/components/chat/ForMessage.vue';

const messages = ['Hey bro!', "Wagwan."]

const message = ref();
</script>
<style scoped></style>