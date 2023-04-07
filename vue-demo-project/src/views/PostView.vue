<template>
    <div class="container">
        <div class="container-copy">
            <h1>{{ $t("postPage.title") }}</h1>
        </div>
    </div>
    <DynamicTableComponent
    v-if="tableVisible"
    :tableHeader="`postPage.tableHeader`"
    :tableData="postStore.posts"
    :tableDataColumn="postStore.postColumnTemplate"
    :tableOperationButtons="tableButtons"
    @sendAction="manageAction"
    />
    <ErrorDialogComponent v-if="errorDialogVisible"/>

    <DynamicFormComponent
    v-if="formDialogVisible"
    :formTitle="formTitle"
    :formTemplate="postStore.postFormTemplate"
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
import { usePostStore } from '@/stores/post'
import DynamicTableComponent from '@/components/DynamicTableComponent.vue'
import ErrorDialogComponent from '@/components/ErrorDialogComponent.vue'
import DynamicFormComponent from '@/components/DynamicFormComponent.vue'
import DeleteDialogComponent from '../components/DeleteDialogComponent.vue'
import ButtonService from '../services/ButtonService'
export default{
    //nome della componente
    name:"PostView",

    //Componenti utilizzate 
    components:{DynamicTableComponent, ErrorDialogComponent, DynamicFormComponent, DeleteDialogComponent},

    //Setup della componente
    setup(){
        //Inietto lo store di Post
        const postStore = usePostStore()
        return {postStore}

    },

    //Metodi del ciclo di vita della componente
    mounted(){
        this.postStore.populatePostStore()
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
            this.postStore.error === null? status = true : status = false
            return status
        },
        errorDialogVisible(){
            let status
            this.postStore.error != null? status = true : status = false
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
                this.postStore.preparePostForDynamicForm()
                this.formButton = ButtonService.addBtn
                this.openForm = !this.openForm
                this.formTitle = 'form.addTtl'
            }else{
                if(event.action==='EDIT'){
                    this.postStore.preparePostForDynamicForm(event.data)
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
                    this.postStore.addPost(event.data)
                    this.closeForm()
                    break
                case 'EDIT':
                    this.postStore.editPost(event.data)
                    this.closeForm()
                    break
                case 'DELETE':
                    this.postStore.deletePost(event.data)
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