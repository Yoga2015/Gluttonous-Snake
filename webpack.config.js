//引入一个包   主要用来拼接路径
const path = require('path');
//引入HTML插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { options } = require('less');

//webpack 中的所有的配置信息都应该写在module.export 中
module.exports = {

    //指定入口文件   即 主文件，指定完就去进行打包。
    entry:"./src/index.ts",   //由于我们程序需要写很多代码，所以需要指定入口文件

    //指定打包文件输出的目录（打包完）   （对入口文件进行打包，实际就是把文件输出到指定位置）
    output:{
        //指定打包文件输出的目录
        path:path.resolve(__dirname,'dist'),
        //打完包后文件的文件名 
        filename:"bundle.js",

        //告诉webpack不使用箭头
        environment:{
          arrowFunction:false,   //默认情况下是使用箭头函数的，而我们要兼容老版本浏览器就不能箭头函数
          const:false,   //默认情况下webpack会使用const，低版本浏览器不支持const ,故 
        }

    }, 


    mode:"development",

    
    //指定webpack 打包时要使用的模块
    module:{
       //由于webpack所使用的文件会涉及到很多种：js、ts、css、图片、字体等，所以还需要来指定要加载的规则
        rules:[

            //设置ts文件的处理
            {
                //test 指定的是规则生效的文件，我们主要的是对以ts结尾的 文件进行编译
                test:/\.ts$/,  //要指定规则，比如现在要用的ts-loader,ts-loader对谁生效。
                //要使用的loader
                use:[
                    {
                     //配置babel
                       //指定加载器
                       loader:"babel-loader",
                       //设置babel
                       options:{
                           //设置预定义的环境
                           presets:[
                               [
                                   //指定环境的插件
                                   "@babel/preset-env",
                                   //配置信息
                                   {
                                       //要兼容的目标浏览器
                                       targets:{
                                           "chrome":"50",
                                           "ie":"11"
                                       },

                                       //指定corejs的版本
                                       "corejs":"3",
                                       //使用corejs的方式 "usage" 表示按需加载
                                       "useBuiltIns":"usage",
                                   }
                               ]
                           ]
                       }   
                    },
                    'ts-loader'
                ],
                //要排除的文件，不是所有文件都要编译，就好比如
                exclude:/node-modules/,
            },

            //设置less文件的处理
            {   
                test:/\.less$/,  //test 指定的是规则生效的文件，我们主要的是对以less结尾的 文件进行编译
                use:[
                    "style-loader",
                    "css-loader",  
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
            
        ]
    },

//配置webpack插件
plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
    //    title:"这是一个自定义的title",
        template:"./src/index.html",  // 记得在src 下创建index.html 模板 
    }),
],

//用来设置模块，设置引用模块，哪些文件可以作为模块
resolve:{
    extensions:['.ts','.js'],  //凡是以ts 、js 结尾的文件都可以作为模块使用
}

}
