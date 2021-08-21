import request from "./index";

const pre = process.env.VUE_APP_PRE

// 用户登录
export const login = data => request.post(`${pre}/user/login`, data)

// 用户注销登录
export const loginOut = params => request.get(`${pre}/user/login-out`,params)