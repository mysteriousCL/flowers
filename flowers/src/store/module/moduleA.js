// 导入常量
import * as type from '../type'
// 导入方法

//导入异步请求方法

//导入config目录中 自己的配置


// A模块案例
const ModuleA = {
    namespaced:true,
    state:{
        count:0,
    },
    // mutations 尽量保证功能单一，方便复用。提示: 若功能复杂，可以抽离方法到actions中
    mutations:{
        [type.AddCOUNT](state,payload){
            //....
        },
    },
    // 异步请求尽量都在actions使用，同时一些其余方法也可以在这里定义
    actions:{
        [type.AsyncAddCOUNT]({commit, dispatch},payload){
            //.......
        }
    }
}

export default ModuleA