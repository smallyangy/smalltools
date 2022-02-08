<template>
    <div>请输入{{ props.title1 }}:</div>
    <a-textarea
        v-model:value.trim="txt1"
        :placeholder="`请输入${props.title1}`"
        :rows="4"
    />
    <div>请输入{{ props.title2 }}:</div>
    <a-textarea
        v-model:value.trim="txt2"
        :placeholder="`请输入${props.title2}`"
        :rows="8"
    />
    <div style="display: flex; justify-content: space-between; width: 140px; margin-top: 20px;">
        <a-button
            type="primary"
            danger
            @click="handleReset"
        >
            重置
        </a-button>
        <a-button
            type="primary"
            @click="handleDecrypto"
        >
            解析
        </a-button>
    </div>
    <!-- 显示json -->
    <div
        ref="jsoneditor"
        class="zy-jsoneditor"
    ></div>
</template>

<script lang="ts" setup>
    import { ref, defineProps, withDefaults } from 'vue';
    import crypto from '@/utils/crypto2.js';
    import { message } from 'ant-design-vue';
    // import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
    import 'jsoneditor/dist/jsoneditor.min.css';

    const props = withDefaults(defineProps<{
        title1: string;
        title2: string;
        type: string;
    }>(), {
        title1: '',
        title2: '',
    });

    const txt1 = ref('');
    const txt2 = ref('');

    const handleReset = () => {
        txt1.value = '';
        txt2.value = '';
    };

    const jsoneditor = ref(null);

    const handleDecrypto = () => {
        try {
            let decryptoStr = '';
            if (props.type === 'city') {
                decryptoStr = crypto.decryptCityData(txt1.value, txt2.value);
            } else if (props.type === 'national') {
                decryptoStr = crypto.decryptNationalData(txt1.value, txt2.value);
            }
            if (decryptoStr) {
                // 解析成功
                console.log(decryptoStr);
            } else {
                throw new Error();
            }
        } catch (_) {
            console.log('解析失败');
            message.warning('解析失败!');
        }
    };
    
</script>