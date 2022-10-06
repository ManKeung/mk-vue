/*
 * @Description: 入口文件
 * @Author: Mankeung
 * @Date: 2022-09-24 15:14:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 23:54:29
 */

import { createApp } from 'vue'
import App from './App.vue'
import reportWebVitals from './reportWebVitals'
import 'normalize.css'
import './style/index.scss'
import 'virtual:svg-icons-register'
import setupGlobal from './global'
import setupRouter from './router'
import setupStore from './store'
import setupLang from './lang'
import setupDirectives from './directives'
import setupComponents from './components'
import { PX2REM } from '../build/constant'

// ! 移动端适配
if (PX2REM) await import('amfe-flexible')

const app = createApp(App)

// 全局挂载
setupGlobal(app)
// 路由挂载
setupRouter(app)

// store
setupStore(app)

// 国际化
setupLang(app)

// 自定义指令
setupDirectives(app)

// 全局注册组件
setupComponents(app)

// 挂载
app.mount('#app')

// 性能检测
reportWebVitals(console.log)
