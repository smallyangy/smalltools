import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import store from './store';
import router from './router';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { createPinia } from 'pinia';

dayjs.locale('zh-cn');

const pinia = createPinia();

createApp(App)
.use(store)
.use(pinia)
.use(router)
.use(Antd)
.mount('#app');
