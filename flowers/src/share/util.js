import {
    UserInfo,USERID,TokenKey
} from "../config/const";

//清空用户登陆信息的API（用户id，用户token，用户userInfo）
export function clearLoginInfo(){
    let keys = [
        USERID,
        TokenKey,
        UserInfo
    ];
    keys.forEach(key =>{
        localStorage.removeItem(key)
    })
}

// 防抖函数
export function debounce(fn,delay,immediate=false){
    let timer = null;
    return function(){
        timer && clearTimeout(timer);
        if(immediate && !timer){

            fn.apply(this,arguments);
            timer = setTimeout(()=>{
                timer = null
            },delay)

        }else{
            timer = setTimeout(()=>{
                fn.apply(this,arguments)
                timer = null
            },delay)
        }
    }
}

// 节流函数
export function throttle(func, wait, options) {
    // options 配置是否立即/延迟执行
// 忽略开始函数的的调用，可传入{leading: false}。,
// 忽略结尾函数的调用，可传入{trailing: false}
// 两者不能共存，否则函数不能执行
    let timeout, context, args, result;
    let previous = 0;
    if (!options) options = {};
    let later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    let throttled = function() {
        let now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        let remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    }

    return throttled;
}

// 时间格式化函数
export function dataFormat(data,fmt){
    // 这里是24小时制，可以再加一个12小时制
    if(/Y/i.test(fmt)){
        fmt =fmt.replace(/Y+/i,value=>value.length<5 && (data.getFullYear()+"").slice(4-value.length))
    }
    let obj = {
        'M+':data.getMonth()+1,
        'D+':data.getDate(),
        'h+':data.getHours(),
        'm+':data.getMinutes(),
        's+':data.getSeconds(),
        'z+':data.getMilliseconds()
    };

    for(let key in obj){
        let rxp =(typeof key !== 'undefined') && new RegExp(key);
        if(fmt.search(rxp) !== -1){
            fmt = fmt.replace(new RegExp(key),function(valuey){
                let str = "00"+obj[key];//这里的00字符串也是000,0000,00000等。反正都是从后开始取。这里起到的作用相当提前填充
                return str.slice(str.length-valuey.length)//从填充后的字符串，进行截取
            })
        }
    }
    return fmt;
}
