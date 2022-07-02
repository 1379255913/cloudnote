<route>
{
    meta: {
        title: 'markDown'
    }
}
</route>

<template>
    <div>
        <el-affix :offset="50">
        <page-header style="margin: 0;padding: 16px 20px 6px 20px;">
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
        <mavon-editor v-model="text" :toolbars="toolbars" :ishljs = "true" class="find" style="box-shadow:rgb(0 0 0 / 10%) 0px 0px 0px 0px;"
            ref="editor" @imgAdd="imgAdd"
        />
    </div>
</template>

<script setup>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import {tinymceUpload} from '@/api-store/uploadImage'
import {watch} from 'vue'
const editor = ref()
const text = ref('')
const toolbars = ref({
    bold: true, // 粗体
    italic: true, // 斜体
    header: true, // 标题
    underline: true, // 下划线
    strikethrough: true, // 中划线
    mark: true, // 标记
    superscript: true, // 上角标
    subscript: true, // 下角标
    quote: true, // 引用
    ol: true, // 有序列表
    ul: true, // 无序列表
    link: true, // 链接
    imagelink: true, // 图片链接
    code: true, // code
    table: true, // 表格
    readmodel: false, // 沉浸式阅读
    htmlcode: true, // 展示html源码
    help: true, // 帮助
    /* 1.3.5 */
    undo: true, // 上一步
    redo: true, // 下一步
    trash: true, // 清空
    save: true, // 保存（触发events中的save事件）
    /* 1.4.2 */
    navigation: true, // 导航目录
    /* 2.1.8 */
    alignleft: true, // 左对齐
    aligncenter: true, // 居中
    alignright: true, // 右对齐
    /* 2.2.1 */
    subfield: true, // 单双栏模式
    preview: true, // 预览
})
const imgAdd =(pos, $file)=>{
    // 第一步.将图片上传到服务器.
    console.log(1)
    tinymceUpload($file).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        editor.value.$img2Url(pos, url);
    })
}
watch(()=>text.value,(oldValue,newValue)=>{
    console.log(text.value)
})
</script>
<style scoped lang="scss">
.find{
    height:700px;
    z-index:unset;
    position:fixed;
    width:83%;
    :deep(.v-note-op){
        z-index:100;
        top: 0;
        width: 100%;
    }
}
</style>
