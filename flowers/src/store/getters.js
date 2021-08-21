// 用于定义全局getters，当自己的模块中需要定义getters时，尽量定义在这，然后页面中通过全局使用getters的方式，来使用各个模块的getter
export default {
    moduleAUseCount: state => state.moduleA.count,
}