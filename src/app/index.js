import Vue from 'vue';
import text from './common/main';
import Book from './components/book.vue';

import './assets/main.scss';

new Vue({
  el: '#app',
  components: {
    Book
  }
})

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

