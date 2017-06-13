import Vue from 'vue';
import Vuex from 'vuex';
import {is_weixn} from './common/utils.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        isSign:false
    },
    mutations:{
        upSing(state,config){
            let isWx = is_weixn();
            if(isWx){
               return;
            }
            if(typeof config == 'object')
                return state.isSign = config.is;
            state.isSign = config;
        }
    }
});

export default store;