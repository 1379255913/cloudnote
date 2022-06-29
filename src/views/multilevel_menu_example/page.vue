<route>
{
    meta: {
        title: '导航1'
    }
}
</route>

<template>
    <div>
        <el-affix :offset="50">
        <page-header>
            <template #title2>
                eeeeee
            </template>
            <el-button >保存</el-button>
            <el-button type="primary">分享</el-button>
            <el-dropdown trigger="click">
            <el-button text>
                <template #icon>
                    <el-icon :size="20">
                        <svg-icon name="ep:more" />
                    </el-icon>
                </template>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>历史版本</el-dropdown-item>
                    <el-dropdown-item>加星</el-dropdown-item>
                    <el-dropdown-item>移动到</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
        </page-header>
        </el-affix>

                <Editor v-model="text" class="find"></Editor>


    </div>
</template>

<script>
import {toRefs,reactive,watch} from 'vue'
export default {
    setup(){
        const state = reactive({
            text:'',
            isEdit:false,
            title:'一个标题'
        })
        watch(()=>state.text,(oldValue,newValue)=>{
            console.log(state.text)
        })
        return{
            ...toRefs(state),
        }
    }
}
</script>
<style scoped lang="scss">
.find{
    :deep(.tox-editor-header){
        position: fixed;
        top: 100px;
        width: 100%;
    }
}
</style>
