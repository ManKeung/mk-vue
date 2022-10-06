/*
 * @Description: window
 * @Author: Mankeung
 * @Date: 2022-09-25 21:38:55
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 12:46:15
 */

declare interface Window {
    _cancelHttpArr: typeof import('axios').Canceler[],
    $mk: {
        http: typeof import('@/http').default,
        utils: typeof import('@/utils').default,
    }
}