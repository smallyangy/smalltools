<template>
    <!-- 标题 -->
    <HeaderTitle></HeaderTitle>
    <div
        ref="jsoneditor"
        class="zy-jsoneditor"
    ></div>
</template>

<script setup lang="ts">
    import HeaderTitle from '@/components/layout/HeaderTitle.vue';
    import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
    import 'jsoneditor/dist/jsoneditor.min.css';
    import { onMounted, ref } from 'vue';

    const jsoneditor = ref(null);
    onMounted(() => {
        const options = {
            mode: 'code',
            // 模式是代码模式:可以全部编辑所有内容
            // mode:'form',
            // 表格模式，只能修改value模式，这个正是需要的.
            // mode:"text",
            // mode:"view",
            // mode:"preview",
            // 预览模式，可以支持超大的json文本传入
            // onChange() {
            //     // console.log('change')
            //     // 加的钩子，装载的json发生修改之后触发的函数
            // },
            // onChangeJSON(json) {
            //     // 也是改变之后的，但是会有一个改变之后的json传递出来
            //     console.log(json);
            // },
            // onChangeText(jsonString) {
            //     // console.log(jsonString)
            //     // 返回一个字符串
            // },
            // // 只能是用户主动的修改才会触发，程序改变的情况下不会触发，比如set,setText,update,updateText
            // onError(error) {
            //     coonsole.log('发生了报错');
            // },
            // onModeChange(newMode, oldMode) {
            //     // 发生了更改模式立即触发的函数
            // },
            // onValidate(json) {
            //     let errors = [];
            //     if (json && json.params) {
            //         console.log('正确');
            //     } else {
            //         console.log('修改失败');
            //     }
            //     // 每次修改json之后应该判断一下数据结构是否是正确的
            // },
            history: false,
            mainMenuBar: true,
            navigationBar: false,
            statusBar: true,
        };

        const initialJson = {};
        // const editor = 
        new JSONEditor(jsoneditor.value, options, initialJson);
        // editor.set(initialJson)
        // 也可以使用这个方法后期注入

        // 获得修改之后的数据
        // const updatedJson = editor.get();
        // editor.expandAll();
    });
</script>

<style lang="scss">
    .jsoneditor-poweredBy,
    .jsoneditor-sort,
    .jsoneditor-transform {
        display: none;
    }

    .zy-jsoneditor {
        height: calc(100vh - 240px);
    }
</style>