import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores';
import 'ant-design-vue/dist/reset.css';


const app = createApp(App)
app.use(router).use(pinia).mount('#app')
