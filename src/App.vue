<template>
    <a-layout>
        <a-layout-header class="header">
            <div style="display: flex;">
                <router-link to="/">
                    <h1 class="logo">
                        Welcome 小工具
                    </h1>
                </router-link>
                <!-- <a-menu
                    theme="dark"
                    mode="horizontal"
                    :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="1">nav 1</a-menu-item>
                    <a-menu-item key="2">nav 2</a-menu-item>
                    <a-menu-item key="3">nav 3</a-menu-item>
                </a-menu> -->
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider
                width="200"
                style="background: #fff;"
            >
                <a-menu
                    v-model:selectedKeys="selectedKeys"
                    v-model:openKeys="openKeys"
                    mode="inline"
                    :style="{ height: '100%', borderRight: 0 }"
                >
                    <template
                        v-for="(item) in routes"
                        :key="item.name"
                    >
                        <!-- 有二级菜单 -->
                        <a-sub-menu
                            v-if="item.children && item.children.length > 0"
                            :key="item.name"
                        >
                            <template #title>
                                <span>
                                    <Icon :icon="item.meta.icon || ''"></Icon>
                                    {{ item.meta?.title }}
                                </span>
                            </template>
                            <!-- 子菜单 -->
                            <a-menu-item
                                v-for="(child) in item.children"
                                :key="child.name"
                            >
                                <router-link :to="{name: child.name}">
                                    {{ child?.meta?.title }}
                                </router-link>
                            </a-menu-item>
                        </a-sub-menu>
                        <!-- 无二级菜单 -->
                        <a-menu-item
                            v-else
                            :key="item.name"
                        >
                            <router-link :to="{name: item.name}">
                                <Icon :icon="item.meta.icon || ''"></Icon>
                                {{ item.meta?.title }}
                            </router-link>
                        </a-menu-item>
                    </template>
                </a-menu>
            </a-layout-sider>
            <a-layout
                class="body"
                style="padding: 24px;"
            >
                <!-- <a-breadcrumb style="margin: 16px 0;">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb> -->
                <a-layout-content
                    :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: 'auto' }"
                >
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
    import Icon from '@/components/layout/Icon.js';
    import { routes } from '@/router';
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const router = useRoute();
    // 当前选择的菜单
    const selectedKeys = ref<[string|symbol]>(['']);
    // 当前展开
    const openKeys = ref<[string|symbol]>(['']);
    watch(router, () => {
        // 处理刷新问题
        // 选中菜单
        selectedKeys.value = [router.name || ''];
        const matched = router.matched;
        if (matched.length > 1) {
            // 展开一级
            openKeys.value = [matched[0].name || ''];
        }
    });
</script>

<style lang="scss">
    @import "@/assets/styles/global.scss";

    .logo {
        font-size: 20px;
        color: white;
        font-weight: bold;
    }

    .body {
        height: calc(100vh - 64px);
        overflow: auto;
    }
</style>