import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('users', () => {
<<<<<<< HEAD
    let token = ref('')
    let setToken = (newToken) => {
        token.value = newToken
    }
    let removeToken = () => {
        token.value = ''
=======
    let token = ref('1237755')
    let userInfo = ''
    let setInfo = (newToken, newInfo) => {
        token.value = newToken
        userInfo = newInfo
    }

    let removeInfo = () => {
        token.value = ''
        userInfo = ''
>>>>>>> 352cb1d (主页面主体搭建完成)
    }

    return {
        token,
<<<<<<< HEAD
        setToken,
        removeToken
=======
        userInfo,
        setInfo,
        removeInfo
>>>>>>> 352cb1d (主页面主体搭建完成)
    }
}, { persist: true })