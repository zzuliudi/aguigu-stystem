const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    plugins: [vue()],
    base: "/background-system/",
    publicPath: './',
    outputDir: 'dist',
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false,
    // 代理服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                // pathRewrite: { '^/api': '' },
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/demo': '' },
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            }
        }
    }
})