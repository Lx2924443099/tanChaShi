<template>
    <div class="header">
        <div class="left">
            <svg t="1692150463751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="11001" width="200" height="200">
                <path
                    d="M740.026182 286.382545a29.079273 29.079273 0 0 1 37.469091 16.93091c44.404364 117.550545 5.585455 250.181818-95.232 325.527272-100.770909 75.298909-239.301818 75.298909-340.061091 0-100.817455-75.333818-139.636364-207.976727-95.232-325.527272a29.079273 29.079273 0 0 1 54.4 20.538181c-35.234909 93.300364-4.421818 198.574545 75.636363 258.408728a226.048 226.048 0 0 0 270.452364 0c80.069818-59.834182 110.871273-165.108364 75.636364-258.408728a29.079273 29.079273 0 0 1 16.930909-37.469091z"
                    fill="#ffc048" p-id="11002"></path>
                <path
                    d="M7.761455 497.594182C167.121455 232.948364 505.122909 136.832 780.683636 277.806545A589.812364 589.812364 0 0 1 1015.901091 497.570909a31.685818 31.685818 0 0 1-54.272 32.733091A526.359273 526.359273 0 0 0 751.767273 334.196364C505.890909 208.407273 204.218182 294.202182 62.056727 530.292364a31.685818 31.685818 0 1 1-54.295272-32.698182z"
                    fill="#ffc048" p-id="11003"></path>
                <path
                    d="M961.629091 497.570909a31.685818 31.685818 0 1 1 54.272 32.733091c-106.344727 176.314182-297.658182 284.136727-504.064 284.136727S114.106182 706.618182 7.773091 530.304a31.685818 31.685818 0 0 1 54.272-32.733091c94.859636 157.265455 265.576727 253.486545 449.792 253.486546 184.215273 0 354.932364-96.221091 449.792-253.486546zM34.909091 735.662545a31.697455 31.697455 0 0 1 31.627636 29.765819l0.058182 1.92v158.394181a31.767273 31.767273 0 0 0 29.963636 31.604364l1.943273 0.058182h254.359273a31.685818 31.685818 0 0 1 1.931636 63.313454l-1.931636 0.058182H98.490182c-51.607273 0-93.684364-40.96-95.232-92.136727l-0.034909-2.909091v-158.370909A31.685818 31.685818 0 0 1 34.909091 735.650909zM988.765091 735.662545a31.697455 31.697455 0 0 1 31.627636 29.765819l0.058182 1.92v158.394181c0 51.549091-41.111273 93.463273-92.369454 94.999273l-2.909091 0.034909h-254.370909a31.685818 31.685818 0 0 1-1.92-63.313454l1.931636-0.058182h254.359273c16.989091 0 30.836364-13.172364 31.837091-29.742546l0.058181-1.92V767.348364a31.685818 31.685818 0 0 1 31.697455-31.685819zM925.172364 7.098182c51.618909 0 93.696 40.96 95.232 92.136727l0.046545 2.909091v158.370909a31.685818 31.685818 0 0 1-63.325091 1.943273l-0.058182-1.931637V102.144a31.767273 31.767273 0 0 0-29.952-31.604364l-1.943272-0.058181h-254.370909a31.685818 31.685818 0 0 1-1.92-63.325091l1.931636-0.058182h254.359273zM352.861091 7.098182a31.685818 31.685818 0 0 1 1.931636 63.325091l-1.931636 0.058182H98.490182a31.802182 31.802182 0 0 0-31.837091 29.730909l-0.058182 1.931636v158.370909a31.685818 31.685818 0 0 1-63.313454 1.943273l-0.058182-1.931637V102.144c0-51.549091 41.111273-93.463273 92.369454-94.999273l2.909091-0.046545h254.359273z"
                    fill="#ffc048" p-id="11004"></path>
                <path
                    d="M345.980065 439.605923a47.511273 47.697455 60 1 0 82.614415-47.697455 47.511273 47.697455 60 1 0-82.614415 47.697455Z"
                    fill="#ffc048" p-id="11005"></path>
            </svg>
            <span>探查师</span>
        </div>

        <div class="middle">
            <a-input-search v-model:value="surveyId" placeholder="输入问卷ID搜索问卷" style="width: 100%" @search="onSearch" />
        </div>

        <div class="right">
            <a-button type="text" size="normal" :icon="h(HomeOutlined)" @click="toHome">首页</a-button>
            <a-tooltip color="#546de5">
                <a-button type="text" size="normal" :icon="h(BulbOutlined)">
                </a-button>
                <template #title>问题反馈</template>
            </a-tooltip>
            <a-tooltip color="#546de5">
                <a-button type="text" size="normal" :icon="h(CommentOutlined)"></a-button>
                <template #title>消息通知</template>
            </a-tooltip>
            <a-dropdown placement="bottom" :arrow="{ pointAtCenter: true }">
                <a-button type="text">
                    <svg v-if="!userInfo.avatar" t="1692156094349" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="12008" width="200" height="200">
                        <path
                            d="M498.602667 191.744a204.714667 204.714667 0 0 1 116.906666 372.8c133.162667 47.317333 229.077333 173.290667 231.893334 322.026667l0.085333 6.784h-64c0-157.333333-127.573333-284.885333-284.885333-284.885334-155.136 0-281.301333 123.968-284.821334 278.250667l-0.085333 6.613333h-64c0-151.68 96.810667-280.746667 232-328.810666a204.714667 204.714667 0 0 1 116.906667-372.8z m0 64a140.714667 140.714667 0 1 0 0 281.450667 140.714667 140.714667 0 0 0 0-281.450667z"
                            fill="#2c2c2c" p-id="12009"></path>
                    </svg>
                    <img v-else :src="userInfo.avatar" alt="">
                    <span>{{ userInfo.name ? userInfo.name : "未登录" }}</span>
                </a-button>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <a-button type="link" size="small" style="color: black;">个人中心</a-button>
                        </a-menu-item>
                        <a-menu-item>
                            <a-button type="link" size="small" style="color: black;" @click="logOut">退出登录</a-button>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { h, ref } from 'vue';
import { BulbOutlined, CommentOutlined, HomeOutlined } from '@ant-design/icons-vue';
import { useUserStore } from '@/stores';
import router from "@/router";

const props = defineProps(['selectSurvey'])
const surveyId = ref<string>('')
const userStore = useUserStore()

let userInfo = userStore.userInfo
let onSearch: (event: MouseEvent) => void = () => {
    props.selectSurvey(surveyId)
}

let logOut: (event: MouseEvent) => void = () => {
    userStore.removeInfo()
    router.push('/login')
}

const toHome = () => {
    router.push('/allSurvey')
}
</script>
    
<style scoped lang="less">
.header {
    margin: 0;
    padding: 0;
    font-size: 2.5vh;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 90%;

    .left {
        display: inline-flex;
        justify-content: left;
        align-items: center;
        height: 100%;
        width: 30vw;

        svg {
            width: 7.5vh;
            height: 7.5vh;
            margin-right: 10px;
        }
    }

    .right {
        display: inline-flex;
        justify-content: left;
        align-items: center;

        .ant-btn,
        .ant-dropdown {
            font-size: 2.5vh;
            color: black;
            margin-right: 2vw;
        }

        .ant-btn:hover {
            color: #546de5;
        }

        .ant-dropdown-trigger {
            display: flex;
            justify-content: space-between;
        }
    }

    .middle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25vw;

        .ant-input-search {
            line-height: 100%;
        }
    }
}

svg {
    width: 1.5rem;
    height: 1.5rem;
}
</style>