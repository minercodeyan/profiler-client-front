import { createApp } from 'vue'
import App from './App.vue'
import {createVuetify} from "vuetify";
import router from "@/router";
import store from "@/store-vuex";
import components from '@/components'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

const vuetify = createVuetify({
    ssr: true,
})

components.forEach(component=>{
    app.component(component.name,component)
})

app.component('VueDatePicker', VueDatePicker);

app.use(vuetify)
    .use(router)
    .use(store)
  .mount('#app')
