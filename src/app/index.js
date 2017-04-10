import text from './js/main';
import './style/main.css';
import './style/main.scss';
import Vue from 'vue';

new Vue({
    el:'#book',
    computed:{
        h:()=>{
            return "<span class='book'></span>";
        }
    }
});

new Vue({
    el:'#photo',
    data:{
        isPhoto:true
    }
})

new Vue({
    el:'#new',
    computed:{
        h:()=>{
            return "<h1>Hello World it</h1>"+text();
        }
    }
})

