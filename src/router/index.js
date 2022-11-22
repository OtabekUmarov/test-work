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