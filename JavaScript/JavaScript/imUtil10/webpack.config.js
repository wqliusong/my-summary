<<<<<<< HEAD
modulw.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + `/app/main.js`,
    output: {
        path: __dirname + "/public", //打包存放的地方
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在目录
        historyApiFallback: true, //所有页面都跳转至index.html, 制作单页面应用时使用设置为true, 多页面应用设置为false, 由页面控制跳转  
        inline: true //实时刷新
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, "./node_modules"),
                include: path.resolve(__dirname, "./app")
            }
        ]
    }
}


//__dirname node.js中的全局变量, 指向当前执行脚本所在的目录
/* 
    Loaders的配置包括以下几方面：
    test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
    loader：loader的名称（必须）
    include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    query：为loaders提供额外的设置选项（可选）
=======
modulw.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + `/app/main.js`,
    output: {
        path: __dirname + "/public", //打包存放的地方
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在目录
        historyApiFallback: true, //所有页面都跳转至index.html, 制作单页面应用时使用设置为true, 多页面应用设置为false, 由页面控制跳转  
        inline: true //实时刷新
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, "./node_modules"),
                include: path.resolve(__dirname, "./app")
            }
        ]
    }
}


//__dirname node.js中的全局变量, 指向当前执行脚本所在的目录
/* 
    Loaders的配置包括以下几方面：
    test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
    loader：loader的名称（必须）
    include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    query：为loaders提供额外的设置选项（可选）
>>>>>>> cffaa633d1407b7f720373df948027596ad4a1a5
*/