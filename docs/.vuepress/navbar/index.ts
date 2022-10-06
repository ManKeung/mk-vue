/*
 * @Description: navbar配置
 * @Author: Mankeung
 * @Date: 2022-09-28 16:07:50
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 21:53:31
 */

import type { NavbarConfig } from '@vuepress/theme-default'
import pkg from '../../../package.json'

import { GIT_NAME } from '../conf'

const navbar: NavbarConfig = [
    {
        text: '指南',
        link: '/guide/',
    },
    {
        text: '配置参考',
        link: '/config/',
    },
    {
        text: '功能',
        link: '/function/',
    },
    {
        text: 'API',
        link: '/api/',
    },
    {
        text: `v${pkg.version}`,
        children: [
            {
                text: '更新日志',
                link: '/changlog/'
            }
        ]
    },
    {
        text: '打赏',
        link: '/reward/'
    },
    {
        text: 'Gitee',
        link: `https://gitee.com/mankeung/${GIT_NAME}`
    }
]

export default navbar