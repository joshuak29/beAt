<template>
    <div class="px-4 py-2 rounded-3xl bg-blue-600 w-fit text-white self-end">
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