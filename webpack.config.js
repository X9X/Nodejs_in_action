const path = require("path");

module.exports = {
    entry: [
        './test.js'
    ],
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'test.min.js'
    },
    module: {
        rules: [
          {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    devtool: 'source-map'
};
