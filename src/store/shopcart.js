//search仓库
import { reqShopCart, reqDeleteCartById, reqUpdateCheckdByid } from "@/api"
const actions = {
    // 获取模块数据
    async getShopCart({ commit }) {
        // params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqShopCart()
            // console.log(result);
        if (result.code == 200) {
            commit("SHOPCART", result.data)
        }
    },
    // 删除产品
    async deleteCartById({ commit }, skuId) {
        // params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqDeleteCartById(skuId)
            // console.log(result);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    // 修改商品状态
    async UpdateCheckdByid({ commit }, { skuId, isChecked }) {
        // params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqUpdateCheckdByid(skuId, isChecked)
            // console.log(result);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    // 全部删除函数
    deleteAllCheckedCart({ dispatch, getters }) {
        // 获得购物车中全部产品（是一个数组）
        let PromiseAll = [];
        getters.carList.cartInfoList.forEach(item => {
            // 返回的是一个数组
            let promise = item.isChecked == 1 ? dispatch("deleteCartById", item.skuId) : "";
            // 每一次返回的数组均添加的总数组里面
            PromiseAll.push(promise)

        });
        // 只有p1、p2均成功之后才会返回正确
        return Promise.all(PromiseAll);
    },
    // 全选按钮
    UpdateAllCartChecked({ dispatch, getters }, isChecked) {
        let PromiseAll = []
        getters.carList.cartInfoList.forEach(item => {
            let promise = dispatch("UpdateCheckdByid", { skuId: item.skuId, isChecked: isChecked })
            PromiseAll.push(promise);
        })
        return Promise.all(PromiseAll)
    }
}
const mutations = {
    SHOPCART(state, shopCart) {
        state.shopCart = shopCart;
    },

}
const state = {
        // 初始值不要瞎写
        shopCart: [],

    }
    // 计算属性，为了简化数据而生
const getters = {
    carList(state) {
        return state.shopCart[0] || []
    },
    //这才是真正想要的数据 

}
export default {
    actions,
    state,
    mutations,
    getters
}