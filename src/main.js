import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from './router'


Vue.config.productionTip = false;

import "@/assets/fonts/Fontawesome/css/all.min.css"
import '@/assets/fonts/Inter/stylesheet.css'
import '@/assets/css/style.css'
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')