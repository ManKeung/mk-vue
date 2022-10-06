/*
 * @Description: count
 * @Author: Mankeung
 * @Date: 2022-09-27 22:26:06
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-27 23:50:20
 */

import { defineStore } from 'pinia'

const useStore = defineStore({
	id: '__COMMON__',
	state: () => ({
		count: 0,
		lang: 'zh-CN'
	}),
	getters: {
		// TODO 是奇数
		isOdd: (state) => {
			return state.count % 2 === 1
		}
	},
	actions: {
		// TODO 自增
		increment() {
			this.count += 1
		},
		// TODO 语言切换
		changeLange() {
			this.lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN'
		}
	},
	persist: {
		enabled: true,
		strategies: [
			{
				storage: sessionStorage,
				paths: ['count']
			},
			{
				storage: localStorage,
				paths: ['lang']
			}
		]
	}
})

export default useStore
