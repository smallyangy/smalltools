<template>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240);"
        :title="route.meta.title"
        :avatar="{
            src: 'https://portrait.gitee.com/uploads/avatars/user/574/1724829_SmallYangY_1615976108.png'
        }"
        sub-title=""
    />
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const route = useRoute();
</script>