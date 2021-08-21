import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由
import homeRoutes from "./home";
import carRoutes from "./car";
import loginRoutes from "./login";
import categoryRoutes from "./category";
import profileRoutes from './profile'

import { TokenKey} from "config/const";

//安装router-view等全局组件
Vue.use(VueRouter)


//抽出路由,进行模块管理。目的: 方便后期路由进行管理，所以都拆开。 防止后面项目过大，后面路由不好管理，抽出来进行管理要好一点
const routes = [
    ...homeRoutes,
    ...categoryRoutes,
    ...profileRoutes,
    ...carRoutes,
    ...loginRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局前置守卫
router.beforeEach((to,from,next)=>{
    //登录鉴权、预加载、title、页面跳转、取消请求等
    document.title = to.matched[0].meta.title || "鲜花网";
    next()

})
//全局后置守卫
router.afterEach((to, from) => {
    //....
})

export default router
