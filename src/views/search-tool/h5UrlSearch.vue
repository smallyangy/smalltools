<template>
    <!-- 标题 -->
    <HeaderTitle></HeaderTitle>
    <!--  -->
</template>

<script lang="ts" setup>
    import HeaderTitle from '@/components/layout/HeaderTitle.vue';
    import crypto from '@/utils/crypto.js';

    // 测试城市版解码
    const apiSecretSign = 'IdQ1lmLEB78J1VHvVAMytEoqPXMcKsqjBNAIVGMGYYzjVJhg4/i86i7JluuO2GWbJI2aKsR4oJ7PhFvB9EYWPYMWYuRdgwz1NSrdrZ5eKh4Ngqjpawp1ztjR3lMsSUy6EcmLkwTZ78PKUNAz1RKtlR/vX7JGsIk/83Zp6NyywjY=';
    const responseData = 'ynlsstNIMe2w2CUru7odf7PflunrxNZ97OclNDWIU5ginazrElpaK+aAPeqkSwdujX7WqRdYXAvIwpLVRjxTcA==';

    console.log('城市版', crypto.decryptCityData(apiSecretSign, responseData));

    // 测试全国版解码
    const apiSecretSign2 = 'RlZAXeNtghC4jm7Vqf5awObjI1lAOkOqKxKM8WelHOG8uWOnvPrllqPvlvFXu4m3INweZMKVHnIOo9TGazQh6lZS+oqjhouWyJMXNpXJ5z5QPKNWr0j2ODT80TXbiMrGkjfBAB+CvD3jWqc1/3etQO09R3l5B8H5C7APS+plQUI=';

    const responseData2 = '6LXFWnKFnu2LL3SOITHArsZ9XLdTaPEJOYn/k0PsfAliQ9w65ef8FT9DsZadE71lEo+GURh5tSyLyVl334Tf95NG/rMK4Nm1guA5TnAgaxcDfv1HwTpD0rJCgYatWzbt';

    console.log('全国版', crypto.decryptNationalData(apiSecretSign2, responseData2));
</script>

<style lang="scss">
</style>