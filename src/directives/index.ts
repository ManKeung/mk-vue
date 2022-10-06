/*
 * @Description: 全局自定义指令
 * @Author: Mankeung
 * @Date: 2022-09-28 09:23:04
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 12:35:59
 */

import { App, Directive } from 'vue'

const modules = import.meta.glob('./*.ts', { eager: true })
const arr: any = []

for (const path in modules) {
	const re = /^\.\/(\S+).ts$/
	const group = path.match(re)
	const name = (group as any)[1]

	arr.push({
		name,
		directive: (modules as any)[path].default
	})
}

export default (app: App) => {
	arr.forEach((item: { name: string; directive: Directive<any, any> }) => {
		app.directive(item.name, item.directive)
	})
}
