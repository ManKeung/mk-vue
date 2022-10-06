/*
 * @Description: plugins
 * @Author: Mankeung
 * @Date: 2022-09-26 15:31:39
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 16:51:22
 */

import server from './server'
import resolve from './resolve'
import css from './css'
import build from './build'
import plugins from './plugins'
import { BASE_URL as base } from '../constant'

export default (conf: any): any => {
    return {
        base,
        server: server(conf),
        resolve,
        css,
        build: build(conf),
        plugins: plugins(conf)
    }
}