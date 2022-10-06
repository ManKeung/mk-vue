/*
 * @Description: props
 * @Author: Mankeung
 * @Date: 2022-09-29 09:58:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-29 10:28:21
 */

import { PropType } from 'vue'

export default {
	value: {
		type: [String, Number] as PropType<string | number>,
		default: null
	},
	size: {
		type: [String] as PropType<'big' | 'min'>,
		default: null
	}
}
