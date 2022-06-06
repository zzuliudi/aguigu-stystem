import { reqAddressList, reqOrderInfo } from "@/api"
const actions = {
    // 获得收件人信息
    async getAddresssList({ commit }) {
        let result = await reqAddressList()
            // console.log(result);
        if (result.code == 200) {
            commit("ADDRESSLIST", result.data)
        }
    },
    // 获得订单信息
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo()
            // console.log(result);
        if (result.code == 200) {
            commit("GETORDERINFO", result.data)
        }
    }

}
const mutations = {
    ADDRESSLIST(state, addressInfo) {
        state.addressInfo = addressInfo;
    },
    GETORDERINFO(state, orderinfo) {
        state.orderinfo = orderinfo;
    }
}
const state = {
    // 初始值不要瞎写
    addressInfo: [],
    orderinfo: {}
}
const getters = {

}
export default {
    actions,
    state,
    mutations,
    getters
}