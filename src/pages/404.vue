<style lang="scss" scoped>
    .no {
        display: flex;
        padding: 20px 0 0 20px;
        font-size: 18px;
        align-items: center;
    }

    .button {
        display: inline-block;
        padding: 10px 5px;
        margin: 0 10px;
        font-size: 14px;
        color: white;
        cursor: pointer;
        background-color: $color;
        border: 2px solid $color;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>

<template>
	<div class="no">
		<p>{{ $t('noFound') }}</p>
		<mk-button :value="$t('home')" @click="goBack"></mk-button>
	</div>
</template>

<script setup lang="ts">
	const router = useRouter()
	const { t: $t } = useI18n()

	const goBack = () => {
		router.go(-1)
	}
</script>
