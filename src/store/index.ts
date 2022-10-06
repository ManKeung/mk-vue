/*
 * @Description: pinia
 * @Author: Mankeung
 * @Date: 2022-09-27 22:45:58
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-27 22:48:05
 */

import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

export default (app: App): void => {
	const store = createPinia()
	store.use(piniaPluginPersist)

	app.use(store)
}
