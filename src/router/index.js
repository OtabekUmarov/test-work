import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [

    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test/index'),
    },
    {
        path: '/test/create',
        name: 'test-create',
        component: () => import('../views/test/create'),
    },
    {
        path: '/exam',
        name: 'exam',
        component: () => import('../views/exam/index'),
    },
    {
        path: '/students',
        name: 'students',
        component: () => import('../views/students/index'),
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/auth/index')
    },
    {
        path: '/validations',
        name: 'validations',
        component: () => import('../views/validations/index')
    }
]
const router = new VueRouter({
    routes,
    mode: "history"

})
export default router