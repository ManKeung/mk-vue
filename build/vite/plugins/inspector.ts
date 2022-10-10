/*
 * @Description: 点击UI自动定位到代码行能力
 * @Author: Mankeung
 * @Date: 2022-10-10 12:57:48
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-10 21:26:05
 */

import inspector from 'vite-plugin-vue-inspector'

export default () => inspector({
    enabled: true,
    toggleButtonVisibility: 'active',
    toggleComboKey: 'control-shift'
})