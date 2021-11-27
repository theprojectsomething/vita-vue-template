import { createApp } from 'vue'
import router from '@/router.js';
import store from '@/store.js';
import App from './App.vue'
import 'what-input';

createApp(App)
.use(router)
.use(store)
.mount(document.body)
