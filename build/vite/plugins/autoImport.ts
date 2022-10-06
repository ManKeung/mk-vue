/*
 * @Description: 自动导入
 * @Author: Mankeung
 * @Date: 2022-09-26 17:06:24
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-27 23:57:46
 */

import autoImport from 'unplugin-auto-import/vite'

export default () => autoImport({
    imports: [
        'vue',
        'vue-router',
        'vue-i18n'
    ],
    dts: 'src/types/auto-imports.d.ts'
})