<template>
    <a-layout-sider width="20vw">
        <a-button type="primary" style="width: 15vw;height: 6vh;" @click="addSurvey">+ 创建问卷</a-button>
        <a-menu v-model:selectedKeys="selectedKeys" style="width: 15vw;margin-top: 15px;height: 60vh;" mode="vertical"
            :items="items" @click="handleClick" />
    </a-layout-sider>
    <a-layout-content>
        <router-view></router-view>
    </a-layout-content>
</template>
    
<script setup lang='ts'>
import { ref, watch } from 'vue'
import router from "@/router";

let selectedKeys = ref<[string]>([router.currentRoute.value.path])

// 监测路由变化来改变选中状态
watch(() => router.currentRoute.value, (newValue) => {
    const route = newValue.path
    if (["/allSurvey", "/favorites"].includes(route)) {
        selectedKeys.value = [route]
    }

})

const items = [
    {
        key: '/allSurvey',
        label: '全部问卷',
        title: '全部问卷',
    },
    {
        key: '/favorites',
        label: '我的收藏',
        title: '我的收藏',
    }
]

const handleClick = ({ item }) => {
    let { originItemValue } = item
    let { key } = originItemValue
    router.push(key)
}

const addSurvey = () => {
    router.push('/newSurvey')
}
</script>
    
<style lang="less" scoped>
.ant-layout-sider {
    min-width: 50px;
    width: 10%;
    background-color: #f5f5f5;
}

.ant-layout-content {
    background-color: #f5f5f5;
}
</style>