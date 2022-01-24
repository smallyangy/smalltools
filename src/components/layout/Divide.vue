<template>
    <div
        :style="styles"
        class="zui-divide"
    >
        <slot>
        </slot>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps, PropType, CSSProperties, ref } from 'vue';

    const props = defineProps({
        color: {
            type: String as PropType<string>,
            default: '#d9d9d9',
        },
    });

    // 处理css变量
    interface CSSPropertiesWithVars extends CSSProperties {
        '--color': string
    }

    const styles = ref<CSSPropertiesWithVars>({
        '--color': props.color,
    });
    
</script>

<style lang="scss">
    %border {
        height: 1px;
        background: var(--color);
        flex: 1;
    }

    .zui-divide {
        position: relative;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color);

        &::before {
            content: "";

            @extend %border;

            // margin-right: 10px;
        }

        &::after {
            content: "";

            @extend %border;

            // margin-left: 10px;
        }
    }
</style>
