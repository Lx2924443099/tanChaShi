<template>
        <a-row>
                <a-col :span="14"></a-col>
                <a-col :span="10">
                        <a-card :title="isLogin ? '登录' : '注册'" style="width: 100%">
                                <template #extra>
                                        <div class="toggle">
                                                <button class="learn-more" @click="isLogin = !isLogin">
                                                        <span class="circle" aria-hidden="true">
                                                                <span class="icon arrow"></span>
                                                        </span>
                                                        <span class="button-text">前往{{ isLogin ? '注册' : '登录' }}</span>
                                                </button>
                                        </div>

                                </template>
                                <a-form :rules="rules" ref="loginRef" v-show="isLogin" :model="loginInfo" name="basic"
                                        :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off" @finish=""
                                        @finishFailed="">
                                        <a-form-item label="用户名" name="lusername">
                                                <a-input v-model:value="loginInfo.lusername" />
                                        </a-form-item>

                                        <a-form-item label="密&nbsp&nbsp&nbsp码" name="lpassword">
                                                <a-input-password v-model:value="loginInfo.lpassword" />
                                        </a-form-item>

                                        <a-form-item :wrapper-col="{ offset: 9, span: 15 }">
                                                <div class="wrapper">
                                                        <button @click="login"> 登录</button>
                                                </div>
                                        </a-form-item>
                                </a-form>

                                <a-form :rules="rules" ref="registerRef" v-show="!isLogin" :model="registerInfo" name="basic"
                                        :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off" @finish=""
                                        @finishFailed="">
                                        <a-form-item label="用户名" name="rusername">
                                                <a-input v-model:value="registerInfo.rusername" />
                                        </a-form-item>

                                        <a-form-item label="密&nbsp&nbsp&nbsp码" name="rpassword">
                                                <a-input-password v-model:value="registerInfo.rpassword" />
                                        </a-form-item>

                                        <a-form-item label="再次输入密码" name="checkPassword">
                                                <a-input-password v-model:value="registerInfo.checkPassword" />
                                        </a-form-item>

                                        <a-form-item label="手&nbsp&nbsp&nbsp机" name="phone">
                                                <a-input v-model:value="registerInfo.phone" />
                                        </a-form-item>

                                        <a-form-item label="邮&nbsp&nbsp&nbsp箱" name="email">
                                                <a-input v-model:value="registerInfo.email" />
                                        </a-form-item>

                                        <a-form-item :wrapper-col="{ offset: 9, span: 15 }">
                                                <div class="wrapper">
                                                        <button @click="register"> 注册</button>
                                                </div>
                                        </a-form-item>
                                </a-form>
                        </a-card>
                </a-col>
        </a-row>
</template>
    
<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { message } from 'ant-design-vue';
import type { FormInstance } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import router from '@/router'
import { useUserStore } from "@/stores"
import { reqLogin, reqRegister } from '@/apis/user';

const loginRef = ref<FormInstance>();
const registerRef = ref<FormInstance>();
const userStore = useUserStore()

type loginInterface = {
        lusername: string,
        lpassword: string,
}

type registerInterface = {
        rusername: string,
        rpassword: string,
        checkPassword: string,
        phone: string,
        email: string
}
let isLogin = ref<boolean>(true)
let loginInfo = reactive<loginInterface>({
        lusername: '',
        lpassword: ''
})

let registerInfo = reactive<registerInterface>({
        rusername: '',
        rpassword: '',
        checkPassword: '',
        phone: '',
        email: ''
})

let validatePass = async (_rule: Rule, value: string) => {
        let reg: RegExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
        if (value === '') {
                return Promise.reject('请输入密码');
        } else if (!reg.test(value)) {
                return Promise.reject('密码至少包含：数字和英文字母，长度8-16位')
        }
        return Promise.resolve();
};

let validatePass2 = async (_rule: Rule, value: string) => {
        if (value === '') {
                return Promise.reject('请再次输入密码');
        } else {
                if (registerInfo.checkPassword !== registerInfo.rpassword) {
                        return Promise.reject('两次输入不一致')
                }
                return Promise.resolve();
        }
};

