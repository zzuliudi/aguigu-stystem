import { v4 as uuidv4 } from 'uuid';
export const getUUID = () => {
    // 先从本地存储获取UUID，（看看有没有）
    let uuid_token = localStorage.getItem("UUIDTOKEN")
    if (!uuid_token) {
        // 如果本地存储没有的话生成游客临时身份
        uuid_token = uuidv4();
        // 本地存储一次
        localStorage.setItem("UUIDTOKEN", uuid_token)
    }
    // 切记需要有返回值
    return uuid_token;
}