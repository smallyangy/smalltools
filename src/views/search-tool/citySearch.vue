<template>
    <!-- 标题 -->
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240);"
        title="城市查询"
        :avatar="{
            src: 'https://portrait.gitee.com/uploads/avatars/user/574/1724829_SmallYangY_1615976108.png'
        }"
        sub-title=""
    />
    <!-- 推荐城市  -->
    <a-card title="推荐城市">
        <a-card-grid
            v-for="(city, index) in recommendCitys"
            :key="index"
            style="width: 25%; text-align: center;"
            :hoverable="false"
        >
            <div
                class="hover-class"
                @click="handleCopy(city.name)"
            >
                {{ city.name }}
            </div>
            <div
                class="hover-class"
                @click="handleCopy(city.city_id)"
            >
                {{ city.city_id }}
            </div>
            <!-- <div
                class="hover-class"
                @click="handleCopy(city.app_id)"
            >
                {{ city.app_id }}
            </div> -->
        </a-card-grid>
    </a-card>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue';
    import clipboard from '@/utils/clipboard';
    import { message } from 'ant-design-vue';

    const recommendCitys = reactive([
        {
            city_id: '440300',
            name: '深圳市',
            app_id: 'wx56e7d11c3d442700',
        },
        {
            city_id: '310100',
            name: '上海市',
            app_id: 'wx56e7d11c3d442700',
        },
        {
            city_id: '330200',
            name: '宁波市',
            app_id: 'wx56e7d11c3d442700',
        },
        {
            city_id: '610100',
            name: '西安市',
            app_id: 'wx56e7d11c3d442700',
        },
        {
            city_id: '510100',
            name: '成都市',
            app_id: 'wx307458db245a39a0',
        },
        {
            city_id: '330100',
            name: '杭州市',
            app_id: 'wx427d97dcecaf9d0d',
        },
        {
            city_id: '320100',
            name: '南京市',
            app_id: 'wx394cf3c336acac71',
        },
        {
            city_id: '420100',
            name: '武汉市',
            app_id: 'wx49cf5d668e28cc7f',
        },
    ]);

    const handleCopy = (str: string) => {
        clipboard.setClipboard({
            data: str,
            success: () => {
                message.success('复制成功!');
            },
        });
    };
</script>

<style lang="scss">
    @import '@/assets/styles/default.scss';
</style>