let validateUsername = async (_rule: Rule, value: string) => {
        let reg: RegExp = /^[a-zA-Z][a-zA-Z0-9]{9,11}$/
        if (value === '') {
                return Promise.reject('请输入用户名');
        } else if (!reg.test(value)) {
                return Promise.reject('用户名为以字母开头只包含数字和字母的10-12位字符');
        }
        return Promise.resolve();
};

let validatePhone = async (_rule: Rule, value: string) => {
        let reg: RegExp = /^1[345678]\d{9}$/
        if (value === '') {
                return Promise.reject('请输入电话号码');
        } else if (!reg.test(value)) {
                return Promise.reject('电话格式错误');
        }
        return Promise.resolve();
};

let validateEmail = async (_rule: Rule, value: string) => {
        let reg: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
        if (value === '') {
                return Promise.reject('请输入邮箱');
        } else if (!reg.test(value)) {
                return Promise.reject('邮箱格式错误');
        }
        return Promise.resolve();
};

// 校验规则
const rules: Record<string, Rule[]> = {
        rusername: [{ required: true, validator: validateUsername, trigger: 'change' }],
        lusername: [{ required: true, validator: validateUsername, trigger: 'change' }],
        rpassword: [{ required: true, validator: validatePass, trigger: 'change' }],
        lpassword: [{ required: true, validator: validatePass, trigger: 'change' }],
        checkPassword: [{ required: true, validator: validatePass2, trigger: 'change' }],
        phone: [{ required: true, validator: validatePhone, trigger: 'change' }],
        email: [{ required: true, validator: validateEmail, trigger: 'change' }]
};

let login: (event: MouseEvent) => void = () => {
        loginRef.value?.validate().then(async () => {
                let userInfo = {
                        username: loginInfo.lusername,
                        password: loginInfo.lpassword
                }
                let res = await reqLogin(userInfo)
                if (res.data.code == 200) {
                        message.success("登录成功！")
                        let token: string = res.data.data.token
                        let newInfo: object = res.data.data.userInfo
                        userStore.setInfo(token, newInfo)
                        router.push("/")
                } else {
                        message.error("登录失败！")
                }
        })
}

let register: (event: MouseEvent) => void = () => {
        registerRef.value?.validate().then(async () => {
                let userInfo = {
                        username: registerInfo.rusername,
                        password: registerInfo.rpassword,
                        phone: registerInfo.phone,
                        email: registerInfo.email
                }
                let res = await reqRegister(userInfo)
                if (res.data.code == 200) {
                        message.success("注册成功！")
                        isLogin.value = true
                } else {
                        message.error("注册失败！")
                }
        })
}
</script>
    
