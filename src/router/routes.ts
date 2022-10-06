/*
 * @Description: 静态路由配置
 * @Author: Mankeung
 * @Date: 2022-09-26 23:26:50
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 00:03:01
 */

import { RouteRecordRaw } from 'vue-router'

const routers: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		meta: {
			title: {
				'zh-CN': '首页',
				'en-US': 'home'
			}
		},
		component: () => import('@/pages/home.vue')
	},
	{
		path: '/reload',
		name: 'reload',
		meta: {
			title: {
				'zh-CN': '刷新中',
				'en-US': 'refreshing'
			}
		},
		component: () => import('@/pages/reload.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		meta: {
			title: {
				'zh-CN': '找不到页面',
				'en-US': 'page not found'
			}
		},
		component: () => import('@/pages/404.vue')
	}
]

export default routers
