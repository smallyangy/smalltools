// 配合ts解决组件引入类型报错问题
declare module '*.vue' {
    import type { DefineComponent } from 'vue';

    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '@/components/layout/Icon.js';
declare module 'jsoneditor/dist/jsoneditor.min.js';
declare module '@/utils/crypto2.js';
