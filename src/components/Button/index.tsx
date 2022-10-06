/*
 * @Description: button
 * @Author: Mankeung
 * @Date: 2022-09-29 09:58:37
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-29 10:43:52
 */

import css from './index.module.scss'
import Props from './type'

export default defineComponent({
	// eslint-disable-next-line vue/no-reserved-component-names
	name: 'Button',
	props: Props,
	emits: ['click'],
	setup(props, { emit }) {
		// TODO 点击
		const handleClick = (e: Event) => {
			emit('click', e)
		}

		const cls = computed(() => {
			if (['big', 'min'].indexOf(props.size) > -1) return `mk-button-${props.size}`

			return ''
		})

		return () => (
			<div onClick={handleClick} class={[css['mk-button'], css[cls.value]]}>
				{props.value}
			</div>
		)
	}
})
