import Vue from 'vue'
// 需使用的vant组件，在这里按需导入即可
import {
    Button,
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem,
    Row,
    Col,
    Image as VanImage,
    Icon,
    Lazyload,
    Badge,
    Cell, Toast,Notify,
    Tab, Tabs,
    List,
    PullRefresh,
    Collapse, CollapseItem,
    Popup,Stepper,
    Checkbox, CheckboxGroup,
    SubmitBar
} from 'vant';

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(Badge)
Vue.use(Cell)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Popup)
Vue.use(Stepper)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(SubmitBar)

Vue.prototype.$toast = Toast
Vue.prototype.$vantNotify = Notify