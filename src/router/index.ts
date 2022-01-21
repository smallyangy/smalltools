import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home/index.vue';

type CustomRoutes = RouteRecordRaw & {
    meta: {
        title?: string,
        icon?: string
    }
}

export const routes: Array<CustomRoutes> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页',
            icon: 'HomeOutlined',
        },
    },
    {
        path: '/smalltool',
        name: 'SmallTool',
        component: () => import('@/views/small-tool/index.vue'),
        meta: {
            title: '小工具',
            icon: 'ToolOutlined',
        },
        children: [
            {
                path: 'articleToMini',
                name: 'ArticleToMini',
                component: () => import('@/views/small-tool/articleToMiniLink.vue'),
                meta: {
                    title: '文章转小程序链接',
                    icon: '',
                },
            },
        ],
    },
];

const router = createRouter({
    // createWebHistory(base) 
    history: createWebHistory('/smalltools'),
    routes,
});

export default router;