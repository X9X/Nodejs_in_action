const path = require("path");
const webpack = require("webpack");
module.exports = {
    entry: [
        './test.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'test.min.js'
    },
    module: {
        rules: [
          {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    devtool: 'source-map',
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap:true
        })
    ],
    resolve :{
        alias: {
          vue: 'vue/dist/vue.js'
        }
    }
};
