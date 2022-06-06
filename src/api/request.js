//对axios进行二次封装
import axios from "axios"
import nprogress from "nprogress"
import store from "@/store";
// star代表开始
// done代表进度条结束
// 引入样式
import "nprogress/nprogress.css"
// console.log(nprogress);
const request = axios.create({
    // 配置对象
    baseURL: "/api",
    timeout: 5000
});
// 请求拦截器
request.interceptors.request.use((config) => {
        // config是配置对象
        if (store.state.detail.uuid_token) {
            // 请求头添加一个字段（userTempId）：和后台老师商量好了
            config.headers.userTempId = store.state.detail.uuid_token;
        }
        // 需要携带token带给服务器
        if (store.state.user.token) {
            config.headers.token = store.state.user.token;
        }
        nprogress.start()
        return config;
    })
    // 响应拦截器
request.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error("faile"))
})

// 对外暴露
export default request;