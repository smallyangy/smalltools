import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import store from './store';
import router from './router';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

createApp(App)
.use(store)
.use(router)
.use(Antd)
.mount('#app');
