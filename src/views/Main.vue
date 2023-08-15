<template>
<<<<<<< HEAD
    <p>欢迎来到探查师</p>
</template>
    
<script setup lang='ts'>

</script>
    
<style></style>
=======
    <a-layout>
        <a-layout-header :style="headerStyle">
            <commonHeader :selectSurvey="selectSurvey" />
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="20vw">
                <a-button type="primary" style="width: 15vw;height: 6vh;">+ 创建问卷</a-button>
                <a-menu v-model:selectedKeys="selectedKeys" style="width: 15vw;margin-top: 15px;height: 60vh;"
                    mode="vertical" :items="items" @click="handleClick" />
            </a-layout-sider>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
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

const selectedKeys = ref(['1']);

const items = [
    {
        key: '1',
        label: '全部问卷',
        title: '全部问卷',
    },
    {
        key: '2',
        label: '我的收藏',
        title: '我的收藏',
    }
]

let handleClick = () => { }
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

        .ant-layout-sider {
            min-width: 50px;
            width: 10%;
            background-color: #f5f5f5;
        }

        .ant-layout-content {
            background-color: #f5f5f5;
        }
    }

}
</style>
>>>>>>> 352cb1d (主页面主体搭建完成)
