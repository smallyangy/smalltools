import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/smalltool',
        name: 'SmallTool',
        component: () => import('@/views/small-tool/index.vue'),
        children: [
            {
                path: 'articleToMini',
                name: 'ArticleToMini',
                component: () => import('@/views/small-tool/articleToMiniLink.vue'),
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