<template>
    <a-layout>
        <a-layout-header :style="headerStyle">
            <commonHeader :selectSurvey="selectSurvey" />
        </a-layout-header>
        <a-layout>
            <router-view></router-view>
        </a-layout>
        <a-layout-footer :style="footerStyle">
            <img src="@/assets/logo.png" alt="">
            <span>| 抢问卷星饭碗</span>
        </a-layout-footer>
    </a-layout>
</template>
    
<script setup lang='ts'>
import commonHeader from "@/components/commonHeader/index.vue"
import { ref, type CSSProperties } from 'vue';

let selectId = ref<string>('')

const headerStyle: CSSProperties = {
    height: 64,
    lineHeight: '64px',
    display: 'flex'
};

const footerStyle: CSSProperties = {
    textAlign: 'center',
    height: '8vh',
    backgroundColor: '#546de5'
};

const selectSurvey = (value: string) => {
    selectId.value = value
}


</script>
    
<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
}

.ant-layout {
    height: 100vh;
    width: 100vw;

    .ant-layout-footer {
        padding: 0;

        img {
            height: 100%;
        }

        span {
            display: inline-block;
            margin-top: 10px;
            font-size: 20px;
            color: #ffaf40;
            font-family: "楷体";
        }
    }

    .ant-layout-header {
        background-color: #fff;
        border-bottom: 1px solid grey;
        padding: 0 4vw;

        commonHeader {
            width: 100%;
            height: 100%;
        }

    }

    .ant-layout {
        margin-top: 5vh;
        width: 90vw;
        margin-left: 5vw;
    }

}
</style>
