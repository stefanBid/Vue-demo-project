<template>
    <div class="card second-bg-color">
        <DataTable :value="tableData" stripedRow paginator :rows="5" :rowsPerPageOptions="[5,10]" tableStyle="min-width:50rem">

            <template #header>
                <div class="flex-elements">
                    <span class="title third-color">{{ $t(tableHeader) }}</span>
                    <template v-for="btn in tableOperationButtons" :key="btn">
                        <Button v-if="btn.action === 'ADD'" :icon="btn.icon" :severity="btn.class" rounded @click="sendAction(btn.action, null)"></Button>
                    </template>
                </div>
            </template>

            <Column v-for="col in tableDataColumn" :key="col" :field="col.field" :header="$t(col.header)"></Column>
            <template v-for="btn in tableOperationButtons" :key="btn">
                <Column v-if="btn.action != 'ADD'" :header="$t(btn.label)">
                    <template #body="data">
                        <Button  :icon="btn.icon" :severity="btn.class" rounded @click="sendAction(btn.action, data.data)"></Button>
                    </template>
                </Column>
            </template>
        </DataTable>
    </div>
</template>

<script>
export default{
    //nome della componente
    name:"DynamicTableComponent",

    //Dati in input dalla componente padre ./src/views/PostView.vue
    props:{
        tableHeader:{
            type:String,
            required:true
        },
        tableData:{
            type:Array,
            required:true
        },
        tableDataColumn:{
            type:Array,
            required:true
        },
        tableOperationButtons:{
            type:Array,
            required:true
        }
    },

    //Metodi della componente
    methods:{
        sendAction(action, data){
            this.$emit('sendAction', {action:action, data:data})
        }
    }

}
</script>

<style scoped>
  .card{
    padding: 20px;
    border-radius: 10px;
  }
  .flex-elements{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title{
    font-size: xx-large;
  }
</style>


