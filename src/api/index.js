// api统一管理
import request from './request.js';
import mockRequest from "./mockAjax"
export const reqCategoryList = () => request({ url: "/product/getBaseCategoryList", method: "GET" })
    // 获取banner轮播图
export const reqGetBannerList = () => mockRequest.get("/banner")
    // 获得轮播图楼梯的数据
export const reqGetFloorList = () => mockRequest.get('/floor')
    // 获取接口文档(搜索商品)post需要带参数
export const reqGetSearchInfo = (params) => request({ url: "/list", method: "POST", data: params });
// 获取产品的详情接口/item/{ skuId }
export const reGoodInfo = (skuId) => request({ url: `/item/${skuId}`, method: "GET" })

// 获得购物车接口/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "POST" })

// 获取购物车列表/cart/cartList
export const reqShopCart = () => request({ url: "/cart/cartList", method: "GET" })

// /cart/deleteCart/{skuId}删除购物车
export const reqDeleteCartById = (skuId) => request({ url: `/cart/deleteCart/${skuId}`, method: "DELETE" })

// /cart/checkCart/{skuId}/{isChecked}
// 修改商品的选中状态
export const reqUpdateCheckdByid = (skuId, isChecked) => request({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "GET" })

// /user/passport/sendCode/{phone}获取验证码接口
export const reqGetCode = (phone) => request({ url: `/user/passport/sendCode/${phone}`, method: "get" })

// /user/passport/register注册接口
export const reqUserRegister = (data) => request({ url: "/user/passport/register", data, method: "post" })

// /api/user/passport/login 登录接口
export const reqUserLogin = (data) => request({ url: "/user/passport/login", data, method: "post" })

//  获得用户信息
// /user/passport/auth/getUserInfo
export const reqUserInfo = () => request({ url: "/user/passport/auth/getUserInfo", method: "get" })

// /user/passport/logout退出登录
export const reqLoginOut = () => request({ url: "/user/passport/logout", method: "get" })
    // /api/user/userAddress/auth/findUserAddressList获得用户地址信息
export const reqAddressList = () => request({ url: "/user/userAddress/auth/findUserAddressList", method: "get" })

// /api/order/auth/trade交易商品信息
export const reqOrderInfo = () => request({ url: "/order/auth/trade", method: "get" })
    // /api/order/auth/{page}/{limit}获得我的订单列表
export const reqMyOrderList = (page, limit) => request({ url: `/order/auth/${page}/${limit}`, method: "get" })

// /api/order/auth/submitOrder?tradeNo={tradeNo} 提交订单的接口
export const reqSubmitOrder = (tradeNo, data) => request({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "POST" })
    // /api/payment/weixin/createNative/{orderId}订单支付信息
export const reqPayInfo = (orderId) => request({ url: `/payment/weixin/createNative/${orderId}`, method: "get" })
    // /api/payment/weixin/queryPayStatus/{orderId} get 获得订单支付状态
export const reqPayStatus = (orderId) => request({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get" })