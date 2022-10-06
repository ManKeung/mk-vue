/*
 * @Description: 功能
 * @Author: Mankeung
 * @Date: 2022-10-05 18:39:20
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 18:46:14
 */

import guide from './guide'
import config from './config'

export default [
    ...guide.map(item => ({
        collapsible: true,
        ...item
    })),
    ...config.map(item => ({
        collapsible: true,
        ...item
    }))
]