import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: "en-US",
    title: "vitepress",
    description: "vite & vue", // 描述
    appearance: true,
    base: '/Learning/',
    head: [
        ['link', { rel: 'preconnect', href: 'https://www.baidu.com', crossorigin: '' }]
    ],
    ignoreDeadLinks: true,
    lastUpdated: true,
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'vue', link: '/main/vue/index.md' },
                    { text: 'react', link: '/main/react/index.md' },
                    { text: 'uni-app', link: '/main/uni-app/index.md' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/xiaoka0520' },
            { icon: 'twitter', link: '...' },
            // You can also add custom icons by passing SVG as string:
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
                },
                link: '...'
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present kaka'
        },
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        lastUpdatedText: 'Updated Date',
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
          }
    }
})
