import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('users', () => {
    let token = ref('')
    let setToken = (newToken) => {
        token.value = newToken
    }
    let removeToken = () => {
        token.value = ''
    }

    return {
        token,
        setToken,
        removeToken
    }
}, { persist: true })