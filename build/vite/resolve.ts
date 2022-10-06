/*
 * @Description: resolve
 * @Author: Mankeung
 * @Date: 2022-09-26 21:42:45
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 17:56:44
 */

import path from 'path'

const paths = [
    {
        name: '@',
        path: 'src'
    }
]

const alias: any = {
    // ! 解决 使用 vue-i18n 入口文件配置 控制台报警问题
    'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
}

paths.forEach(item => {
    alias[item.name] = getPath(item.path)
})

export default {
    alias
}

function getPath(p: string) {
    return path.resolve(process.cwd(), p)
}