(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[425],{4425:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("TypeNav"),a("div",{staticClass:"main"},[a("div",{staticClass:"py-container"},[a("div",{staticClass:"bread"},[t._m(0),a("ul",{staticClass:"fl sui-tag"},[t.searchParams.categoryName?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.categoryName)+" "),a("i",{on:{click:t.removecategoryName}},[t._v("×")])]):t._e(),t.searchParams.keyword?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.keyword)),a("i",{on:{click:t.removekeyword}},[t._v("×")])]):t._e(),t.searchParams.trademark?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.trademark.split(":")[1])),a("i",{on:{click:t.removetrademark}},[t._v("×")])]):t._e(),t._l(t.searchParams.props,(function(e,r){return a("li",{key:r,staticClass:"with-x"},[t._v(" "+t._s(e.split(":")[1])),a("i",{on:{click:function(e){return t.removeattrValue(r)}}},[t._v("×")])])}))],2)]),a("SearchSelector",{on:{trademarkInfo:t.trademarkInfo,attrInfo:t.attrInfo}}),a("div",{staticClass:"details clearfix"},[a("div",{staticClass:"sui-navbar"},[a("div",{staticClass:"navbar-inner filter"},[a("ul",{staticClass:"sui-nav"},[a("li",{class:{active:t.isOne},on:{click:function(e){return t.changeOrder("1")}}},[a("a",[t._v("综合 "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isOne,expression:"isOne"}],staticClass:"iconfont icon-arrowdown",class:{"icon-arrowdown":t.isDesc,"icon-arrowup":t.isAsc}})])]),a("li",{class:{active:t.isTwo},on:{click:function(e){return t.changeOrder("2")}}},[a("a",[t._v("价格 "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isTwo,expression:"isTwo"}],staticClass:"iconfont",class:{"icon-arrowdown":t.isDesc,"icon-arrowup":t.isAsc}})])])])])]),a("div",{staticClass:"goods-list"},[a("ul",{staticClass:"yui3-g"},t._l(t.goodsList,(function(e){return a("li",{key:e.id,staticClass:"yui3-u-1-5"},[a("div",{staticClass:"list-wrap"},[a("div",{staticClass:"p-img"},[a("router-link",{attrs:{to:"/detail/"+e.id}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.defaultImg,expression:"good.defaultImg"}]})])],1),a("div",{staticClass:"price"},[a("strong",[a("em",[t._v("¥")]),a("i",[t._v(t._s(e.price))])])]),a("div",{staticClass:"attr"},[a("a",{attrs:{target:"_blank",href:"item.html",title:"促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"}},[t._v(t._s(e.title))])]),t._m(1,!0),t._m(2,!0)])])})),0)]),a("Pagination",{attrs:{pageNo:t.searchParams.pageNo,pageSize:t.searchParams.pageSize,total:t.total,continues:5},on:{getPageNo:t.getPageNo}})],1)],1)])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"fl sui-breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("全部结果")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commit"},[a("i",{staticClass:"command"},[t._v("已有"),a("span",[t._v("2000")]),t._v("人评价")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"operate"},[a("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[t._v("加入购物车")]),a("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[t._v("收藏")])])}],i=a(3019),n=(a(4916),a(4765),a(2222),a(561),a(3123),a(629)),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix selector"},[a("div",{staticClass:"type-wrap logo"},[a("div",{staticClass:"fl key brand"},[t._v("品牌")]),a("div",{staticClass:"value logos"},[a("ul",{staticClass:"logo-list"},t._l(t.trademarkList,(function(e){return a("li",{key:e.tmId,on:{click:function(a){return t.trademarkHandler(e)}}},[t._v(" "+t._s(e.tmName)+" ")])})),0)]),t._m(0)]),t._l(t.attrsList,(function(e){return a("div",{key:e.attrId,staticClass:"type-wrap"},[a("div",{staticClass:"fl key"},[t._v(t._s(e.attrName))]),a("div",{staticClass:"fl value"},[a("ul",{staticClass:"type-list"},t._l(e.attrValueList,(function(r,s){return a("li",{key:s,on:{click:function(a){return t.attrInfo(e,r)}}},[a("a",[t._v(t._s(r))])])})),0)]),a("div",{staticClass:"fl ext"})])}))],2)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ext"},[a("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[t._v("多选")]),a("a",{attrs:{href:"javascript:void(0);"}},[t._v("更多")])])}],l={name:"SearchSelector",computed:(0,i.Z)({},(0,n.Se)(["trademarkList","attrsList"])),methods:{trademarkHandler:function(t){this.$emit("trademarkInfo",t)},attrInfo:function(t,e){this.$emit("attrInfo",t,e)}}},u=l,h=a(1001),d=(0,h.Z)(u,c,o,!1,null,"373c6b8a",null),v=d.exports,f={name:"Search",data:function(){return{searchParams:{category1Id:"",category2Id:"",category3Id:"",categoryName:"",keyword:"",order:"1:desc",pageNo:1,pageSize:3,props:[],trademark:""}}},components:{SearchSelector:v},beforeMount:function(){Object.assign(this.searchParams,this.$route.query,this.$route.params)},mounted:function(){this.getData()},computed:(0,i.Z)((0,i.Z)((0,i.Z)({},(0,n.Se)(["attrsList","goodsList","trademarkList"])),(0,n.rn)({total:function(t){return t.search.SearchList.total}})),{},{isOne:function(){return-1!=this.searchParams.order.indexOf("1")},isTwo:function(){return-1!=this.searchParams.order.indexOf("2")},isAsc:function(){return-1!=this.searchParams.order.indexOf("asc")},isDesc:function(){return-1!=this.searchParams.order.indexOf("desc")}}),methods:{getData:function(){this.$store.dispatch("getSearchInfo",this.searchParams)},removecategoryName:function(){this.searchParams.categoryName=void 0,this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0,this.getData(),this.$route.params&&this.$router.push({name:"search",params:this.$route.params}),删除关键字},removeKeyword:function(){this.searchParams.keyword=void 0,this.getData(),this.$bus.$emit("clear"),this.$route.query&&this.$router.push({name:"search",query:this.$route.query})},trademarkInfo:function(t){this.searchParams.trademark="".concat(t.tmId,":").concat(t.tmName),this.getData()},attrInfo:function(t,e){var a="".concat(t.attrId,":").concat(e,":").concat(t.attrName);-1==this.searchParams.props.indexOf(a)&&this.searchParams.props.push(a),this.getData()},removetrademark:function(){this.searchParams.trademark=void 0,this.getData()},removeattrValue:function(t){this.searchParams.props.splice(t,1),this.getData()},changeOrder:function(t){var e=this.searchParams.order.split(":")[0],a=this.searchParams.order.split(":")[1],r="";r=e===t?"".concat(e,":").concat("desc"==a?"asc":"desc"):"".concat(t,":","desc"),this.searchParams.order=r,this.getData()},getPageNo:function(t){this.searchParams.pageNo=t,this.getData()}},watch:{$route:function(t,e){Object.assign(this.searchParams,this.$route.query,this.$route.params),this.getData(),this.searchParams.category1Id="",this.searchParams.category2Id="",this.searchParams.category3Id=""}}},m=f,p=(0,h.Z)(m,r,s,!1,null,"309fa404",null),g=p.exports},1530:function(t,e,a){"use strict";var r=a(8710).charAt;t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},9063:function(t,e,a){"use strict";a(4916);var r=a(1702),s=a(8052),i=a(2261),n=a(7293),c=a(5112),o=a(8880),l=c("species"),u=RegExp.prototype;t.exports=function(t,e,a,h){var d=c(t),v=!n((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),f=v&&!n((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[d]=/./[d]),a.exec=function(){return e=!0,null},a[d](""),!e}));if(!v||!f||a){var m=r(/./[d]),p=e(d,""[t],(function(t,e,a,s,n){var c=r(t),o=e.exec;return o===i||o===u.exec?v&&!n?{done:!0,value:m(e,a,s)}:{done:!0,value:c(a,e,s)}:{done:!1}}));s(String.prototype,t,p[0]),s(u,d,p[1])}h&&o(u[d],"sham",!0)}},7850:function(t,e,a){var r=a(111),s=a(4326),i=a(5112),n=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==s(t))}},7651:function(t,e,a){var r=a(7854),s=a(6916),i=a(9670),n=a(614),c=a(4326),o=a(2261),l=r.TypeError;t.exports=function(t,e){var a=t.exec;if(n(a)){var r=s(a,t,e);return null!==r&&i(r),r}if("RegExp"===c(t))return s(o,t,e);throw l("RegExp#exec called on incompatible receiver")}},1150:function(t){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},561:function(t,e,a){"use strict";var r=a(2109),s=a(7854),i=a(1400),n=a(9303),c=a(6244),o=a(7908),l=a(5417),u=a(6135),h=a(1194),d=h("splice"),v=s.TypeError,f=Math.max,m=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var a,r,s,h,d,_,x=o(this),y=c(x),k=i(t,y),C=arguments.length;if(0===C?a=r=0:1===C?(a=0,r=y-k):(a=C-2,r=m(f(n(e),0),y-k)),y+a-r>p)throw v(g);for(s=l(x,r),h=0;h<r;h++)d=k+h,d in x&&u(s,h,x[d]);if(s.length=r,a<r){for(h=k;h<y-r;h++)d=h+r,_=h+a,d in x?x[_]=x[d]:delete x[_];for(h=y;h>y-r+a;h--)delete x[h-1]}else if(a>r)for(h=y-r;h>k;h--)d=h+r-1,_=h+a-1,d in x?x[_]=x[d]:delete x[_];for(h=0;h<a;h++)x[h+k]=arguments[h+2];return x.length=y-r+a,s}})},4765:function(t,e,a){"use strict";var r=a(6916),s=a(9063),i=a(9670),n=a(4488),c=a(1150),o=a(1340),l=a(8173),u=a(7651);s("search",(function(t,e,a){return[function(e){var a=n(this),s=void 0==e?void 0:l(e,t);return s?r(s,e,a):new RegExp(e)[t](o(a))},function(t){var r=i(this),s=o(t),n=a(e,r,s);if(n.done)return n.value;var l=r.lastIndex;c(l,0)||(r.lastIndex=0);var h=u(r,s);return c(r.lastIndex,l)||(r.lastIndex=l),null===h?-1:h.index}]}))},3123:function(t,e,a){"use strict";var r=a(2104),s=a(6916),i=a(1702),n=a(9063),c=a(7850),o=a(9670),l=a(4488),u=a(6707),h=a(1530),d=a(7466),v=a(1340),f=a(8173),m=a(1589),p=a(7651),g=a(2261),_=a(2999),x=a(7293),y=_.UNSUPPORTED_Y,k=4294967295,C=Math.min,w=[].push,P=i(/./.exec),I=i(w),b=i("".slice),N=!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));n("split",(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=v(l(this)),n=void 0===a?k:a>>>0;if(0===n)return[];if(void 0===t)return[i];if(!c(t))return s(e,i,t,n);var o,u,h,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,_=new RegExp(t.source,f+"g");while(o=s(g,_,i)){if(u=_.lastIndex,u>p&&(I(d,b(i,p,o.index)),o.length>1&&o.index<i.length&&r(w,d,m(o,1)),h=o[0].length,p=u,d.length>=n))break;_.lastIndex===o.index&&_.lastIndex++}return p===i.length?!h&&P(_,"")||I(d,""):I(d,b(i,p)),d.length>n?m(d,0,n):d}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:s(e,this,t,a)}:e,[function(e,a){var r=l(this),n=void 0==e?void 0:f(e,t);return n?s(n,e,r,a):s(i,v(r),e,a)},function(t,r){var s=o(this),n=v(t),c=a(i,s,n,r,i!==e);if(c.done)return c.value;var l=u(s,RegExp),f=s.unicode,m=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(y?"g":"y"),g=new l(y?"^(?:"+s.source+")":s,m),_=void 0===r?k:r>>>0;if(0===_)return[];if(0===n.length)return null===p(g,n)?[n]:[];var x=0,w=0,P=[];while(w<n.length){g.lastIndex=y?0:w;var N,$=p(g,y?b(n,w):n);if(null===$||(N=C(d(g.lastIndex+(y?w:0)),n.length))===x)w=h(n,w,f);else{if(I(P,b(n,x,w)),P.length===_)return P;for(var E=1;E<=$.length-1;E++)if(I(P,$[E]),P.length===_)return P;w=x=N}}return I(P,b(n,x)),P}]}),!N,y)}}]);
//# sourceMappingURL=425-legacy.52cb4401.js.map