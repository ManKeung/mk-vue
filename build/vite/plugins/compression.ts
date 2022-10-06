/*
 * @Description: 压缩
 * @Author: Mankeung
 * @Date: 2022-10-05 17:04:59
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 17:07:04
 */

import compression from 'vite-plugin-compression'

export default (conf: any) => {
    const { VITE_APP_COMPRESS = ''} = conf
    const compressList = VITE_APP_COMPRESS.split(',')
    const plugin = []
    if (compressList.includes('gzip')) {
        plugin.push(
            compression({
                ext: '.gz',
                deleteOriginFile: false
            })
        )
    }
    if (compressList.includes('brotli')) {
        plugin.push(
            compression({
                ext: '.br',
                algorithm: 'brotliCompress',
                deleteOriginFile: false
            })
        )
    }
    return plugin
}