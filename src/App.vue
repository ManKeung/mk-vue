<template>
	<router-view v-slot="{ Component }">
		<keep-alive :include="[]">
			<component :is="Component" />
		</keep-alive>
	</router-view>
</template>

<script setup lang="ts">
	const router = useRouter()

	// 刷新页面
	function reload() {
		router.push('/reload')
	}

	provide('reload', reload)
</script>
