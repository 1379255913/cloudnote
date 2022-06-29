<template>
    <div class="outbox">
        <el-button class="newbutton" size="default" v-for="(item,index) in buttonList" :key="index" @click="clickButton">{{ item }}</el-button>
    </div>
</template>

<script>
import {toRefs,reactive} from 'vue'
import useKeepNewNote from '@/store/modules/newNote'
export default {
    name: "index",
    setup(){
        const state = reactive({
            buttonList:['空白文档','Markdown','代码']
        })
        const useNewNote = useKeepNewNote()
        const clickButton =(name)=>{
            useNewNote.confirm(name)
        }
        const test=()=>{
            console.log(1)
        }
        return{
            ...toRefs(state),
            clickButton,
            test,
        }
    }
}
</script>

<style scoped>
.outbox{
    display: flex;
    flex-direction: column;
}
.newbutton{
    margin: 10px 0 0 0;

}
</style>
