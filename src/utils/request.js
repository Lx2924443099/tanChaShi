import axios from 'axios'
import { useUserStore } from '@/stores'
import { message } from 'ant-design-vue';


<<<<<<< HEAD
// 添加请求拦截器
axios.interceptors.request.use((config) => {
=======
const baseURL = 'http://locallhost:815'

const instance = axios.create({
    baseURL,
    timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
>>>>>>> 352cb1d (主页面主体搭建完成)
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
        // 每次请求前携带token
        config.headers.Authorization = userStore.token
    }
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
<<<<<<< HEAD
axios.interceptors.response.use(function (response) {
=======
instance.interceptors.response.use(function (response) {
>>>>>>> 352cb1d (主页面主体搭建完成)
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code == 0) {
        return response;
    }

    message.error(response.data.message || '服务异常');

    return Promise.reject(response.data)
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

<<<<<<< HEAD
export default axios
=======
export default instance
>>>>>>> 352cb1d (主页面主体搭建完成)
