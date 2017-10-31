import Vue from 'vue'
import Router from 'vue-router'

import PersonalCenter from '@/views/PersonalCenter'
import Personal from '@/components/Personal'
import UserLogin from '@/views/UserLogin'
import Home from '@/views/Home'
import Nav from '@/views/Nav'
import axios from 'axios'
import VueValidator from 'vue-validator' //表单验证
Vue.use(VueValidator);
Vue.prototype.$http = axios;
// Vue.use(axios)
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/myCenter',
            name: 'PersonalCenter',
            component: PersonalCenter
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'UserLogin',
            component: UserLogin
        },
        {
            path: '/nav',
            name: 'nav',
            component: Nav
        },
        {
            path: '/Personal',
            name: 'Personal',
            component: Personal
        }
    ]
})