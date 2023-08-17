<template>
    <a-card title="我的收藏" style="padding: 0;">
        <a-table :dataSource="dataSource" style="margin-top: -10px;;" :pagination="{ pageSize: 5 }" :scroll="{ y: 350 }">
            <a-table-column width="10%" key="id" title="ID" data-index="id" align="center" />
            <a-table-column width="25%" key="name" title="问卷名称" data-index="name" align="center" />
            <a-table-column width="15%" key="time" title="创建时间" data-index="time" align="center" />
            <a-table-column width="15%" key="statu" title="问卷状态" data-index="statu" align="center">
                <template #default="{ record }">
                    <span>
                        <a-tag v-if="record.statu == 0" color="default">未发布</a-tag>
                        <a-tag v-else-if="record.statu == 1" color="processing">进行中</a-tag>
                        <a-tag v-else color="error">已结束</a-tag>
                    </span>
                </template>
            </a-table-column>
            <a-table-column width="35%" key="action" title="操作" align="center">
                <template #default="{ record }">
                    <span>
                        <a-button v-if="record.statu == 1" type="primary" size="small"
                            @click="action(record)">查看问卷</a-button>
                        <a-button type="primary" size="small" danger @click="action(record)">取消收藏</a-button>
                    </span>
                </template>
            </a-table-column>
        </a-table>
    </a-card>
</template>

<script setup lang='ts'>
const dataSource = [
    {
        id: '1',
        name: '测试',
        time: '2020-01-01',
        statu: '1'
    },
    {
        id: '2',
        name: '测试',
        time: '2020-01-01',
        statu: '0'
    },
    {
        id: '3',
        name: '测试',
        time: '2020-01-01',
        statu: '2'
    },
    {
        id: '4',
        name: '测试',
        time: '2020-01-01',
        statu: '2'
    }
]

let action = (value) => {
    console.log(value);
}


</script>

<style scoped lang="less">
.ant-card {
    width: 100%;
    height: 88%;

    .ant-btn {
        margin-left: 10px;
        font-size: 10px;
    }

}
</style>