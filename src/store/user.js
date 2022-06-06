//search仓库
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLoginOut } from "@/api"
import { Settoken, Gettoken, removeToken } from "@/utils/token"
const actions = {
    // 获取模块数据
    async getCode({ commit }, phone) {
        // params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetCode(phone)
            // console.log(result);
            // console.log(result);
        if (result.code == 200) {
            commit("GETCODE", result.data)
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    // 用户注册
    async UserRegister({ commit }, user) {
        let result = await reqUserRegister(user)
            // console.log(result);
        if (result.code == 200) {
            // commit("GETCODE", result.data)
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    // 用户登录[token]
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        // 服务器会给一个token进行用户信息确认
        // console.log(result);
        if (result.code == 200) {
            Settoken(result.data.token)
            commit("USERLOGIN", result.data.token)
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    // 获得用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
            // console.log(result);
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    // 退出登录
    async logout({ commit }) {
        let result = await reqLoginOut();
        // 只是跟服务器发起请求，通知服务器清除token
        if (result.code == 200) {
            commit("CLEAR");
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
}
const mutations = {
    GETCODE(state, Code) {
        state.data = Code;
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    // 清空本地数据
    CLEAR(state) {
        // 先帮仓库清空数据再清空本地存储
        state.token = "";
        state.userInfo = {};
        removeToken()
    }

}
const state = {
        // 初始值不要瞎写
        code: "",
        token: Gettoken(),
        userInfo: {}
    }
    // 计算属性，为了简化数据而生
const getters = {}
export default {
    actions,
    state,
    mutations,
    getters
}