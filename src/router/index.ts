/*
 * @Description: 路由配置
 * @Author: Mankeung
 * @Date: 2022-09-26 23:25:31
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 00:03:37
 */

import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import useCommonStore from '@/store/common'

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior: async (to, from, savedPosition) => {
		if (savedPosition) return savedPosition

		if (to.matched.every((record, i) => from.matched[i] !== record)) return { left: 0, top: 0 }

		return false
	}
})

router.beforeEach((_to, _from, next) => {
	NProgress.configure({
		showSpinner: false
	})
	NProgress.start()

	next()
})

router.afterEach((to) => {
	const store = useCommonStore()
	const title: unknown[] = []

	if (to?.meta?.title) title.push(to.meta.title[store.lang])
	if (import.meta.env.VITE_APP_TITLE) title.push(import.meta.env.VITE_APP_TITLE)

	const str = title.join('-')

	document.title = str ?? 'mkimq'

	NProgress.done()
})

export default (app: App): void => {
	app.use(router)
}
