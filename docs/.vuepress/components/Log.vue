<template>
    <div v-memo="list" v-for="(item, index) in list" :key="index" class="page-log">
        <p class="page-log--title">{{ item.title }}</p>
        <p class="page-log--time">{{ item.time }}</p>
        <ul class="page-log--box" type="circle">
            <li v-for="(it, i) in item.data" :key="i">
                <span v-if="it.head" :class="it.head.type">{{ it.head.title }}</span>
                <p v-html="it.desc"></p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
    {
        title: '功能优化',
        time: '2022-10-07',
        data: [
            {
                head: {
                    title: '优化',
                    type: 'opt'
                },
                desc: 'px2rem时PX转px<a href="https://mankeung.github.io/docs/mk-vue/config/vite.html#css" title="查看">查看详情</a>。'
            },
            {
                head: {
                    title: '新增',
                    type: 'add'
                },
                desc: '新增取消请求工具说明<a href="https://mankeung.github.io/docs/mk-vue/api/tools/cancel.html" title="查看">点击查看</a>。'
            },
        ]
    },
    {
        title: '1.0.1',
        time: '2022-10-07',
        data: [
            {
                head: {
                    title: 'bug',
                    type: 'bug'
                },
                desc: '生产环境打包报错修复。'
            }
        ]
    },
    {
        title: '1.0.0',
        time: '2022-10-05',
        data: [
            {
                head: {
                    title: 'v1.0.0',
                    type: 'add'
                },
                desc: 'vite + vue + ts 项目基础搭建v1.0.0发布。'
            }
        ]
    },
])
</script>

<style lang="scss" scoped>
.page-log {
    position: relative;
    padding-left: 28px;
    padding-bottom: 20px;

    &::before {
        top: 8.5px;
        left: 7px;
        position: absolute;
        content: "";
        display: block;
        height: calc(100% - 8.5px);
        width: 1px;
        background-color: var(--c-border);
    }

    &::after {
        top:8.5px;
        left: 0;
        position: absolute;
        content: "";
        display: block;
        width: 13px;
        height: 13px;
        background-color: var(--c-bg);
        border-radius: 50%;
        position: absolute;
        border: 1px solid var(--c-brand);
    }

    p {
        padding: 0;
        margin: 0;
        line-height: normal;
    }

    ul {
        margin: 0;
    }

    &--title {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px!important;
        margin: 0;
        border: none;
    }

    &--time {
        display: inline-block;
        margin: 8px 0!important;
        font-size: 85%;
        background-color: #fff5f5!important;
        border-radius: 3px;
        font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
        color: #fa795e!important;
        padding: 2px 4px;
    }

    &--box {
        display: flex;
        flex-direction: column;

        > li {
            line-height: 1.8em;

            > span {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 4px;
                color: #fff;
                font-size: 12px;
                border-width: 1px;
                border-style: solid;
                line-height: 1;
                margin-right: 5px;

                &.opt {
                    color: #2979ff;
                    background-color: #ecf5ff;
                    border-color: #a0cfff;
                }

                &.add {
                    color: #19be6b;
                    background-color: #dbf1e1;
                    border-color: #71d5a1;
                }

                &.bug {
                    color: #f90;
                    background-color: #fdf6ec;
                    border-color: #fcbd71;
                }
            }

            > p {
                line-height: 1.8em;
                display: inline;
            }
        }
    }
}
</style>
