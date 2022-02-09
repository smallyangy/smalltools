<template>
    <!-- 标题 -->
    <HeaderTitle></HeaderTitle>
    <!--  -->
    <img :src="src">
</template>

<script lang="ts" setup>
    import HeaderTitle from '@/components/layout/HeaderTitle.vue';
    import { onMounted, ref } from 'vue';
    
    const src = ref();
    onMounted(() => {
        fetch('https://picsum.photos/300/300').then(res => res.blob()).then(res => {
            src.value = window.URL.createObjectURL(res);
        });
    }); 
</script>

<style lang="scss">
</style>