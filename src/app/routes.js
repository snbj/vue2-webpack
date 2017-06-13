import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', name: 'home',  component:resolve => require(['./home/index.vue'], resolve)},
        { path: '/account/index', name: 'account', component: resolve => require(['./account/user.vue'], resolve) }
    ]
});
export default router
