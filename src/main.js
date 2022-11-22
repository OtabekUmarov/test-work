import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueMask from 'v-mask'
import DatePicker from 'vue2-datepicker';
import Vuelidate from "vuelidate";
import store from "./store";
import router from './router'


Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(VueMask);
Vue.use(DatePicker)
Vue.use(Vuelidate);

import "@/assets/fonts/Fontawesome/css/all.min.css"
import '@/assets/fonts/Inter/stylesheet.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/zh-cn';
import '@/assets/css/style.css'
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')