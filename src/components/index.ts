/*
 * @Description: 自动注册tsx全局组件
 * @Author: Mankeung
 * @Date: 2022-09-29 11:35:03
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-29 12:36:50
 */

import { App } from 'vue'

const modules = import.meta.glob('./**/*.tsx', { eager: true })
const arr: any[] = []

for (const path in modules) {
	arr.push((modules as any)[path].default)
}

export default (app: App) => {
	arr.forEach((comp) => {
		app.component(`Mk${comp.name}`, comp)
	})
}
