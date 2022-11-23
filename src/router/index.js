import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'employee',
        component: () => import('../components/task3/employee'),

    },
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
        path: '/create',
        name: 'employeeCreate',
        component: () => import('../components/task3/employee/create'),
    },
    {
        path: '/update',
        name: 'employeeUpdate',
        component: () => import('../components/task3/employee/update'),
    },
]
const router = new VueRouter({
    routes,
    mode: "history"

})
export default router