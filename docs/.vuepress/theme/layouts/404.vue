<template>
	<div class="page-404">
        <h1>抱歉!</h1>
        <h2>当前页面不存在...</h2>
        <p>请检查您输入的网址是否正确，或点击下面的按钮返回首页。</p>
        <div>
            <span @click="handleClick">返回首页</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = () => {
    router.replace('/')
}
</script>

<style lang="scss" scoped>
.page-404 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 140px;

    > h1,
    > h2,
    > p,
    > div {
        width: 450px;
        display: inline-block;
        border: none;
        padding: 0;
        margin: 0;
    }

    > h1 {
        font-size: 26px;
        color: var(--c-brand);
        padding-bottom: 10px;
    }

    > h2 {
        font-size: 20px;
        padding-bottom: 6px;
    }

    > p {
        color: var(--c-text-quote);
        padding-bottom: 10px;
    }

    > div {
        padding-top: 40px;
    }

    span {
        cursor: pointer;
        padding: 10px 20px;
        background-color: var(--c-brand);
        color: white;
        font-size: 16px;
        border-radius: 50px;
    }
}
</style>
