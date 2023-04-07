<template>
    <div class="modal" id="myModal">
        <div class="modal-content second-bg-color">
            <div class="modal-header first-bg-color">
                <span class="close" @click="this.$emit('dialogClose')">&times;</span>
                <h2>{{ $t("deleteDialog.headerMsg") }}</h2>
            </div>
            <div class="modal-body">
                <ul v-for="data in dataToDelete" :key="data">
                    <li>{{ data }}</li>
                </ul>
                <h5>{{ $t("deleteDialog.bodyMsg") }}</h5>
            </div>
            <div class="modal-footer first-bg-color">
                <Button :icon="submitButton.icon" :severity="submitButton.class" :label="$t(submitButton.label)" @click="onDelete"></Button>
            </div>
        </div>
    </div>
</template>


<script>

export default{
    //Nome della componente
    name:"DynamicFormComponent",

    //Input from parent component ./src/views/PostView.vue
    props:{
        dataToDelete:{
            type:Object,
            required:true
        },
        submitButton:{
            type:Object,
            required:true
        }
    },

    //metodi della componente
    methods:{
        onDelete(){
            this.$emit('dialogSubmitted', {action:this.submitButton.action, data:this.dataToDelete})
        }
    }
}
</script>

<style scoped>
    /* The Modal (background) */
    .modal {
        display: block; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        position: relative;
        margin: auto;
        padding: 0;
        width: 50%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s;
        border-radius:10px;
    }

    /* Add Animation */
    @-webkit-keyframes animatetop {
        from {top:-300px; opacity:0} 
        to {top:0; opacity:1}
    }

    @keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
    }

    /* The Close Button */
    .close {
        color: white;
        float: right;
        font-size: 28px;
        font-weight: bold;
        transition: all 0.5s;
    }

    .close:hover,
    .close:focus {
        transform: rotate(90deg);
        color: #e3e3e3;
        text-decoration: none;
        cursor: pointer;
    }

    .modal-header {
        padding: 2px 16px;
        border-radius: 10px 10px 0 0 ;
        border-top: 1px solid #e3e3e3;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
    }

    .modal-body {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-start;
        padding: 20px 16px;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
    }

    .modal-body li{
        margin:0;
        padding: 3px;
        border: 1px;
    }

    .modal-footer {
        padding: 20px 16px;
        border-bottom: 1px solid #e3e3e3;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        border-radius: 0 0 10px 10px ;
    }
</style>