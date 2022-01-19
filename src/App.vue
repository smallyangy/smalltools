<template>
    <div>
        app
        <a-button @click="handleClick">父级按钮</a-button>
        <p>测试一下自动同步部署gitee pages脚本是否生效</p>
        <p>测试一下自动同步部署gitee pages脚本是否生效</p>
        <p>
            <Test></Test>
        </p>
        <p>
            <Test2></Test2>
        </p>
    </div>
</template>

<script lang="ts" setup>
    import Test from './components/Test.vue';
    import Test2 from './components/Test2.vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const handleClick = () => {
        store.commit('user/UPDATE_USER_INFO', {
            name: '123',
        });
    };
</script>

<style lang="scss">

</style>