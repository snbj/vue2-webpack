import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home = { template: '#home' };  
const Foo = { template: '#foo' };  
const Bar = { template: '#bar' };  
  
const router = new VueRouter({  
    routes: [  
        { path: '/', name: 'home', component: Home },  
        { path: '/foo', name: 'foo', component: Foo },  
        { path: '/bar/:id', name: 'bar', component: Bar }  
    ]  
});  
  
new Vue({ router:router }).$mount('#app'); 