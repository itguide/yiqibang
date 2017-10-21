import Vue from 'vue'
import Router from 'vue-router'
import PersonalCenter from '@/components/PersonalCenter'
import Login from '@/components/Login'
import Register from '@/components/Register'
import axios from 'axios'
Vue.prototype.$http = axios;
// Vue.use(axios)
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'PersonalCenter',
            component: PersonalCenter
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})