<style lang="scss" scoped>
    svg {
        width: 1em;
        fill: currentcolor;
        vertical-align: middle;
    }
</style>

<template>
	<svg aria-hidden="true">
		<use :href="symbolId" :fill="props.color" />
	</svg>
</template>

<script lang="ts" setup>
	const props = defineProps({
		prefix: {
			type: String,
			default: 'icon'
		},
		name: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: ''
		}
	})

	const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
