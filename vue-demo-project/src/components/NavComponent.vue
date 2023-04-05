<template>
    <header class="second-bg-color">
        <nav>
            <RouterLink  v-for="link of navigationLinks" :key="link" :to="link.destination"><i :class="link.icon"></i>{{ $t(link.header) }}</RouterLink>
        </nav>
  </header>
</template>

<script>
export default{
    //nome della componente
    name:"NavComponent",

    //Dati che riceve in input dalla componente padre ./src/views/App.vue
    props:{
        navigationLinks:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
header{
  padding: 30px;
  border-radius: 10px;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

nav a{
  font-weight: bold;
  font-size: larger;
  padding: 10px;
  text-decoration: none;
  color: #e3e3e3;
  border: 1px solid #f95959;
  border-radius: 10px;
  margin: 0 20px;
  transition: all .4s;
}
nav a:hover{
    color: #e3e3e3;
    background-color: #f95959;
    border: 1px solid #e3e3e3;
    border-radius: 55px;
    padding: 20px;
}
nav a i{
    margin: 0 10px 0 0;
}
nav a.router-link-exact-active {
    color: #e3e3e3;
    background-color: #f95959;
    border: 1px solid #e3e3e3;
    border-radius: 55px;
    padding: 15px;
}
</style>