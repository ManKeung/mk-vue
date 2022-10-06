/*
 * @Description: 全局挂载
 * @Author: Mankeung
 * @Date: 2022-09-28 09:50:11
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 19:32:16
 */

import { App } from 'vue'
import http from '@/http'
import utils from '@/utils'
import pkg from '../../package.json'

const $mk = {
	version: pkg.version,
	http,
	utils
}

// TODO 便于 this.$mk ... 不报错
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$mk: typeof $mk
	}
}

// ! 根据情况选择你需要挂载的地方，挂载名字不要冲突
export default (app: App) => {
	// TODO 挂载到全局window上
	if (!window.$mk) window.$mk = $mk

	// TODO 挂载到vue上
	app.use({
		install: (app) => {
			app.config.globalProperties.$mk = $mk
		}
	})
}

if (import.meta.env.VITE_APP_ENV === 'dev') {
	console.log(
		`\n\n %c ${pkg.name} v${pkg.version} %c ${pkg.author} %c ${pkg.homepage} \n\n`,
		'color: #ffffff; background: #3c9cff; padding:5px 0;',
		'color: #fff;background: #f9ae3d; padding:5px 0;',
		'background: #909399; padding:5px 0;'
	)
}
