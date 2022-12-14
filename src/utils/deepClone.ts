/*
 * @Description: 深拷贝
 * @Author: Mankeung
 * @Date: 2022-09-28 13:22:11
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 13:23:55
 */

/**
 * @Author: Mankeung
 * @description: 深拷贝
 * @param {T} target
 * @return {T}
 */
function deepClone<T>(target: T): T {
	// 定义一个变量
	let result: any
	// 如果当前需要深拷贝的是一个对象的话
	if (typeof target === 'object') {
		// 如果是一个数组的话
		if (Array.isArray(target)) {
			result = [] // 将result赋值为一个数组，并且执行遍历
			for (const i in target) {
				// 递归克隆数组中的每一项
				result.push(deepClone(target[i]))
			}
			// 判断如果当前的值是null的话；直接赋值为null
		} else if (target === null) {
			result = null
			// 判断如果当前的值是一个RegExp对象的话，直接赋值
		} else if (target.constructor === RegExp) {
			result = target
		} else {
			// 否则是普通对象，直接for in循环，递归赋值对象的所有值
			result = {}
			for (const i in target) {
				result[i] = deepClone(target[i])
			}
		}
		// 如果不是对象的话，就是基本数据类型，那么直接赋值
	} else {
		result = target
	}
	// 返回最终结果
	return result
}

export default deepClone
