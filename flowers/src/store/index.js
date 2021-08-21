import Vue from 'vue'
import Vuex from 'vuex'

//数据持久化
import createPersistedState from 'vuex-persistedstate'


// 导入全局getters
import getters from "./getters";

// 导入模块
// 模块A为示例
import moduleA from "./module/moduleA";


Vue.use(Vuex)

// 安装模块
const modules = {
  moduleA,
}
//全局state数据
const state = {

}

export default new Vuex.Store({
  state,
  getters,
  modules,
  plugins: [createPersistedState({
    key:'$vuex',
    paths: ['moduleA']  // 若模块需要缓存，可以在这添加需要缓存的模块，如不需要缓存，则无需添加。
  })]
})
