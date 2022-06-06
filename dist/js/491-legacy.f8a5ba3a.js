"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[491],{4491:function(s,t,e){e.r(t),e.d(t,{default:function(){return v}});var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"trade-container"},[e("h3",{staticClass:"title"},[s._v("填写并核对订单信息")]),e("div",{staticClass:"content"},[e("h5",{staticClass:"receive"},[s._v("收件人信息")]),s._l(s.addresssList,(function(t){return e("div",{key:t.id,staticClass:"address clearFix"},[e("span",{staticClass:"username",class:{selected:1==t.isDefault}},[s._v(s._s(t.consignee))]),e("p",{on:{click:function(e){return s.changeDefault(t,s.addresssList)}}},[e("span",{staticClass:"s1"},[s._v(s._s(t.fullAddress))]),e("span",{staticClass:"s2"},[s._v(s._s(t.phoneNum))]),e("span",{staticClass:"s3"},[s._v("默认地址")])])])})),e("div",{staticClass:"line"}),e("h5",{staticClass:"pay"},[s._v("支付方式")]),s._m(0),e("div",{staticClass:"line"}),e("h5",{staticClass:"pay"},[s._v("送货清单")]),s._m(1),e("div",{staticClass:"detail"},[e("h5",[s._v("商品清单")]),s._l(s.OrderInfo.detailArrayList,(function(t){return e("ul",{key:t.skuId,staticClass:"list clearFix"},[e("li",[e("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.imgUrl,alt:""}})]),e("li",[e("p",[s._v(s._s(t.skuName))]),e("h4",[s._v("7天无理由退货")])]),e("li",[e("h3",[s._v("￥"+s._s(t.orderPrice)+".00")])]),e("li",[s._v("X"+s._s(t.skuNum))]),e("li",[s._v("有货")])])}))],2),e("div",{staticClass:"bbs"},[e("h5",[s._v("买家留言：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:s.psy,expression:"psy"}],staticClass:"remarks-cont",attrs:{placeholder:"建议留言前先与商家沟通确认"},domProps:{value:s.psy},on:{input:function(t){t.target.composing||(s.psy=t.target.value)}}})]),e("div",{staticClass:"line"}),s._m(2)],2),e("div",{staticClass:"money clearFix"},[e("ul",[e("li",[e("b",[e("i",[s._v(s._s(s.OrderInfo.totalNum))]),s._v("件商品，总商品金额")]),e("span",[s._v("¥"+s._s(s.OrderInfo.totalAmount)+".00")])]),s._m(3),s._m(4)])]),e("div",{staticClass:"trade"},[e("div",{staticClass:"price"},[s._v(" 应付金额:　"),e("span",[s._v("¥"+s._s(s.OrderInfo.totalAmount)+".00")])]),e("div",{staticClass:"receiveInfo"},[s._v(" 寄送至: "),e("span",[s._v(s._s(s.userDefaultaAdress.fullAddress))]),s._v(" 收货人："),e("span",[s._v(s._s(s.userDefaultaAdress.consignee))]),e("span",[s._v(s._s(s.userDefaultaAdress.phoneNum))])])]),e("div",{staticClass:"sub clearFix"},[e("a",{staticClass:"subBtn",attrs:{to:"/pay"},on:{click:s.submitOrder}},[s._v("提交订单")])])])},r=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"address clearFix"},[e("span",{staticClass:"username selected"},[s._v("在线支付")]),e("span",{staticClass:"username",staticStyle:{"margin-left":"5px"}},[s._v("货到付款")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"way"},[e("h5",[s._v("配送方式")]),e("div",{staticClass:"info clearFix"},[e("span",{staticClass:"s1"},[s._v("天天快递")]),e("p",[s._v("配送时间：预计8月10日（周三）09:00-15:00送达")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"bill"},[e("h5",[s._v("发票信息：")]),e("div",[s._v("普通发票（电子） 个人 明细")]),e("h5",[s._v("使用优惠/抵用")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("li",[e("b",[s._v("返现：")]),e("span",[s._v("0.00")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("li",[e("b",[s._v("运费：")]),e("span",[s._v("0.00")])])}],i=e(6198),n=e(3019),l=(e(5666),e(9826),e(1539),e(4747),e(629)),c={name:"Trade",data:function(){return{psy:"",orderId:""}},mounted:function(){this.$store.dispatch("getAddresssList"),this.$store.dispatch("getOrderInfo")},computed:(0,n.Z)((0,n.Z)({},(0,l.rn)({addresssList:function(s){return s.trade.addressInfo},OrderInfo:function(s){return s.trade.orderinfo}})),{},{userDefaultaAdress:function(){return this.addresssList.find((function(s){return 1==s.isDefault}))||{}}}),methods:{changeDefault:function(s,t){t.forEach((function(s){s.isDefault=0})),s.isDefault=1},submitOrder:function(){var s=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=s.OrderInfo.tradeNo,a={consignee:s.userDefaultaAdress.consignee,consigneeTel:s.userDefaultaAdress.phoneNum,deliveryAddress:s.userDefaultaAdress.fullAddress,paymentWay:"ONLINE",orderComment:s.psy,orderDetailList:s.OrderInfo.detailArrayList},t.next=4,s.$API.reqSubmitOrder(e,a);case 4:r=t.sent,console.log(r),200==r.code?(s.orderId=r.data,s.$router.push("/pay?orderId="+s.orderId)):alert(r.data);case 7:case"end":return t.stop()}}),t)})))()}}},d=c,u=e(1001),o=(0,u.Z)(d,a,r,!1,null,"15f02699",null),v=o.exports},9826:function(s,t,e){var a=e(2109),r=e(2092).find,i=e(1223),n="find",l=!0;n in[]&&Array(1)[n]((function(){l=!1})),a({target:"Array",proto:!0,forced:l},{find:function(s){return r(this,s,arguments.length>1?arguments[1]:void 0)}}),i(n)}}]);
//# sourceMappingURL=491-legacy.f8a5ba3a.js.map