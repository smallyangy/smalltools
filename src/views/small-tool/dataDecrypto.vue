<template>
    <!-- 标题 -->
    <HeaderTitle></HeaderTitle>
    <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane
            key="1"
            tab="城市版"
        >
            <CityVer></CityVer>
        </a-tab-pane>
        <a-tab-pane
            key="2"
            tab="全国版"
            force-render
        >
            <NationalVer></NationalVer>
        </a-tab-pane>
    </a-tabs>
</template>

<script setup lang="ts">
    import HeaderTitle from '@/components/layout/HeaderTitle.vue';
    import CityVer from './components/decrypto/CityVer.vue';
    import NationalVer from './components/decrypto/NationalVer.vue';
    import { ref } from 'vue';

    const activeKey = ref('1');
</script>