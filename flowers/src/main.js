import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from "./api";
// 第三方ui库
import './third/vant'

//在原型上挂载axios
Vue.prototype.$axios = request;
// 事件总线
Vue.prototype.$bus = new Vue()

//引入flexable
import 'amfe-flexible'

//引入字体图标
import 'assets/css/iconfont.css'

// 引入vconole
import VConsole from 'vconsole'
const vconsole = new VConsole()
Vue.use(vconsole)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

