<template>
    <div class="container">
        <div class="container-copy">
            <h1>{{ $t("homePage.title",{appName:"Demo-App"}) }}</h1>
            <h2>{{ $t("homePage.subTitle") }}</h2>
        </div>
    </div>
</template>


<script>
export default{
    //nome della componente
    name:"HomeView"

}
</script>


<style scoped>
    .container{
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 85vh;
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