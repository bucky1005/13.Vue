import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomeView from '@/views/01_HomeView.vue';
import PathVariable from '@/views/PathVariable.vue';

const router = createRouter({
    /* 라우터의 history 프로퍼티에 들어갈 수 있는 값은 createWebHashHistory()와 createWebHistory() 두 가지이다.
        createWebHashHistory(): localhost:8080/#/home
        createWebHistory(): localhost:8080/home
    */
    // history: createWebHashHistory(),
    history: createWebHistory(),

    /* '/'라는 uri 요청이 들어오면 HomeView라는 컴포넌트가 App.vue에 붙여놓은 RouterView에 그려지게 된다. */
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/pathvariable',
            component: PathVariable
        }
    ]
});

/* router 객체를 export함 (main.js에서 import 할 용도) */
export default router;