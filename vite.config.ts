/*
 * @Description: vite配置
 * @Author: Mankeung
 * @Date: 2022-09-24 15:14:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 16:12:12
 */

import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vite from './build/vite'

export default ({ mode }: ConfigEnv) => {
	const env = loadEnv(mode, process.cwd())

	return defineConfig(vite(env))
}
