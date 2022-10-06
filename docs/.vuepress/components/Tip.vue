<style lang="scss" scoped>
$color-priority-a: #6b2a2a;
$color-priority-b: #8c480a;
$color-priority-c: #2b5a99;
$color-priority-d: #3f536d;

h2,
h3 {
    // a.header-anchor {
    //     opacity: 1;
    // }

    sup {
        text-transform: uppercase;
        font-size: 0.5em;
        padding: 2px 4px;
        border-radius: 3px;
        margin-left: 0.5em;
        color: $color-priority-a;
        border: 1px solid $color-priority-a;

        &[data-p=a] {
            color: $color-priority-a;
            border: 1px solid $color-priority-a;
        }

        &[data-p=b] {
            color: $color-priority-b;
            border: 1px solid $color-priority-b;
        }

        &[data-p=c] {
            color: $color-priority-c;
            border: 1px solid $color-priority-c;
        }

        &[data-p=d] {
            color: $color-priority-d;
            border: 1px solid $color-priority-d;
        }
    }
}
</style>

<template>
<sup :data-p="type" v-text="name" />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'a'
    },
    title: {
        type: String,
        required: false,
        default: ''
    }
})

const name = computed(() => {
    if (props.title) return props.title

    const types = {
        a: '必要',
        b: '强烈推荐',
        c: '推荐',
        d: '谨慎使用'
    }

    if (types[props.type]) return types[props.type]

    return '必要'
})
</script>
