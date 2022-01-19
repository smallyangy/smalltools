<template>
    <div>
        test2
        <a-button>test2按钮</a-button>
        <div>
            {{ userInfo }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const userInfo = computed(() => store.state.user.userInfo);
</script>

<style>

</style>