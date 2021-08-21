import axios from "axios";
import {
    addToken,// 添加token
    addParma,// 添加请求参数
    checkNetWorkStatus,//检查响应网络状态
    checkCode,//检查状态码
} from "./config";

axios.defaults.withCredentials = true

const request = axios.create({
    timeout:60000,// 超时时间 默认1分钟
    baseURL: process.env.VUE_APP_URL
})
//请求拦截
request.interceptors.request.use(config =>{
    //拦截请求成功
    return Promise.resolve(config)
        .then(addToken)
        .then(addParma)
},error => {
    //拦截请求失败
    console.log("拦截请求失败",error)
    return Promise.reject(error)
})
//响应拦截
request.interceptors.response.use(res => {
    //拦截结果成功(检查网络状态码-->)
    return Promise.resolve(res)
        .then(checkNetWorkStatus)
        .then(checkCode)
        .then(res => res.data)
},error => {
    //拦截结果失败
    console.log("拦截请求失败",error)
    return Promise.reject(error)
})

// 导出 axios 实例
export default request