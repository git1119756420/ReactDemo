var path=require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.join(__dirname,'dist'));
var config = {
    //打包入口文件
    entry: {
      /*  basic_demo:'./src/basic_demo.js',
        ajax_demo:'./src/ajax_demo.js',
        refs_demo:'./src/refs_demo.js',*/
        index:'./src/js/react-router_demo.js',
    },
    /*
     * path:输出到根目录
     * filename：输出的文件名
     * */
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'js/[name].js',
        chunkFilename: "js/[id].chunk.js"
    },
    /*
     * port：服务器端口号
     * inline:
     * contentBase:设置网站访问根目录
     * */
    devServer: {
        inline: true,
        port: 7777,
        contentBase: './src/view'   
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
            { test: /\.html$/, loader: "html" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=./img/[hash].[ext]' }

        ]
    },
    plugins:[
        new webpack.ProvidePlugin({	//加载jq
            $: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({						
			template:'./src/view/index.html',	//html模板路径
		})

    ],
    resolve:{
        alias:{
           
        }
    }

}

module.exports = config;