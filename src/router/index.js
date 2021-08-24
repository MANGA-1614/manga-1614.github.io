import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';

import build_home from '../views/build_home';
import builds1 from '../views/builds_1.vue';
import builds2 from '../views/builds_2.vue';
import builds3 from '../views/builds_3.vue';

//Import new views

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/build/home',
        name: 'build_home',
        component: build_home
    },

    {
        path: '/build/No_Orbs_No_DLC',
        name: 'No_Orbs_No_DLC',
        component: builds1
    },

    {
        path: '/build/Orbs_No_DLC',
        name: 'Orbs_No_DLC',
        component: builds2
    },

    {
        path: '/build/Orbs_DLC',
        name: 'Orbs_DLC',
        component: builds3
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router