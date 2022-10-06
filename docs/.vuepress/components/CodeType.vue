<style lang="scss" scoped>
$color-bgr-good: #d7efd7;
$color-bgr-bad: #f7e8e8;

.style-example {
    border-radius: 7px;
    margin: 1.6em 0;
    padding: 1.6em 1.6em 1em;
    position: relative;
    border: 1px solid transparent;
    border-top-width: 5px;

    h4 {
        margin-top: 0;

        &::before {
            font-family: 'FontAwesome';
            margin-right: .4em;
        }
    }

    &-bad {
        background: $color-bgr-bad;
        border-color: darken($color-bgr-bad, 20%);

        h4 {
            color: darken($color-bgr-bad, 50%);
        }

        h4::before {
            content: '';
            display: inline-block;
            width: 15px;
            height: 15px;
            background: {
                image: url('/err.png')
            };
        }
    }

    &-good {
        background: $color-bgr-good;
        border-color: darken($color-bgr-good, 20%);

        h4 {
            color: darken($color-bgr-good, 50%);
        }

        h4::before {
            content: '';
            display: inline-block;
            width: 15px;
            height: 15px;
            background: {
                image: url('/ok.png')
            };
        }
    }
}
</style>

<template>
<div :class="cls" class="style-example">
    <h4 v-text="name" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
    bad: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: false,
        default: ''
    }
})

const name = computed(() => {
    if (props.title) return props.title

    if (props.bad) return '反面例子'

    return '正面例子'
})

const cls = computed(() => {
    if (props.bad) return 'style-example-bad'

    return 'style-example-good'
})
</script>
