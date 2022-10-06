/*
 * @Description: sidebar
 * @Author: Mankeung
 * @Date: 2022-09-28 22:02:33
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 21:49:55
 */
import type { SidebarConfig } from '@vuepress/theme-default'
import guide from './guide'
import config from './config'
import func from './function'
import api from './api'

const sidebar: SidebarConfig = {
    '/guide/': guide,
    '/reward/': guide,
    '/changlog/': guide,
    '/config/': config,
    '/function/': func,
    '/api/': api
}

export default sidebar