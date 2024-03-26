import {createRouter, createWebHistor} from 'vue-router';

import RootRouter from '../views/02_nestedRoute/RootRouter.vue';
import NestedHome from  '@/view/02_nestedHome.vue'
import Nested

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'root',
            component: RootRouter,
        },
    ]
})