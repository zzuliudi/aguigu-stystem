// 引入vue
import Vue from 'vue'
// 引入根目录
import App from './App.vue'
// 引入路由
import router from "./router"
// 引入路由创造出来的router
import VueRouter from "vue-router";
Vue.use(VueRouter)
    // 引入vuex中创造出来的仓库
import store from "./store"
// 三级联动组件——全局组件
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
// 注册element UI组件
import { MessageBox, Button, Select } from "element-ui"
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
// 还有一种写法挂载原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入图片懒加载插件
import Vuelazyload from "vue-lazyload"
import logo from "@/assets/logo.png"
// 注册插件
Vue.use(Vuelazyload, {
        // 懒加载默认图片
        loading: logo
    })
    // 引入接口
    // 引入mock
import "@/mock/mockServe"
// 引入swiper样式
import "swiper/css/swiper.css";
// 统一接口api文件里面全部请求函数
import * as API from "@/api"
// console.log(API);
// import { reqGetSearchInfo } from "@/api"
// 自定义插件
import myPlugins from "@/plugins/myPlugins"
Vue.use(myPlugins, {
    name: "upper"
})

// 引入表单校验插件
import "@/plugins/validata"

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    // 全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;
    },
    // 多了一个$router属性
    router,
    // 多一个$store属性
    store,

}).$mount('#app')