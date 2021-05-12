module.exports = {
    devServer: {
        proxy:{
            '/api': {
                target: 'http://localhost:8081', //API服务器的地址
                changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
                pathRewrite: {
                    '^/api': '',
                }
            }
        }
    },
    lintOnSave:false
};