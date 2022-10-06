<style lang="scss" scoped>
    .code-open {
        background-color: #1d1e22;
    }
</style>

<template>
<iframe
    class="code-open"
    height="300"
    style="width: 100%;"
    scrolling="no"
    :src="`https://codepen.io/mankeung/embed/preview/${id}?default-tab=${type}%2Cresult`"
    frameborder="no"
    loading="lazy"
    allowtransparency="true"
    allowfullscreen="true"
/>
</template>

<script setup lang="ts">
// import { defineProps, PropType } from 'vue'

const props = defineProps({
    id: {
        type: [String, Number] as PropType<string | number>,
        required: true,
    },
    type: {
        type: String as PropType<'css' | 'js' | 'html' | ''>,
        default: ''
    }
})
</script>
