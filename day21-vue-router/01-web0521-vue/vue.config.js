module.exports = {

    lintOnSave:false, //关闭语法检查,
    // 方式一: 
    // devServer:{
    //     proxy: 'http://127.0.0.1:5000'
    // }


    //方式二: 
    devServer: {
        proxy: {
            '/atguigu0':{
                target: 'http://127.0.0.1:5000',
                // 由于浏览器发送请求的路径是
                // /atguigu0/test .所以导致代理服务器发给目标服务器的路径也是/atguigu0/test. 但是目标服务器的路径不是/atguigu0/test, 是/test.
                // pathRewrite的作用: 就是将发送给目标服务器的路径由/atguigu0/test 改为 /test
                pathRewrite:{'^/atguigu0':''},
                changeOrigin: false
            },
            '/atguigu1':{
                target: 'http://127.0.0.1:5001',
                pathRewrite:{'^/atguigu1':''},
            },
        }
    }
}