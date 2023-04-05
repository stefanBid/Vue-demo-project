
<template>
    <NavComponent
    :navigationLinks="navigationLinks" 
    />
    <RouterView/>
</template>

<script>

import NavComponent from '@/components/NavComponent.vue';
import PathService from '@/services/PathService'

export default{
    //Componenti utilizzate
    components:{NavComponent},

    //Dati della componente
    data(){
        return{
            navigationLinks:[PathService.homePth, PathService.postPth, PathService.commentPth]
        }
    }
    
}

</script>

<style scoped>
</style>



