//search仓库
import { reGoodInfo, reqAddOrUpdateShopCart } from "@/api"
import { getUUID } from "../utils/uuid_token"
const actions = {
    // 获取模块数据
    async getGoodInfo({ commit }, skuId) {
        // params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reGoodInfo(skuId)
        if (result.code == 200) {
            commit("GETGOODINFO", result.data)
        }
    },
    async getAddOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        // params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
            // console.log(result);
            // 将最后的数据返回，如果成功则将成功的信息反馈，否则提醒用户失败
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    },
}
const state = {
        // 初始值不要瞎写
        goodInfo: {},
        uuid_token: getUUID()
    }
    // 计算属性，为了简化数据而生
const getters = {
    // 导航简化数据
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    // 产品信息数据
    skuInfo() {
        return state.goodInfo.skuInfo || {}
    },
    // 售卖属性的简化
    spuSaleAttrList() {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    actions,
    state,
    mutations,
    getters
}