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
                    title: 'h5转小程序链接',
                    icon: '',
                },
            },
            {
                path: 'jsonTool',
                name: 'JsonTool',
                component: () => import('@/views/small-tool/jsonTool.vue'),
                meta: {
                    title: 'json工具',
                    icon: '',
                },
            },
        ],
    },
    {
        path: '/searchtool',
        name: 'SearchTool',
        component: () => import('@/views/search-tool/index.vue'),
        meta: {
            title: '查询工具',
            icon: 'SearchOutlined',
        },
        children: [
            {
                path: 'h5UrlSearch',
                name: 'H5UrlSearch',
                component: () => import('@/views/search-tool/h5UrlSearch.vue'),
                meta: {
                    title: 'h5地址查询',
                    icon: '',
                },
            },
            {
                path: 'citySearch',
                name: 'CitySearch',
                component: () => import('@/views/search-tool/citySearch.vue'),
                meta: {
                    title: '城市查询',
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