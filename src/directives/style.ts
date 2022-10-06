/*
 * @Description: 自定义指令 设置样式
 * @Author: Mankeung
 * @Date: 2022-09-28 09:19:28
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 09:38:10
 */

export default {
	mounted(el: HTMLElement, binding: { [key: string]: string }) {
		el.style[binding.arg ?? 'color'] = binding.value ?? '#409eff'
	},
	unmounted() {}
}
