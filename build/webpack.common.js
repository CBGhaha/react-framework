const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const config={
  entry:{
    main: path.resolve(__dirname,'../src'), //项目的主入口
  },
  output:{

    //如果需要使用cdn
    // path:path.resolve(__dirname,'[hash]'), //cdn地址文件夹名字是hash变化的
    // publicPath:'http://www.cdn.com/mycdn/[hash]/',

    filename: "[name].[hash].js",
    path: path.resolve(__dirname,'dist'),
    publicPath: '/',
    chunkFilename:"[name].[chunkhash:8].js",//在entry中未定义的js 一般是动态按需加载时的js
    crossOriginLoading:'anonymous',//设置跨域js crossorigin的值（主要用于获取跨域js的报错信息）

  },
  //配置模块的读取和解析规则
  module:{
    rules:[
      {
        test:/\.js/,
        use:[
          {
            loader:'babel-loader',
          },
          'eslint-loader'
        ],
        exclude:path.resolve(__dirname,'node_module')
      },
      // 处理typescript
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: path.resolve(__dirname, './node_module')
      },
      //支持图片  import
      {
        test: /\.(png|jsp|gif)/,
        use:[
          {
            loader: 'url-loader',
            options:{
              query: {
                limit: 8192,
              }
            }
          }
        ],
      },

    ]
  },
  //配置webpack从入口文件进入编译 如何寻找对应的模块
  resolve:{
    //设置文件夹别名
    alias:{
        components:path.resolve(__dirname,'../src/components'),//匹配路径components
        // 'utils$':'./src/utils',//配置以utils为结尾的路径
    },
    //设置模块引入时可以省略的后缀名
    extensions:['.js','.less','.json','.jsx'],
    //设置webpack在哪个文件夹中寻找模块 默认是node_module
    modules:['node_modules'],


  },
  //代码分离---
    optimization: {
    splitChunks: {
      chunks: 'all', //将什么类型的代码块用于分割，三选一： "initial"：入口代码块 | "all"：全部 | "async"：按需加载的代码块
      minSize: 0, //大小超过30kb的模块才会被提取
      minChunks: 1, //某个模块至少被多少代码块引用，才会被提取成新的chunk
      maxAsyncRequests: 5, //分割后，按需加载的代码块最多允许的并行请求数，在webpack5里默认值变为6
      maxInitialRequests: 3, //分割后，入口代码块最多允许的并行请求数，在webpack5里默认值变为4
      automaticNameDelimiter: '~', //代码块命名分割符
      cacheGroups: {
        package: {
          name: true,
          chunks: 'all',
          minChunks: 2,
          maxSize: 1014 * 1024 * 4,
          priority: 3,
          test: (module) => {
            return /[\\/]node_modules[\\/]/.test(module.context);
          }
        },
        async: {
          chunks: 'async', 
          minSize: 0,
          name: true, // 按 chunk1~chunk2~chunk2~async命名 为false直接用数字id  为srting
          priority: 2
        },
        default: {
          chunks: 'all',
          minSize: 0,
          name: true,
          priority: 1
        }
      }

    },
    // 提取webpack运行时的代码
    runtimeChunk: {
      name: 'manifest'
    }
  },
  //插件 运用插件可以实现很多重要功能 代码压缩 自动生成html 热加载 提取公共库 等等
  plugins:[
    //自动生成html模板
    new HtmlWebpackPlugin({
        filename: 'index.html',//生成的html模板的名称
        template: path.join(__dirname, '../src/index.html')//生成的html的模板的
    }),
    new Dotenv(
      {
        path: path.join(__dirname, `../env/.env.${process.env.BUILD_ENV}`)
      }
    ),
  ],

  //项目的类型 默认是web项目
  target:'web',	//针对浏览器 (默认)，所有代码都集中在一个文件里
      // 'node'	针对 Node.js，使用 require 语句加载 Chunk 代码
      // 'async-node'	针对 Node.js，异步加载 Chunk 代码
      // 'webworker'	针对 WebWorker
      // 'electron-main'	针对 Electron 主线程
      // 'electron-renderer' 针对 Electron 渲染线程


//设置哪些模块不用打包到bundle里而是直接引用全局变量
//例如我在全局html里 引入jquery cdn地址 我在模块里引入jquery（import $ from 'jquery'）时不希望再将jq打包入bundle里
  externals:{
    // 把导入语句里的 jquery 替换成运行环境里的全局变量 jQuery
    jQuery:'jQuery'
  }
};
module.exports=config;
