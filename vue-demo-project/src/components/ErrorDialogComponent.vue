<template>
    <div id="myModal" class="modal">
        <div class="modal-content fourth-color">
            <div class="modal-header third-bg-color">
                <i class="pi pi-spin pi-cog" style="font-size: 2rem; margin-right: 10px;"></i>
                <h2>{{ $t("error.title") }}</h2>
            </div>
            <div class="modal-body second-bg-color">
                <p>{{ $t("error.body") }};</p>
                <p>{{ $t("error.tip") }}.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    //Nome della componente
    name:"ErrorDialogcomponent",
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
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s;
        border-radius: 10px;
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


    .modal-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 2px 16px;
        border-top: 1px solid #e3e3e3;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        border-radius: 10px 10px 0 0;
    }

    .modal-body {
        padding: 2px 16px;
        border-radius: 0 0 10px 10px;
        border: 1px solid #e3e3e3;
    }
</style>