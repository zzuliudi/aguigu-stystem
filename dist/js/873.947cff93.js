"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[873],{8873:function(i,t,e){e.r(t),e.d(t,{default:function(){return I}});var l=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"login-container"},[e("div",{staticClass:"login-wrap"},[e("div",{staticClass:"login"},[e("div",{staticClass:"loginform"},[i._m(0),e("div",{staticClass:"content"},[e("form",[e("div",{staticClass:"input-text clearFix"},[e("span"),e("input",{directives:[{name:"model",rawName:"v-model",value:i.phone,expression:"phone"}],attrs:{type:"text",placeholder:"邮箱/用户名/手机号"},domProps:{value:i.phone},on:{input:function(t){t.target.composing||(i.phone=t.target.value)}}})]),e("div",{staticClass:"input-text clearFix"},[e("span",{staticClass:"pwd"}),e("input",{directives:[{name:"model",rawName:"v-model",value:i.password,expression:"password"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:i.password},on:{input:function(t){t.target.composing||(i.password=t.target.value)}}})]),i._m(1),e("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),i.userLogin.apply(null,arguments)}}},[i._v("登  录")])]),e("div",{staticClass:"call clearFix"},[i._m(2),e("router-link",{staticClass:"register",attrs:{to:"/register"}},[i._v("立即注册")])],1)])])])]),i._m(3)])},c=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("ul",{staticClass:"tab clearFix"},[e("li",[e("a",{staticStyle:{"border-right":"0"},attrs:{href:"##"}},[i._v("扫描登录")])]),e("li",[e("a",{staticClass:"current",attrs:{href:"##"}},[i._v("账户登录")])])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"setting clearFix"},[e("label",{staticClass:"checkbox inline"},[e("input",{attrs:{name:"m1",type:"checkbox",value:"2",checked:""}}),i._v(" 自动登录 ")]),e("span",{staticClass:"forget"},[i._v("忘记密码？")])])},function(){var i=this,t=i.$createElement,l=i._self._c||t;return l("ul",[l("li",[l("img",{attrs:{src:e(2733),alt:""}})]),l("li",[l("img",{attrs:{src:e(8979),alt:""}})]),l("li",[l("img",{attrs:{src:e(4975),alt:""}})]),l("li",[l("img",{attrs:{src:e(2696),alt:""}})])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"copyright"},[e("ul",[e("li",[i._v("关于我们")]),e("li",[i._v("联系我们")]),e("li",[i._v("联系客服")]),e("li",[i._v("商家入驻")]),e("li",[i._v("营销中心")]),e("li",[i._v("手机尚品汇")]),e("li",[i._v("销售联盟")]),e("li",[i._v("尚品汇社区")])]),e("div",{staticClass:"address"},[i._v("地址：北京市昌平区宏福科技园综合楼6层")]),e("div",{staticClass:"beian"},[i._v("京ICP备19006430号 ")])])}],A=e(6198),a={name:"Login",data:function(){return{password:"",phone:""}},methods:{userLogin:function(){var i=this;return(0,A.Z)(regeneratorRuntime.mark((function t(){var e,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e=i.phone,l=i.password,t.t0=e&&l,!t.t0){t.next=6;break}return t.next=6,i.$store.dispatch("userLogin",{phone:e,password:l});case 6:c=i.$route.query.redirect||"/home",i.$router.push(c),t.next=13;break;case 10:t.prev=10,t.t1=t["catch"](0),alert(t.t1.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},n=a,h=e(1001),s=(0,h.Z)(n,l,c,!1,null,"3c295dd2",null),I=s.exports},4975:function(i){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAIAAABzZz93AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDFBOERGMDcxOTIwNjgxMTgyMkE5RTI4MTI2OTA1RDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdCQTI0QUZBQkM1MTFFNjlEODRENEE2Njk5RjQ2M0QiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdCQTI0QUVBQkM1MTFFNjlEODRENEE2Njk5RjQ2M0QiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNmN2RiYzhjLTUyMjAtZTQ0My05YjJhLWE4MDgwM2ZhMDFhZCIgc3RSZWY6ZG9jdW1lbnRJRD0idXVpZDpCNzUyMThBQUJDNDNFNTExQjdEQzlCRjdDQjk1NzhEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmCYBnQAAAH2SURBVHjaxFcxe4MgEJV++b5CJ3GqZqpusZv9/7+gbjVb7FTdPKfAZk0iBgwiRpveCAmPe+/ucaKmaZxHxZPzwNhY/7LK02/QrHth8kbtjkCTNEL+mQOaPols490rvhvMFkaKhkYfoTsXbIw0mxglVgfGi31WskWlQPx4F+DJalwBqQ1WZvuCT2TGy/1XwZCVKtPXGvKpZMbLgxlpZlSHvB6hkRf5bebLAkEhH3mlUVfoep0NwcssU28sN0PvIBVoWqrVOS3v1+ySHIDjUoXG09IfRVWB6o1nLDSvSXGwSwIbHwCoHer2YJxzswVX05Y4fgY6b2FB45HdW/Gu35kvBxjVjzG2wntGttuO36qwaJvNLHMbVHaflmV9bcwvk2i+rkawHyd+V/RHGkUirVx1CjPYCyENdLIRPzwhiSSQUiOXeyh12NppDo5RckKIpBnGPWPE8/C4BuwnS9tQSpyGkXksaMTxHY2UUgfq64apFwZt1/4Bh0mi9Spx+MCuTmg19O6CPUoKTT/IgwYc0lYqaaVTtN8Sl/PouBHj4D32n2/eNiWhG9e2smzp8ZSMVeBpzUe+9YKBZ0i6TNrMcUF73dljwZKxZ2BX2A8Dsg5Sq/FQxSfNwxH7ZAUkzav070PqgvHbVMYrfliYi94W7KGfTCvGrwADAK++WVzOXImwAAAAAElFTkSuQmCC"},2733:function(i){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAIAAACRuyQOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDFBOERGMDcxOTIwNjgxMTgyMkE5RTI4MTI2OTA1RDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODc0MDEwRTlBQkM1MTFFNjlEODRENEE2Njk5RjQ2M0QiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODc0MDEwRThBQkM1MTFFNjlEODRENEE2Njk5RjQ2M0QiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNmN2RiYzhjLTUyMjAtZTQ0My05YjJhLWE4MDgwM2ZhMDFhZCIgc3RSZWY6ZG9jdW1lbnRJRD0idXVpZDpCNzUyMThBQUJDNDNFNTExQjdEQzlCRjdDQjk1NzhEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu2rzW8AAAHkSURBVHjavJcxd4MgEMcjr+8FOgWnaqfq1nQz3/8TNFvsJp0KnSRTIZM1aU0QQQ/b5Eaf3g+O//84o6ZpFjcJtLhV3MFeq9n2XTqex1nxRGEpovHqSfbKZDSdhjyunx/wPBKUYURD8022CiL5agUJbz0t0hhjlRW5mUNWW7aH80ySFm87rqKgsniLPDi5i8q1qEIxbdBsk1HXSauPShycfqo518465H5MB8ucB6M5l0OSFsJ5PDhNAXaJ09Sp8Job20KjGyKULiGCw5SSqW2dSFJ69EYIhmkbY8+LdS0Nktb6eu1O68OFpJTyeJ5SsGEpdfeac3I0siVKV/C1+1YVdelb0pdSzv4WxzSkTD5UtykU2r5mdLyxmxBmI7ixfkn3hDT2B8lyntJwktCBU0hHsr0QIrlpETZdemRQrUXMDF82NDQ4xst5dv75xJmtU0S/XFLutSjLkvEgluas/Ugc+q3tYhU01Ewkq/IIUYJ9gllaMK6OuJ15MZoaRl7NuG4zP8d5i/Y0jPxWaJ1YrGFyx8m6GNjWMiUy3s5TApicZVUB5qZ2JrBWOTEbWfPQUSknneD0pZfInpMmZqO/D3tjDdA5WXrHsb+Mzd5p+VyogKZnlfQafwDjMyGIdLu/mn+MbwEGADJKCjbxx3TLAAAAAElFTkSuQmCC"},8979:function(i){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAjCAIAAACcpVRJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDFBOERGMDcxOTIwNjgxMTgyMkE5RTI4MTI2OTA1RDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODc0MDEwRURBQkM1MTFFNjlEODRENEE2Njk5RjQ2M0QiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODc0MDEwRUNBQkM1MTFFNjlEODRENEE2Njk5RjQ2M0QiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNmN2RiYzhjLTUyMjAtZTQ0My05YjJhLWE4MDgwM2ZhMDFhZCIgc3RSZWY6ZG9jdW1lbnRJRD0idXVpZDpCNzUyMThBQUJDNDNFNTExQjdEQzlCRjdDQjk1NzhEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtvUMcAAAALbSURBVHjavFe7kpswFAXPzlhKhagCqcJ2ZlOx//8FoVu7W21lsU2Qq0huQiQR9OZhb2ZV2Yy4j3PuPfeSDsOQfOLZJZ97Hm653OP2jUae51XzHW0zkW7Bk+KfmKbrxuC3+vAVfMTfVk/WGdDjc5XdwZ9Ar73VmcyAvrZx2Gf5m+Np7vj88e54bNsor2F+vDthehuAyDMKirpp6hL+wqd3vsyfDI3wj1Q8KJ/qYq/pJ/CH/hv44+R07NgqaEvXvMuCmndQH0oQ449TGrWSVc0jclKoSurAYDpB0PFCWI9PUD3JEcKEXsspRZu/nkSQFJG6zkaPwG0z1lPa4e4quTs8lXBI2PmsqkCQywmhkXqhlG4WDs65yawRxZFRkQZ5UZ0AEILqzlVdgDDpexrgqdylG1VKVmDhIHxocoUkYzxBMnsufibJVDj0kqDMzs9EPIZd1FslUfsc09K2ZGISauk2nczH9TqrTEVtP6Pl7th2KmKE9iFs2t9vxlItgH6BCInClzV1FiVj08EIuZTVn38PVSwglh8sy2xT+7PzsT0r5EcwBN+5rYVKSNf0c0ClRtIZDlY2bhBMAMhMgwqvyYL86nr5AuFgSFZGtTPR740FnSzOuoCWlUtn62RehfNosrvzOhiAvdf7Qg/DflcSA+x+73nEuoFtEohd/I7Vz2OZGYGdsPIlJqjUWHoWf7J9SKdEYT8aY0F9Su1v9rFNIs9BMi8dJmhLz0CO4CAkW2UmdHYIs53Q9uUvK6zG4KTztgIrmgdHpApE8Pm1Q2JioapCErqxjVz1cqvJJbjHwaiyo/Hm7ThNUj0zdUuYkeQOP2dUReeiKwvBfmbeMXod63rd5k6gIbHutdg+6Fm394PYZFqa9eG78f3zjrVz4yIa3z9R9VzfMSDczKJb7+y+K0Vrfk1ePqKI5ihY/364CdvlZX7r98qWvXSlrG71F1mYlgT0v39v3uVMnL8CDABUp7i1K3mqoQAAAABJRU5ErkJggg=="},2696:function(i){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAIAAAB+eU8wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDFBOERGMDcxOTIwNjgxMTgyMkE5RTI4MTI2OTA1RDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdCQTI0QjNBQkM1MTFFNjlEODRENEE2Njk5RjQ2M0QiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdCQTI0QjJBQkM1MTFFNjlEODRENEE2Njk5RjQ2M0QiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNmN2RiYzhjLTUyMjAtZTQ0My05YjJhLWE4MDgwM2ZhMDFhZCIgc3RSZWY6ZG9jdW1lbnRJRD0idXVpZDpCNzUyMThBQUJDNDNFNTExQjdEQzlCRjdDQjk1NzhEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvtRuSYAAAJNSURBVHjavFexkpswEAXmZk5KxZLmrKsCnUnH/f8XHN3ZHVxlkQpRRXKlSGAHAUKWnQvbeAZjPe3bt2/XoZQy+P8RBZvEk99rbV1+MsvzJC1+gMfvQydpojl+UB7ePga/5vsX9AAMq99rFt7FjITsLY39YdYo8gk7jQsYQY+Hhv9TvfEu3xPkgJli2ElgVVl39yKZMGPBEfmZ754f0p5dFJGhqqrHUBcpbmEMNShSWFcpP1XNedGegtZUWGl1BKRvDiRBK32kCcMo5ZqrbMRQNdAxYUapXD16N2oDabrenpzSzoRpmW6RhBhcCTHchHMxfxZevxvYI+vph4yxUQK9eBzNZWXEU/dxWmTQe1oPGWKM7/I39fs93DYOxroA4qeRHu8knpXIwK6IYgE2MKxq85v3vcI5v53HoYtzTYJbfrlZrf7caFmudbtuZOold7TLZ0I3x1rbunBayr6/glmhsjz+EqODKK0f/zbKTOiT6dnV43uLXEQAgGbaHokemMd4fCMBIyElgW8YS3aZXbw5fGLrQORcIsOBENkXZOo9ydzVlHSZ6D90NgihmV7LigVfFbI/XpMGMLt9kizTwTgU57sABkYB4uvKoXE6No4ZAGuT40jsXpB3hzW9gQ03jpblCpX3WI2En06+ZIqm1l4sr0RdlAaE+FiNS4oT1xnGIyYkngoakdRrzigpqlTPzp3rYjbmWImM1s0Iln60f8ymznWa6GMA8DCkM2OsuFaOx9YaNX4oFY6VY7MFart1cMPldsNVfcs/Hl8WfwQYABCLhZuUxkSzAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=873.947cff93.js.map