/*
 * @Description: 配置
 * @Author: Mankeung
 * @Date: 2022-09-28 15:57:37
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-30 21:35:00
 */

import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import Theme from './theme'
import path from 'path'
import navbar from './navbar'
import sidebar from './sidebar'
import * as CONF from './conf'

const baseURL: any = process.env.NODE_ENV === 'development' ? '/' : `/docs/${CONF.GIT_NAME}/`

export default defineUserConfig({
    // TODO 打包输出目录
    dest: path.resolve(process.cwd(), `../mk-docs/docs/${CONF.GIT_NAME}`),
    // TODO 开发配置
    port: CONF.PORT,
    open: CONF.OPEN,
    // TODO 站点配置
    base: baseURL, // 站点基础路径
    lang: 'zh-CN', // 语言配置 默认 en-US
    title: CONF.COMP_NAME, // 站点title
    description: '好记性不如烂笔头', // 站点描述
    head: [ // 设置head
        ['link', {
            rel: 'icon',
            href: `${baseURL}logo.png`
        }]
    ],
    // TODO 主题其他配置
    theme: Theme.localTheme({
        colorMode: 'light',
        colorModeSwitch: true,
        logo: '/logo.png',
        logoDark: '/logo.png', // 夜间模式logo null 禁用
        repo: `${CONF.GIT_URL}/${CONF.GIT_NAME}`, // 项目仓库的 URL vuejs/vuepress
        editLink: true, // 编辑页面
        lastUpdated: true, // 启用更新时间
        contributors: true, // 贡献者启用
        home: '/', // 首页路径
        selectLanguageText: '语言', // 选择语言菜单的文字
        selectLanguageName: '简体中文',
        backToHome: '回到首页', // 回到首页
        toggleSidebar: '切换侧边栏',
        notFound: ['页面丢了哟~', '没发现呀~'],
        editLinkText: '发现了错误或者想要为文档做贡献？编辑',
        docsRepo: `${CONF.GIT_URL}/${CONF.GIT_NAME}`,
        docsBranch: CONF.DOCS_BRANCH,
        docsDir: CONF.DOCS_DIR,
        lastUpdatedText: '最近更新时间',
        contributorsText: '贡献者',
        navbar,
        sidebarDepth: 1,
        sidebar,
        // TODO 插件配置
        themePlugins: {
            backToTop: true,
            nprogress: true,
            git: true,
            externalLinkIcon: true
        },
    }),
    markdown: {
        importCode: {
            handleImportPath(str) {
                return str.replace(/^@/, path.resolve(process.cwd(), './'))
            }
        },
        // extractHeaders: {
        //     level: [2, 3, 4]
        // }
    },
    alias: {
        '@src': path.resolve(process.cwd(), 'src')
    },
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索文档关键字'
                },
                '/en/': {
                    placeholder: 'Search',
                }
            }
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
        copyCodePlugin({
            pure: true
        })
    ]
})