/*
 * @Description: 全局注册组件
 * @Author: Mankeung
 * @Date: 2022-09-26 17:11:04
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-26 20:44:25
 */

import components from 'unplugin-vue-components/vite'

export default () => components({
    dirs: ['src/components'],
    // directoryAsNamespace: true,
    dts: 'src/types/components.d.ts'
})