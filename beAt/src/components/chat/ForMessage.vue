<template>
    <div class="px-4 py-2 rounded-3xl bg-gray-300 w-fit text-gray-600">
        {{ props.text }}
    </div>
</template>
<script setup>
const props = defineProps({
    text: String
})
</script>
<style scopped>
    
</style>