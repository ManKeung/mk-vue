/*
 * @Description: navbar้็ฝฎ
 * @Author: Mankeung
 * @Date: 2022-09-28 16:07:50
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-13 12:34:03
 */

import type { NavbarConfig } from '@vuepress/theme-default'
import pkg from '../../../package.json'

import { GIT_NAME } from '../conf'

const navbar: NavbarConfig = [
    {
        text: '๐ๆๅ',
        link: '/guide/',
    },
    {
        text: '๐้็ฝฎๅ่',
        link: '/config/',
    },
    {
        text: '๐ชงๅ่ฝ',
        link: '/function/',
    },
    {
        text: '๐API',
        link: '/api/',
    },
    {
        text: `โจv${pkg.version}`,
        children: [
            {
                text: '๐ๆดๆฐๆฅๅฟ',
                link: '/changlog/'
            }
        ]
    },
    {
        text: '๐ๆ่ต',
        link: '/reward/'
    },
    {
        text: 'Gitee',
        link: `https://gitee.com/mankeung/${GIT_NAME}`
    }
]

export default navbar
