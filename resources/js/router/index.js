import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Admin from '../pages/Admin'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
        },
        {
            path: '/admin/home',
            name: 'Home',
            component: Home
        }
    ]
});

export default router