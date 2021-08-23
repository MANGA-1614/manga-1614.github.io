import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import builds1 from '../views/builds_1.vue';
import build_home from '../views/build_home'

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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router