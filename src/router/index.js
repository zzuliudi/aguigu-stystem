//配置路由的方式
import Vue from "vue"
import VueRouter from "vue-router"
// 使用插件
Vue.use(VueRouter)
import routes from "./routes"
import store from "@/store"
// 原来的push函数
let originPush = VueRouter.prototype.push;

// 重写新的push函数
VueRouter.prototype.push = function(location, resolve, reject) {
        if (resolve && reject) {
            originPush.call(this, location, resolve, reject)
        } else {
            originPush.call(this, location, () => {}, () => {})
        }
    }
    // 原来的push函数
let originReplace = VueRouter.prototype.replace;

// 重写新的push函数
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
let router = new VueRouter({
    // 拆解代码方便配置
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { y: 0 }
    }
})


// 全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async(to, from, next) => {
    // next();
    let token = store.state.user.token
        // 用户信息
    let names = store.state.user.userInfo.name
        // 登录之后
    if (token) {
        next()
            // 如果有用户信息还要跳入登录或者注册页面时
        if (to.path == "/login" || to.path == "/register") {
            next("/home")
        } else {
            if (names) {
                next()
            } else {
                // 没有用户信息,获取用户信息，派发action让仓库存储用户信息在跳转
                try {
                    // 获取用户信息成功
                    await store.dispatch("getUserInfo")
                } catch (error) {
                    // token失效了
                    // 清除token 也就是退出登录的功能
                    await store.dispatch("logout")
                }

            }
            // alert(222222)
        }
    } else {
        let topath = to.path
            // 未登录:不能去交易相关的页面、支付相关
        if (topath.indexOf("/trade") != -1 || topath.indexOf("/pay") != -1 || topath.indexOf("/center") != -1) {
            // 把未登录的时候想去而没去成的信息，存储与地址栏中【路由】
            next("/login?redirect=" + topath)
        } else {
            next()
        }

    }

})

export default router