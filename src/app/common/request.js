import axios from 'axios';
import Vue from 'vue';
import { Toast,Indicator } from 'mint-ui';
import Urls from './requestUrl';
// 添加一个请求拦截器
let deposit = [];
axios.interceptors.request.use(config => {
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})
// 添加一个响应拦截器
axios.interceptors.response.use(response => {
    deposit[response.config.url] = false;
    if(response.data.returncode){
        Toast(response.data.message);
        if(response.data.returncode==3)
            return [{isSign:true}];
        return Promise.reject(response.data);
    }
    return response.data.data
}, function (error) {
    return Promise.reject(error)
})
export default {
    g (u, params,isLoad) {
        let url;
        if(typeof u == 'object' ){
            if( typeof u.id !='undefined' ) url = Urls[u.name]+u.id;
            else url = Urls[u.name];
        } 
        else url = Urls[u];
        
        if(deposit[url]) return;
        deposit[url] = true;
        return axios({
            method: 'get',
            url:  url,
            params,
            withCredentials: true,
            timeout: 30000
        })
    },
    p (name, data) {
        let url;
        return axios({
            method: 'post',
            url: Urls[name],
            data: data,
            timeout: 30000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
    }
}
