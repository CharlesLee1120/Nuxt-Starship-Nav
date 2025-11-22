import type { Category } from '../types'

export const categories: Category[] = [
    {
        title: '常用工具',
        icon: 'ph:wrench-duotone',
        sites: [
            {
                title: 'Google',
                url: 'https://www.google.com',
                desc: '全球最大的搜索引擎',
                icon: 'logos:google-icon'
            },
            {
                title: 'GitHub',
                url: 'https://github.com',
                desc: '代码托管平台',
                icon: 'logos:github-icon'
            },
            {
                title: 'ChatGPT',
                url: 'https://chat.openai.com',
                desc: 'OpenAI 开发的人工智能聊天机器人',
                icon: 'simple-icons:openai'
            }
        ]
    },
    {
        title: '开发框架',
        icon: 'ph:code-duotone',
        sites: [
            {
                title: 'Nuxt',
                url: 'https://nuxt.com',
                desc: 'Vue.js 的通用应用框架',
                icon: 'logos:nuxt-icon'
            },
            {
                title: 'Vue.js',
                url: 'https://vuejs.org',
                desc: '渐进式 JavaScript 框架',
                icon: 'logos:vue'
            },
            {
                title: 'Tailwind CSS',
                url: 'https://tailwindcss.com',
                desc: '原子化 CSS 框架',
                icon: 'logos:tailwindcss-icon'
            }
        ]
    },
    {
        title: '设计资源',
        icon: 'ph:paint-brush-duotone',
        sites: [
            {
                title: 'Dribbble',
                url: 'https://dribbble.com',
                desc: '设计师灵感社区',
                icon: 'logos:dribbble-icon'
            },
            {
                title: 'Behance',
                url: 'https://www.behance.net',
                desc: '展示和发现创意作品',
                icon: 'logos:behance'
            }
        ]
    }
]
