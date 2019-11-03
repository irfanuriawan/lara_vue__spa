require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

// COmponent
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import Home from 'components/home'


const router = new VueRouter({
    routes: [
        {
            path: '/admin/home',
            name: 'Home',
            component: Home
        }
    ]
});

const app = new Vue({
    router,
    el: '#app',
});
