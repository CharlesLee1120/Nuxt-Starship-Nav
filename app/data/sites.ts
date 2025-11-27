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
            },
            {
                title: 'DeepL',
                url: 'https://www.deepl.com',
                desc: '准确的 AI 翻译工具',
                icon: 'simple-icons:deepl'
            }
        ]
    },
    {
        title: 'AI 工具',
        icon: 'ph:robot-duotone',
        sites: [
            {
                title: 'Midjourney',
                url: 'https://www.midjourney.com',
                desc: 'AI 图像生成工具',
                icon: 'logos:midjourney'
            },
            {
                title: 'Claude',
                url: 'https://claude.ai',
                desc: 'Anthropic 开发的 AI 助手',
                icon: 'simple-icons:anthropic'
            },
            {
                title: 'Hugging Face',
                url: 'https://huggingface.co',
                desc: 'AI 模型和数据集社区',
                icon: 'logos:hugging-face-icon'
            },
            {
                title: 'Vercel v0',
                url: 'https://v0.dev',
                desc: 'AI 生成 UI 界面',
                icon: 'simple-icons:vercel'
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
                title: 'React',
                url: 'https://react.dev',
                desc: '用于构建用户界面的库',
                icon: 'logos:react'
            },
            {
                title: 'Next.js',
                url: 'https://nextjs.org',
                desc: 'React 框架',
                icon: 'logos:nextjs-icon'
            },
            {
                title: 'Svelte',
                url: 'https://svelte.dev',
                desc: '控制论增强的 Web 应用',
                icon: 'logos:svelte-icon'
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
            },
            {
                title: 'Figma',
                url: 'https://www.figma.com',
                desc: '在线协作界面设计工具',
                icon: 'logos:figma'
            },
            {
                title: 'Unsplash',
                url: 'https://unsplash.com',
                desc: '免费高清图片素材',
                icon: 'simple-icons:unsplash'
            }
        ]
    },
    {
        title: '图标库',
        icon: 'ph:sticker-duotone',
        sites: [
            {
                title: 'Iconify',
                url: 'https://iconify.design',
                desc: '统一的图标框架',
                icon: 'simple-icons:iconify'
            },
            {
                title: 'Phosphor Icons',
                url: 'https://phosphoricons.com',
                desc: '灵活的图标系列',
                icon: 'ph:phosphor-logo'
            },
            {
                title: 'Heroicons',
                url: 'https://heroicons.com',
                desc: 'Tailwind CSS 官方图标',
                icon: 'simple-icons:iconify'
            }
        ]
    },
    {
        title: '部署托管',
        icon: 'ph:cloud-duotone',
        sites: [
            {
                title: 'Vercel',
                url: 'https://vercel.com',
                desc: '前端开发者的云平台',
                icon: 'logos:vercel-icon'
            },
            {
                title: 'Netlify',
                url: 'https://www.netlify.com',
                desc: '构建、部署和扩展现代 Web 应用',
                icon: 'logos:netlify-icon'
            },
            {
                title: 'Cloudflare',
                url: 'https://www.cloudflare.com',
                desc: '全球网络平台',
                icon: 'logos:cloudflare-icon'
            },
            {
                title: 'Supabase',
                url: 'https://supabase.com',
                desc: '开源 Firebase 替代品',
                icon: 'logos:supabase-icon'
            }
        ]
    },
    {
        title: '学习社区',
        icon: 'ph:student-duotone',
        sites: [
            {
                title: 'Stack Overflow',
                url: 'https://stackoverflow.com',
                desc: '开发者问答社区',
                icon: 'logos:stackoverflow-icon'
            },
            {
                title: 'Dev.to',
                url: 'https://dev.to',
                desc: '开发者建设性社区',
                icon: 'logos:dev-icon'
            },
            {
                title: 'MDN',
                url: 'https://developer.mozilla.org',
                desc: 'Web 开发文档',
                icon: 'simple-icons:mdnwebdocs'
            },
            {
                title: '掘金',
                url: 'https://juejin.cn',
                desc: '中文开发者社区',
                icon: 'simple-icons:juejin'
            }
        ]
    }
]
