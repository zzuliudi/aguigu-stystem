import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
            // console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data.slice(0, 16))
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()

        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    // 楼层轮播图
    async getFloorList({ commit }) {
        let result = await reqGetFloorList()
            // console.log(result.code, result.data);
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    },
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, BannerList) {
        state.BannerList = BannerList;
    },
    GETFLOORLIST(state, FloorList) {
        state.FloorList = FloorList;
    }
}
const state = {
    // 初始值不要瞎写
    categoryList: [],
    BannerList: [],
    FloorList: []
}
const getters = {

}
export default {
    actions,
    state,
    mutations,
    getters
}