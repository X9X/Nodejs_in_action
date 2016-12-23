const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const src = './src/main/webapp/';
const src1 = 'classes/artifacts/yishou_web_front/exploded/ROOT.war/';
module.exports = {
    entry: {
        [src1 + 'm/asset/dist/list/list']: src + 'm/asset/page/list/list-entry.js',
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.scss$/,   loader: ExtractTextPlugin.extract({
                fallbackLoader:'style-loader',
                loader:'css-loader?-url!postcss-loader!sass-loader?'
            })},
        ]
    },
    devtool: 'cheap-source-map',
    resolve: {
        modules: [path.resolve(__dirname, "src/main/webapp/m/asset/common/js/component/"),
            path.resolve(__dirname, "src/main/webapp/"),"node_modules"]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } }),
        new ExtractTextPlugin('[name].min.css')
    ],
};
