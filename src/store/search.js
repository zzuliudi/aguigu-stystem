//search仓库
import { reqGetSearchInfo } from "@/api"
const actions = {
    // 获取模块数据
    async getSearchInfo({ commit }, params) {
        // params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("CATSEARCHINFO", result.data)
        }
    },
}
const mutations = {
    CATSEARCHINFO(state, SearchList) {
        state.SearchList = SearchList;
    },
}
const state = {
        // 初始值不要瞎写
        SearchList: {},
    }
    // 计算属性，为了简化数据而生
const getters = {
    attrsList(state) {
        return state.SearchList.attrsList || []
    },
    goodsList(state) {
        return state.SearchList.goodsList || []
    },
    trademarkList(state) {
        return state.SearchList.trademarkList || []
    }
}
export default {
    actions,
    state,
    mutations,
    getters
}