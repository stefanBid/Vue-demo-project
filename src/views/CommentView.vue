<template>
    <div class="container">
        <div class="container-copy">
            <h1>{{ $t("commentPage.title") }}</h1>
        </div>
    </div>
    <DynamicTableComponent
    v-if="tableVisible"
    :tableHeader="`commentPage.tableHeader`"
    :tableData="commentStore.comments"
    :tableDataColumn="commentStore.commentColumnTemplate"
    :tableOperationButtons="tableButtons"
    @sendAction="manageAction"
    />
    <ErrorDialogComponent v-if="errorDialogVisible"/>

    <DynamicFormComponent
    v-if="formDialogVisible"
    :formTitle="formTitle"
    :formTemplate="commentStore.commentFormTemplate"
    :submitButton="formButton"
    @formSubmitted="execAction"
    @formClose="closeForm"/>


    <DeleteDialogComponent
    v-if="deleteDialogVisible"
    :dataToDelete="dataToDelete"
    :submitButton="dialogButton"
    @dialogClose="closeDialog"
    @dialogSubmitted="execAction"/>

</template>


<script>
import { useCommentStore } from '@/stores/comment'
import DynamicTableComponent from '@/components/DynamicTableComponent.vue'
import ErrorDialogComponent from '@/components/ErrorDialogComponent.vue'
import DynamicFormComponent from '@/components/DynamicFormComponent.vue'
import DeleteDialogComponent from '@/components/DeleteDialogComponent.vue'
import ButtonService from '../services/ButtonService'
export default{
    //nome della componente
    name:"CommentView",

    //Componenti utilizzate 
    components:{DynamicTableComponent, ErrorDialogComponent, DynamicFormComponent, DeleteDialogComponent},

    //Setup della componente
    setup(){
        //Inietto lo store di Post
        const commentStore = useCommentStore()
        return {commentStore}

    },

    //Metodi del ciclo di vita della componente
    mounted(){
        this.commentStore.populateCommentStore()
    },

    // Dati della componente
    data(){
        return{
            tableButtons:[ButtonService.addBtn, ButtonService.editBtn, ButtonService.deleteBtn],
            formButton:undefined,
            dialogButton:undefined,
            formTitle:undefined,
            openForm:false,
            openDeleteDialog: false,
            dataToDelete:undefined
        }
    },

    computed:{
        tableVisible(){
            let status
            this.commentStore.error === null? status = true : status = false
            return status
        },
        errorDialogVisible(){
            let status
            this.commentStore.error != null? status = true : status = false
            return status
        },
        formDialogVisible(){
            return this.openForm
        },
        deleteDialogVisible(){
            return this.openDeleteDialog
        }
    },

    //Metodi della componente
    methods:{
        manageAction(event){
            if(event.data === null){
                this.commentStore.prepareCommentForDynamicForm()
                this.formButton = ButtonService.addBtn
                this.openForm = !this.openForm
                this.formTitle = 'form.addTtl'
            }else{
                if(event.action==='EDIT'){
                    this.commentStore.prepareCommentForDynamicForm(event.data)
                    this.formButton = ButtonService.editBtn
                    this.formTitle = 'form.editTtl'
                    this.openForm = !this.openForm
                }else{
                    this.dataToDelete = event.data
                    this.dialogButton = ButtonService.deleteBtn
                    this.openDeleteDialog = !this.openDeleteDialog
                }
            }
        },

        execAction(event){
            switch(event.action){
                case 'ADD':
                    this.commentStore.addComment(event.data)
                    this.closeForm()
                    break
                case 'EDIT':
                    this.commentStore.editComment(event.data)
                    this.closeForm()
                    break
                case 'DELETE':
                    this.commentStore.deleteComment(event.data)
                    this.closeDialog()
                    break
            }
        },

        closeForm(){
            this.openForm = !this.openForm
        },

        closeDialog(){
            this.openDeleteDialog = !this.openDeleteDialog
        }
    }



}
</script>


<style scoped>
    .container{
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        width: 100%;
    }

    .container-copy{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px;
        border-radius: 10px;
        border: 1px solid #455d7a;
        height:100%;
        width: 100%;
    }
</style>