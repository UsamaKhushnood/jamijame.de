import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import store from './store'
import vSelect from 'vue-select'

// import v-select 
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';


Vue.use(Vuelidate)

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
    // JS Assets
import $ from 'jquery'
window.$ = $;

// CSS Assets
import '@/styles/init.scss'
import '@/styles/style.css'




Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')