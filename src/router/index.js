import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Termsofuse from '@/components/Termsofuse'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import Tracking from '@/components/Tracking'
import CreateNewPW from '@/components/CreateNewPW'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    { path: '/terms-of-use', name: 'Termofuse', component: Termsofuse },
    { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
    { path: '/tracking', name: 'Tracking', component: Tracking },
    { path: '/create-new-pw', name: 'CreateNewPW', component: CreateNewPW },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router