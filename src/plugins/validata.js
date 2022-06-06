// vee-validata插件:表单验证区间
import Vue from "vue";
import VeeValidata from "vee-validate";
// 中文的提示信息
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidata)
    // 表单验证
VeeValidata.Validator.localize('zh_CN', {
        messages: {
            ...zh_CN.messages,
            is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
        },
        attributes: { // 给校验的 field 属性名映射中文名称
            phone: '手机号',
            code: '验证码',
            password: '密码',
            password1: '确认密码',
            agree: '协议'
        }
    })
    //定义协议必须打勾同意
VeeValidata.Validator.extend('tongyi', {
    validate: value => {
        return value
    },
    getMessage: field => field + '必须同意'
})