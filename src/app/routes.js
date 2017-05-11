import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home = { template: '#home' };  
const Foo = { template: '#foo' };  
const Bar = { template: '#bar' };  
  
const router = new VueRouter({  
    routes: [
        { path: '/home', name: 'home',  component:resolve => require(['./home/components/index.vue'], resolve)},  
        { path: '/foo', name: 'foo', component: resolve => require(['./foo/components/index.vue'], resolve) }
    ]
});

new Vue({ router:router }).$mount('#app');