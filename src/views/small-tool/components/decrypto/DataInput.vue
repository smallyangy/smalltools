<template>
    <a-form
        ref="formRef"
        :model="form"
        :label-col="{ style: { width: '180px' } }"
        :rules="rules"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
        <a-form-item
            name="txt1"
        >
            <template #label>
                {{ props.title1 }}
                <a-button
                    shape="circle"
                    @click="handePaste('txt1')"
                >
                    <template #icon>
                        <Icon icon="RightOutlined"></Icon>
                    </template>
                </a-button>
            </template>
            <a-textarea
                v-model:value.trim="form.txt1"
                :placeholder="`请输入${props.title1}`"
                :rows="4"
            />
        </a-form-item>
        <a-form-item
            name="txt2"
        >
            <template #label>
                {{ props.title2 }}
                <a-button
                    shape="circle"
                    @click="handePaste('txt2')"
                >
                    <template #icon>
                        <Icon icon="RightOutlined"></Icon>
                    </template>
                </a-button>
            </template>
            <a-textarea
                v-model:value.trim="form.txt2"
                :placeholder="`请输入${props.title2}`"
                :rows="8"
            />
        </a-form-item>
        <a-form-item :wrapper-col="{ style: { marginLeft: '180px' } }">
            <a-button
                type="primary"
                danger
                @click="handleReset"
            >
                重置
            </a-button>
            <a-button
                type="primary"
                style="margin-left: 20px;"
                html-type="submit"
            >
                解析
            </a-button>
        </a-form-item>
    </a-form>
    <!-- 显示json -->
    <div
        v-show="decryptoStr"
        ref="jsoneditor"
        class="jsoneditor-dom"
    ></div>
</template>

<script lang="ts" setup>
    import { ref, defineProps, withDefaults, onMounted, reactive } from 'vue';
    import crypto from '@/utils/crypto.js';
    import { message } from 'ant-design-vue';
    import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
    import 'jsoneditor/dist/jsoneditor.min.css';
    import Icon from '@/components/layout/Icon.js';

    const props = withDefaults(defineProps<{
        title1: string;
        title2: string;
        type: string;
    }>(), {
        title1: '',
        title2: '',
    });

    const form = reactive({
        txt1: '',
        txt2: '',
    });
    const rules = {
        txt1: [{ required: true, trigger: 'change', message: '不能为空' }],
        txt2: [{ required: true, trigger: 'change', message: '不能为空' }],
    };

    const jsoneditor = ref(null);
    type SetFunc = (a: string) => void;
    let editorObj = ref<{
        set: SetFunc;
        expandAll:() => void;
    }>({
        set: () => {},
        expandAll: () => {},
    });
    onMounted(() => {
        editorObj.value = new JSONEditor(jsoneditor.value, {
            mode: 'code',
            history: false,
            mainMenuBar: true,
            navigationBar: false,
            statusBar: true,
        });
    });

    const formRef = ref();
    
    const handleReset = () => {
        formRef.value.resetFields();
        decryptoStr.value = '';
    };

    const decryptoStr = ref('');
    const onFinish = (values: any) => {
        const { txt1, txt2 } = values;
        try {
            if (props.type === 'city') {
                decryptoStr.value = crypto.decryptCityData(txt1, txt2);
            } else if (props.type === 'national') {
                decryptoStr.value = crypto.decryptNationalData(txt1, txt2);
            }
            if (decryptoStr.value && editorObj.value) {
                editorObj.value.set(JSON.parse(decryptoStr.value));
            } else {
                throw new Error();
            }
        } catch (err) {
            message.warning('解析失败!');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handePaste = (key: 'txt1' | 'txt2') => {
        try {
            navigator.clipboard.readText().then(text => {
                form[key] = text;
            });
        } catch (_) {
            message.warning('当前浏览器不支持粘贴功能，请手动Ctrl+v');
        }
    };
    
</script>

<style>
    .jsoneditor-dom {
        height: calc(100vh - 120px);
        margin-top: 20px;
    }

    .jsoneditor-poweredBy,
    .jsoneditor-sort,
    .jsoneditor-transform {
        display: none;
    }
</style>