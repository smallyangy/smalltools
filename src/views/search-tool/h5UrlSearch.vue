<template>
    <!-- 标题 -->
    <HeaderTitle></HeaderTitle>
    <div>
        还在路上...
    </div>
    <!-- <div>
        {{ counter.count }}

        <a-button @click="handlePlus">++</a-button>
    </div>
    <div>
        {{ user.userInfo }}
        <a-button @click="handleUpdate">update</a-button>
    </div> -->
    <a-button @click="handleTestAPI">请求接口</a-button>
</template>

<script lang="ts" setup>
    import HeaderTitle from '@/components/layout/HeaderTitle.vue';
    // import { useCounterStore } from '@/stores/counter';
    import { useUserStore } from '@/stores/user';
    import { testPlus } from '@/apis/test';

    // const counter = useCounterStore();
    // const handlePlus = () => {
    //     counter.count++;
    // };
    const user = useUserStore();
    console.log(user.userInfo);
    // const handleUpdate = () => {
    //     user.updateUserInfo({
    //         name: 'zy',
    //         role: 'boss',
    //         tel: 1368404763,
    //     });
    // };

    const handleTestAPI = () => {
        testPlus({ a: 2, b: 3 }).then(res => {
            console.log(res);
        });
    };
</script>

<style lang="scss">
    .box {
        font-size: 12px;
    }
</style>