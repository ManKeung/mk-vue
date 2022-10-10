/*
 * @Description: vite 插件
 * @Author: Mankeung
 * @Date: 2022-09-26 15:32:00
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-10 21:26:57
 */

import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import restart from './restart'
import legacy from './legacy'
import html from './html'
import autoImport from './autoImport'
import components from './components'
import banner from './banner'
import icon from './icon'
import externals from './externals'
import cdn from '../cdn'
import mock from './mock'
import compression from './compression'
import progress from './progress'
import visualizer from './visualizer'
import { ANALYSIS } from '../../constant'
import inspector from './inspector'

export default (conf: any): PluginOption[] => {
    const vitePlugins: PluginOption = [
        vue(),
        vueJsx({
            transformOn: true,
            mergeProps: true
        }),
        legacy(),
        html(conf),
        autoImport(),
        components(),
        banner(),
        icon(),
        progress()
    ]

    if (conf.VITE_APP_CDN === 'ON') {
        const obj: any = {}

        cdn.forEach(pkg => {
            obj[pkg.name] = pkg.library
        })

        vitePlugins.push(externals(obj))
    }

    if (conf.VITE_APP_ENV === 'dev') vitePlugins.push(restart())
    if (conf.VITE_APP_ENV === 'dev') vitePlugins.push(inspector())
    if (conf.VITE_APP_MOCK === 'ON') vitePlugins.push(mock(conf))
    if (ANALYSIS) vitePlugins.push(visualizer())
    if (conf.VITE_APP_COMPRESS) vitePlugins.push(...compression(conf))

    return vitePlugins
}