const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: ['./source/js/index.js'],
    // module: {
    //     rules: [
    //         { test: /\.scss$/, use: [{
    //             loader: MiniCssExtractPlugin.loader,
    //             options: {
    //                 publicPath: '../dist'
    //             }
    //         }, 'css-loader', 'sass-loader']}
    //     ]
    // },
    plugins: [
        // new MiniCssExtractPlugin({
        //     // 类似 webpackOptions.output里面的配置 可以忽略
        //     filename: '[name].css',
        //     chunkFilename: '[id].css',
        //   }),
        new HtmlWebpackPlugin({
            title: 'RoseFocus Hexo Theme',
            template: './layout/layout.ejs'
        })
    ]
}