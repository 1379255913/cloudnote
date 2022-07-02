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
            <el-button type="primary" >分享</el-button>
            <el-select v-model="language" class="m-2 headerbtn" placeholder="Select" style="width: 140px" @change="changeLanguage">
                <el-option
                    v-for="item in languageList"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
            <el-dropdown trigger="click" class="headerbtn">
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
        <div >
            <codemirror
                v-model="code"
                placeholder="请在这里输入代码"
                className = "code-mirror"
                :style="{ 'min-height': '700px' }"
                :autofocus="true"
                :indent-with-tab="true"
                :tab-size="4"
                :extensions="extensions"
                mode="text/javascript"
                @ready="log('ready', $event)"
                @change="log('change', $event)"
                @focus="log('focus', $event)"
                @blur="log('blur', $event)"
            />
        </div>


    </div>
</template>

<script>
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { java } from '@codemirror/lang-java'
import { python } from '@codemirror/lang-python'
import { cpp } from '@codemirror/lang-cpp'
import {autocompletion} from "@codemirror/autocomplete"
import { lineNumbers } from '@codemirror/gutter';
import { oneDark } from "@codemirror/theme-one-dark"
export default {
    components: {
        Codemirror
    },
    setup() {
        const code = ref(`console.log('Hello, world!')`)
        const languageList = ref(['python','java','javascript','cpp'])
        const language = ref('javascript')
        const extensions = ref([javascript(),oneDark,])
        const changeLanguage=(val)=>{
            console.log(val)
            extensions.value = [eval(val+'()'),oneDark,]
        }
        return {
            code,
            extensions,
            language,
            languageList,
            changeLanguage,
            log: console.log
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
.headerbtn{
    padding: 0 0 0 10px;
}
.code-mirror{
    font-size : 16px;
    line-height : 150%;
}
</style>
