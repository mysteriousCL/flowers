const autoprefixer = require('autoprefixer');
const express = require('express')
const pxtorem = require('postcss-pxtorem');

module.exports = {
    devServer:{
        open: false, // 编译完成是否打开网页
        host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 2333, // 访问端口
        https: false, // 编译失败时刷新页面
        hot: true, // 开启热加载，
        hotOnly: false,// 模块刷新，不会做页面刷新
        // proxy: {
        //     // 当碰到/api时，如果API中有这个字符串，那么就开始匹配代理。服务器代理到target对应接口
        //     '/api': {
        //         target: 'http://localhost:3000', //代理的API地址，就是需要跨域的API地址。这个值可以域名，也可以是ip地址。如果是域名需要额外
        //         //添加一个参数changeOrigin: true，否则会代理失败。
        //         changeOrigin: true,// 这个参数可以让target参数是域名。
        //         secure: false,          // 不检查安全问题。设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器
        //         pathRewrite: {//路径重写，也就是说会修改最终请求的API路径。如果你不想始终传递 /api ，则需要重写路径
        //             '^/api': ''//如果你不想始终传递 /api ，则需要重写路径：，其主要作用就是移除URL前面的/api部分。
        //         }
        //     }
        // }
    },
    configureWebpack:{
        resolve:{
            extensions: ['.js', '.json', '.vue','.scss','.css','.less'],  // 自动添加文件名后缀
            alias:{
                //'src': '@', 默认已配置
                'assets': '@/assets',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views',
                'store':'@/store',
                'plugins': '@/plugins',
                'config': '@/config',
                'share':'@/share'
            }
        }
    },
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    autoprefixer(),
                    pxtorem({
                        rootValue: 75,
                        propList: ['*'],
                        "selectorBlackList":["van-"]   //排除vant框架相关组件
                    })
                ]
            }
        }
    }
}