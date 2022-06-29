
const useKeepNewNote = defineStore(
    'newNote',
    {
        state:()=>({
            type:'',
            isActive:false,
            component:null,
        }),
        actions:{
            select(){
                this.isActive = true
            },
            confirm(name){
                this.isActive = false
                this.type = name
            }
        }
    }
)
export default useKeepNewNote
