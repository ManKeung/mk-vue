/*
 * @Description: 国际化
 * @Author: Mankeung
 * @Date: 2022-09-27 23:08:26
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 00:05:53
 */

import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import useCommon from '@/store/common'

// 引入统计目录下文件
const modules = import.meta.glob('./*.ts', { eager: true })

const messages: any = {}

for (const path in modules) {
	const arr: any = path.substring(path.lastIndexOf('/') + 1).split('.')
	const name: any = arr[0]
	messages[name] = (modules[path] as any).default
}

export default (app: App) => {
	const store = useCommon()

	const i18n = createI18n({
		legacy: false,
		locale: store.lang,
		messages,
		warnHtmlMessage: false,
		warnHtmlInMessage: false
	})

	app.use(i18n)
}
