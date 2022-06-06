// 储存数据
export const Settoken = (token) => {
        localStorage.setItem("TOKEN", token)
    }
    // 获取数据
export const Gettoken = () => {
    return localStorage.getItem("TOKEN")
}
export const removeToken = () => {
    return localStorage.removeItem("TOKEN")
}