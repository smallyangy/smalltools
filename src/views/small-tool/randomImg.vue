<template>
    <!-- 标题 -->
    <HeaderTitle></HeaderTitle>
    <!-- 表单 -->
    <a-form
        ref="formRef"
        :model="form"
        :label-col="{ style: { width: '100px' } }"
        style="margin-top: 20px;"
        :rules="rules"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
        <a-form-item
            name="width"
            label="宽度"
        >
            <a-input
                v-model:value.number="form.width"
                allowClear
                style="width: 300px;"
                :disabled="loading"
            ></a-input>
        </a-form-item>
        <a-form-item
            name="height"
            label="高度"
        >
            <a-input
                v-model:value.number="form.height"
                allowClear
                style="width: 300px;"
                :disabled="loading"
            ></a-input>
        </a-form-item>
        <a-form-item
            name="count"
            label="数量"
        >
            <a-input
                v-model:value.number="form.count"
                allowClear
                style="width: 300px;"
                :disabled="loading"
            ></a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ style: { marginLeft: '100px' } }">
            <a-button
                type="primary"
                html-type="submit"
                :loading="loading"
            >
                生成
            </a-button>
        </a-form-item>
    </a-form>
    <!-- 回显图片 -->
    <div
        v-if="imgUrlArr.length > 0"
        class="img-wrapper"
    >
        <a-image-preview-group>
            <div
                v-for="(imgUrl, index) in imgUrlArr"
                :key="index"
                class="img-item"
            >
                <a-image
                    :width="200"
                    :src="imgUrl"
                >
                    <template #placeholder>
                        <a-spin :spinning="true">
                            <a-image
                                src="https://imgcdn.huanjutang.com/assets/img/20220210085800.png"
                                :width="200"
                                :preview="false"
                            />
                        </a-spin>
                    </template>
                </a-image>
            </div>
        </a-image-preview-group>
    </div>
</template>

<script setup lang="ts">
    import HeaderTitle from '@/components/layout/HeaderTitle.vue';
    import { reactive, ref, nextTick, watch } from 'vue';
    import { message } from 'ant-design-vue';
    import { useStorage } from '@/stores/storage';

    const storageStore = useStorage();

    // 持久化
    const form = reactive(JSON.parse(storageStore.storage.randomImg as string));

    const rules = {
        width: [{ required: true, trigger: 'change', message: '请输入宽度' }],
        height: [{ required: true, trigger: 'change', message: '请输入高度' }],
        count: [{ required: true, trigger: 'change', message: '请输入数量' }],
    };

    watch(form, (res) => {
        storageStore.setItem('randomImg', JSON.stringify(res));
    });

    const reqImg = (w: number, h: number) => new Promise((resolve, reject) => {
        fetch(`https://picsum.photos/${w}/${h}`).then(res => res.url).then(res => {
            // resolve(window.URL.createObjectURL(res));
            resolve(res);
        }).catch(err => {
            console.log(err);
            reject(err);
        });
    });

    const loading = ref(false);
    const imgUrlArr = ref<string[]>([]);

    const onFinish = (values: any) => {
        const { width, height, count } = values;
        if (count <= 0) {
            message.warning('数量必须大于0');
            return;
        }
        loading.value = true;
        imgUrlArr.value = [];
        let loadingCount = 0;
        nextTick(() => {
            // const reqArr = [];
            // 修改为单独请求
            for (let i = 0; i < count; i++) {
                // reqArr.push(reqImg(width, height));
                reqImg(width, height).then(res => {
                    imgUrlArr.value.push(res as string);
                }).finally(() => {
                    endDeal();
                });
            }
        });

        function endDeal() {
            loadingCount++;
            if (loadingCount === count) {
                loading.value = false;
            }
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
</script>

<style lang="scss">
    .img-wrapper {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #d9d9d9;
    }

    .img-item {
        flex: none;
        margin: 10px;
    }
</style>