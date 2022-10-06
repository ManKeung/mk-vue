import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export default {
    localTheme(options: any) {
        return {
            name: 'vuepress-theme-local',
            extends: defaultTheme(options),
            layouts: {
                Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
                404: path.resolve(__dirname, 'layouts/404.vue')
            }
        }
    }
}