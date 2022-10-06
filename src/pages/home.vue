<style lang="scss" scoped>
    .home {
        @at-root {
            &-btn {
                padding-bottom: 0.67em;

                .button {
                    margin: 0 10px;
                }
            }
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .logo {
        font-size: 200px;
        color: $color;
        cursor: pointer;

        &:hover {
            filter: drop-shadow(0 0 10px $color);
        }
    }

    .read-the-docs {
        padding-top: 50px;
        font-size: 14px;
    }

    .a {
        margin: 0 5px;
        font-size: 20px;
        text-decoration: inherit;
    }

    .p {
        padding: 0 20px;
        word-break: break-all;
    }
</style>

<template>
	<div class="home">
		<svg-icon name="logo" class="logo" @click="handleDocs" />
		<h1>{{ $t('title') }}</h1>
		<div class="home-btn">
			<mk-button :value="`${$t('count')} ${store.count}`" size="big" @click="store.increment"></mk-button>
			<mk-button :value="$t('lang')" size="big" class="button" @click="changeLang"></mk-button>
			<mk-button :value="$t('reload')" size="big" @click="reload"></mk-button>
		</div>
		<p class="p" v-html="$t('txt')"></p>
		<p>
			访问代码仓库：
			<a href="https://www.github.com/mankeung/mk-vue" target="_blank" class="a">[github]</a>
			<a href="https://www.gitee.com/mankeung/mk-vue" target="_blank" class="a">[gitee]</a>
		</p>
		<p v-style="'#888'" class="read-the-docs">
mkimq{{ $t('copyright') }} © 2022
</p>
	</div>
</template>

<script setup lang="ts">
	import useCommonStore from '@/store/common'

	const reload: any = inject('reload')
	const store = useCommonStore()
	const { t: $t, locale } = useI18n()

	// TODO 切换语言
	const changeLang = () => {
		store.changeLange()
		locale.value = store.lang
		reload()
	}

	// TODO 去文档
	const handleDocs = () => {
		window.open('https://mankeung.github.io/docs/mk-vue')
	}

	onMounted(() => {
		window.$mk.http.get('/api/get').then((data) => {
			console.log('mock模拟数据')
			console.log(data)
			console.log('mock模拟数据')
		})
	})
</script>
