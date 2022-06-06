// 路由的配置信息
// 引入路由组价
// import Home from "../pages/Home"
// import Search from "../pages/Search"
// import Login from "../pages/Login"
// import Register from "../pages/Register"
// import Detail from "@/pages/Detail"
// import AddCartSuccess from "@/pages/AddCartSuccess"
// import ShopCart from "@/pages/ShopCart"
// import Trade from "@/pages/Trade"
// import Pay from "@/pages/Pay"
// import PaySuccess from "@/pages/PaySuccess"
// import Center from "@/pages/Center"
// // 二级路由
// import MyOrder from "@/pages/Center/myOrder"
// import GroupOrder from "@/pages/Center/groupOrder"

// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。

export default [{
        name: "center",
        path: '/center',
        component: () =>
            import ("@/pages/Center"),
        // 二级路由组件
        children: [{
                path: "myorder",
                component: () =>
                    import ("@/pages/Center/myOrder")
            },
            {
                path: "grouporder",
                component: () =>
                    import ("@/pages/Center/groupOrder")
            }
        ],
        meta: { show: true }
    },
    {
        name: "pay",
        path: '/pay',
        component: () =>
            import ("@/pages/Pay"),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == "/trade") {
                next()
            } else {
                next(false)
            }
        },
        meta: { show: true }
    },
    {
        name: "paysuccess",
        path: '/paysuccess',
        component: () =>
            import ("@/pages/PaySuccess"),
        meta: { show: true }
    },
    {
        name: "trade",
        path: '/trade',
        component: () =>
            import ("@/pages/Trade"),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == "/shopCart") {
                next()
            } else {
                next(false)
            }
        },
        meta: { show: true }
    },
    {
        name: "shopCart",
        path: '/shopCart',
        component: () =>
            import ("@/pages/ShopCart"),
        meta: { show: true }
    }, {
        name: "addCartSuccess",
        path: '/addCartSuccess',
        component: () =>
            import ("@/pages/AddCartSuccess"),
        meta: { show: true }
    },
    {
        path: '/detail/:skuid',
        component: () =>
            import ("@/pages/Detail"),
        meta: { show: true }
    },
    {
        path: '/home',
        component: () =>
            import ("@/pages/Home"),
        meta: { show: true }
    },
    {
        name: "search",
        path: '/search/:keyword?',
        component: () =>
            import ("@/pages/Search"),
        meta: { show: true },
    },
    {
        path: '/login',
        component: () =>
            import ("@/pages/Login"),
        meta: { show: false }
    },
    {
        path: '/register',
        component: () =>
            import ("@/pages/Register"),
        meta: { show: false }
    },

    //重定向，在项目跑起来的时候，立马让他定向到首页
    {
        path: "*",
        redirect: "/home"
    }
]