import Vue from 'vue';
import text from './common/main';
import './assets/main.scss';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './routes.js';

Vue.use(Mint);

Mint.Toast('提示信息');
Vue.component(Mint.Button.name, Mint.Button);
Vue.component(Mint.Header.name,Mint.Header);

