import Vue from 'vue'
import Router from 'vue-router'
import PersonalCenter from '@/components/PersonalCenter'
import Login from '@/components/Login'

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
        }
    ]
})