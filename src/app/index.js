import Vue from 'vue';
import './assets/main.scss';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './routes.js';
import Vuex from 'vuex';
Vue.use(Mint);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});
store.commit('increment')
console.log(store.state.count) // -> 1

Mint.Toast('提示信息');
Vue.component(Mint.Button.name, Mint.Button);
Vue.component(Mint.Header.name,Mint.Header);

