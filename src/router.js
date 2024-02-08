import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Eventi from './pages/Eventi.vue';
import EventDetails from './pages/EventDetails.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/eventi',
            name: 'eventi',
            component: Eventi
        },
        {
            path: '/eventi/:id',
            name: 'event-details',
            component: EventDetails,
        }
    ]
});

export { router };