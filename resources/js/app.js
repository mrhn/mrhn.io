require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Router from 'vue-router'

import '../../public/css/tailwind.css'

Vue.use(Router);
Vue.use(Buefy)

const index = Vue.component('app', require('./Components/Index.vue').default);

const router = new Router({
    routes: [
        { path: '/', component: index }
    ]
})

const app = new Vue({
    el: '#app',
    router
});
