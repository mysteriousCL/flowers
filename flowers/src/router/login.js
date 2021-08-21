const Login = () => import('views/login/Login')
export default [
    { path: '/login',name:'Login',component: Login,meta: { title: '登录与注册-花礼网',keepalive:true,}},
]