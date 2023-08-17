import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('users', () => {
    let token = ref('1237755')
    let userInfo = {
        name: "卢小志"
    }
    let setInfo = (newToken, newInfo) => {
        token.value = newToken
        userInfo = newInfo
    }

    let removeInfo = () => {
        token.value = ''
        userInfo = ''
    }

    return {
        token,
        userInfo,
        setInfo,
        removeInfo
    }
}, { persist: true })