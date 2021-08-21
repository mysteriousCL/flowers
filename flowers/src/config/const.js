//定义全局常量


export const USERID = 'userId'// 用于定义用户id的key

export const DeviceId = 'h5' // 设备类型 之所以会有这个设备类型，是因为流量可能小程序、h5、app等，所以区分开，方便后续做流量统计

export const RejectUrl = 'rejectUrl' // 重定向url key

export const TokenKey = 'TokenKey' // 用于定义用户token的key

export const UserInfo = 'USERINFO' // 用于定义用户信息的key-----> localstoragekey

export const RESPONSE_CODE = {
    400: '请求参数错误',
    401: '用户尚未登录',
    403: '拒绝访问',
    404: '访问页面不存在',
    500: '服务器正在开小差中',
    501: '请求功能暂时不支持',
    502: '网关错误',
    503: '服务器正在开小差中，请稍后再试',
    504: '网关超时',
};


