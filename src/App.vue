<template>
    <a-layout>
        <a-layout-header class="header">
            <div style="display: flex;">
                <router-link to="/">
                    <div class="logo">
                        Welcome 小工具
                    </div>
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
            <a-layout-sider width="200" style="background: #fff;">
                <a-menu
                    mode="inline"
                    :style="{ height: '100%', borderRight: 0 }"
                >
                    <a-menu-item key="sub1">
                        <template #icon>
                            <home-outlined />
                        </template>
                        <router-link to="/">
                            首页
                        </router-link>
                    </a-menu-item>
                    <a-sub-menu key="sub2">
                        <template #title>
                            <span>
                                <tool-outlined />
                                小工具
                            </span>
                        </template>
                        <a-menu-item key="5">
                            <router-link to="/smalltool/articleToMini">文章转小程序链接</router-link>
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout class="body" style="padding: 24px 24px 24px;">
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
    import { HomeOutlined, ToolOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss">
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