<style scoped lang="less">
.ant-row {
        width: 100vw;
        height: 100vh;

        .ant-col-14 {
                background-color: #546de5;
                background-image: url('@/assets/logo.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: 80%;
        }

        .ant-col-10 {
                background-color: #ffaf40;
                display: flex;
                align-items: center;

                .ant-card {
                        font-size: 25px;
                        margin-left: 10px;
                        margin-right: 10px;
                        height: 60%;

                        .ant-form {
                                width: 100%;
                                height: 80%;

                                .ant-input,
                                .ant-input-password {
                                        width: 80%;
                                }
                        }
                }

        }
}

.wrapper {
        perspective: 500px;
        transform: rotatex(10deg);
        animation: rotateAngle 6s linear infinite;
        margin: auto;
        width: 80%;

        button {
                display: block;
                position: relative;
                margin: 0.5em 0;
                padding: 0.8em 2.2em;
                cursor: pointer;
                background: orange;
                border: none;
                border-radius: 0.4em;
                text-transform: uppercase;
                font-size: 15px;
                font-family: "Work Sans", sans-serif;
                font-weight: 500;
                letter-spacing: 0.04em;
                mix-blend-mode: color-dodge;
                perspective: 500px;
                transform-style: preserve-3d;
                width: 50%;
        }

        button:before,
        button:after {
                --z: 0px;
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                content: "";
                width: 100%;
                height: 100%;
                opacity: 0;
                mix-blend-mode: inherit;
                border-radius: inherit;
                transform-style: preserve-3d;
                transform: translate3d(calc(var(--z) * 0px), calc(var(--z) * 0px), calc(var(--z) * 0px));
        }

        button span {
                mix-blend-mode: none;
                display: block;
        }

        button:after {
                background-color: #5D00FF;
        }

        button:before {
                background-color: #FF1731;
        }

        button:hover {
                background-color: #FFF65B;
                transition: background 0.3s 0.1s;
        }

        button:hover:before {
                --z: 0.04;
                animation: translateWobble 2.2s ease forwards;
        }

        button:hover:after {
                --z: -0.06;
                animation: translateWobble 2.2s ease forwards;
        }

        @keyframes rotateAngle {
                0% {
                        transform: rotateY(0deg) rotateX(10deg);
                        -webkit-animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
                        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
                }

                25% {
                        transform: rotateY(20deg) rotateX(10deg);
                }

                50% {
                        transform: rotateY(0deg) rotateX(10deg);
                        -webkit-animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
                        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
                }

                75% {
                        transform: rotateY(-20deg) rotateX(10deg);
                }

                100% {
                        transform: rotateY(0deg) rotateX(10deg);
                }
        }

        @keyframes translateWobble {
                0% {
                        opacity: 0;
                        transform: translate3d(calc(var(--z) * 0px), calc(var(--z) * 0px), calc(var(--z) * 0px));
                }

                16% {
                        transform: translate3d(calc(var(--z) * 160px), calc(var(--z) * 160px), calc(var(--z) * 160px));
                }

                28% {
                        opacity: 1;
                        transform: translate3d(calc(var(--z) * 70px), calc(var(--z) * 70px), calc(var(--z) * 70px));
                }

                44% {
                        transform: translate3d(calc(var(--z) * 130px), calc(var(--z) * 130px), calc(var(--z) * 130px));
                }

                59% {
                        transform: translate3d(calc(var(--z) * 85px), calc(var(--z) * 85px), calc(var(--z) * 85px));
                }

                73% {
                        transform: translate3d(calc(var(--z) * 110px), calc(var(--z) * 110px), calc(var(--z) * 110px));
                }

                88% {
                        opacity: 1;
                        transform: translate3d(calc(var(--z) * 90px), calc(var(--z) * 90px), calc(var(--z) * 90px));
                }

                100% {
                        opacity: 1;
                        transform: translate3d(calc(var(--z) * 100px), calc(var(--z) * 100px), calc(var(--z) * 100px));
                }
        }
}

.toggle {
        button {
                position: relative;
                display: inline-block;
                cursor: pointer;
                outline: none;
                border: 0;
                vertical-align: middle;
                text-decoration: none;
                background: transparent;
                padding: 0;
                font-size: inherit;
                font-family: inherit;
        }

        button.learn-more {
                width: 8rem;
                height: auto;
        }

        button.learn-more .circle {
                transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                position: relative;
                display: block;
                margin: 0;
                width: 3rem;
                height: 3rem;
                background: #282936;
                border-radius: 1.625rem;
        }

        button.learn-more .circle .icon {
                transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                background: #fff;
        }

        button.learn-more .circle .icon.arrow {
                transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                left: 0.625rem;
                width: 1.125rem;
                height: 0.125rem;
                background: none;
        }

        button.learn-more .circle .icon.arrow::before {
                position: absolute;
                content: "";
                top: -0.29rem;
                right: 0.0625rem;
                width: 0.625rem;
                height: 0.625rem;
                border-top: 0.125rem solid #fff;
                border-right: 0.125rem solid #fff;
                transform: rotate(45deg);
        }

        button.learn-more .button-text {
                transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 0.75rem 0;
                margin: 0 0 0 1.85rem;
                color: #282936;
                font-weight: 700;
                line-height: 1.6;
                text-align: center;
                text-transform: uppercase;
        }

        button:hover .circle {
                width: 100%;
        }

        button:hover .circle .icon.arrow {
                background: #fff;
                transform: translate(1rem, 0);
        }

        button:hover .button-text {
                color: #fff;
        }
}
</style>