import { Toast } from 'vant'
import router from "../router";
import {
    DeviceId,
    RESPONSE_CODE,
    RejectUrl
} from "../config/const";
import { clearLoginInfo } from "share/util";

//流程化处理的封装： 通过任务流处理，可以让每个任务的修改，不会牵扯到其他任务

//==============================请求部分==========================================================
//添加token
export const addToken = config => {
    let token = localStorage.getItem("token")
    //处理token，有时没有，有时候会清空存储或过期，这里默认存在。token是在登录时获取的。如果没有token后端检查会返回401错误
    if(token){
        config.headers.authorization = "Polaris" + token
    }
    return config
}

//添加公共参数
export const addParma = config =>{
    // 公用参数对象
    let params = {
        DeviceId
    }
    let key = config.method == 'post' ? 'data' : 'params';
    // 对data或params进行参数拼接，参数拼接好后，会将请求参数根据对应的方法进行自动处理，比如get，就会将参数放在url后
    config[key] = {
        ...config[key],//取出原来的data/params参数
        ...params//新添加的参数
    }
    return config
}

//=================================响应部分========================================================
//检查返回的网络状态码
export const checkNetWorkStatus = response => {
    let {
        status,
    } = response;
    const errorMessage = RESPONSE_CODE[status];
    // 请求结果错误 提示用户
    if(errorMessage){
        Toast(errorMessage)
    }
    if(status === 401) {
        // 跳转到登录页
        router.push('/login')
    }
    return response
}
// 检测请求返回的数据
export const checkCode = response => {
    // 提示：可以和后台协商那些是登录失效的code
    let { errorCode, errorMessage } = response.data;
    // 检查请求状态是否正常
    if(errorCode !== 0){
        Toast(errorMessage)
    }
    // 检查登录信息是否失效，需要重新登录。后端返回errorCode为403 则表示登录信息失效
    let codes = [401]
    // 如果登陆失效，需要清除登陆信息,再用户登录后重新使用失效路由
    if(codes.includes(errorCode)){
        clearLoginInfo()
        // 保存当前页面路由 方便登陆失效用户，用户登录后重新使用该路由
        sessionStorage.setItem(RejectUrl,location.href.replace(location.origin,''))
        // 重定向至登录页面
        router.push('/login')
    }
    return response
}