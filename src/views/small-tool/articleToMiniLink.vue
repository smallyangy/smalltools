<template>
    <!-- 标题 -->
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240);"
        title="h5转小程序链接"
        :avatar="{
            src: 'https://portrait.gitee.com/uploads/avatars/user/574/1724829_SmallYangY_1615976108.png'
        }"
        sub-title=""
    />
    <!-- 转换器 -->
    <a-select
        v-model:value="urlType"
        style="width: 100%;"
        @change="handleComputedMiniUrl"
    >
        <a-select-option
            v-for="(item) in dataSource"
            :key="item.key"
        >
            {{ item.name }}
        </a-select-option>
    </a-select>
    <a-textarea
        v-model:value.trim="h5url"
        placeholder="请输入h5链接"
        :rows="4"
        allowClear
        @change="handleComputedMiniUrl"
    />
    <a-card style="width: 100%;">
        <div
            class="hover-class"
            @click="handleCopy(switchUrl)"
        >
            {{ switchUrl }}
        </div>
    </a-card>
    <!-- 转换器 -->
    <Divide>小程序地址</Divide>
    <div>
        <a-table
            :data-source="dataSource"
            :columns="columns"
            :pagination="false"
        >
            <template #bodyCell="{ column, text }">
                <template v-if="column.dataIndex === 'url'">
                    <div
                        class="hover-class"
                        @click="handleCopy(text)"
                    >
                        <Icon icon="CopyOutlined"></Icon>{{ text }}
                    </div>
                </template>
            </template>
        </a-table>
    </div>
    <!-- subPackages/tools/pages/webview -->
</template>

<script lang="ts" setup>
    import Divide from '@/components/layout/Divide.vue';
    import { ref } from 'vue';
    import clipboard from '@/utils/clipboard';
    import { message } from 'ant-design-vue';
    import Icon from '@/components/layout/Icon.js';

    const dataSource = ref([
        {
            key: 1,
            name: '城市版小程序h5地址',
            url: '/subPackages/tools/pages/webview?redirect=',
        },
        {
            key: 2,
            name: '全国版小程序h5地址(通用)',
            url: '/subpackages/webview/pages/external/index?target=',
        },
        {
            key: 3,
            name: '全国版小程序h5地址(vr)',
            url: '/subpackages/webview/pages/vr/index?target=',
        },
        {
            key: 4,
            name: '全国版小程序h5地址(航拍)',
            url: '/subpackages/webview/pages/aerial/index?target=',
        },
        {
            key: 5,
            name: '全国版小程序h5地址(看点文章)',
            url: '/subpackages/webview/pages/article/index?target=',
        },
    ]);
    const columns = ref([
        {
            title: '页面名称',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: '路径',
            key: 'url',
            dataIndex: 'url',
        },
    ]);

    // 复制
    const handleCopy = (str: string) => {
        clipboard.setClipboard({
            data: str,
            success: () => {
                message.success('复制成功!');
            },
        });
    };

    const urlType = ref<number>(1);
    const h5url = ref<string>('');
    const switchUrl = ref<string>('');

    const handleComputedMiniUrl = () => {
        const prefix = dataSource.value.find(item => item.key === urlType.value);
        if (!prefix) return;
        switchUrl.value = `${prefix.url}${encodeURIComponent(h5url.value)}`;
    };
</script>

<style lang="scss">

</style>