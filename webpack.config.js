const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/client/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'client/dist/assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, '/client/dist'),
        compress: true,
        port: 8080,
        hot: true,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./client/dist/index.html",
            filename: "./index.html"
        })
    ]
};