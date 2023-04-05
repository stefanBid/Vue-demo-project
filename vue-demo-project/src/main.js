/* eslint-disable vue/no-reserved-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//Prime vue dependencies
import PrimeVue from 'primevue/config'
// Riple per le animazioni
import Ripple from 'primevue/ripple'

//Stile di Prime Vue
// theme
import './assets/base.css'
import 'primevue/resources/themes/lara-light-blue/theme.css';

// core
import 'primevue/resources/primevue.min.css';

// icons
import 'primeicons/primeicons.css';

// Componenti di Prime Vue
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

import App from './App.vue'
import router from './router'

import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {ripple:true})

app.directive('ripple', Ripple)

app.component('DataTable',DataTable)
app.component('Column', Column)
app.component('Button', Button)


app.mount('#app')
