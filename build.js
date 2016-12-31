const config = require('./webpack.config');
const webpack = require('webpack');

// returns a Compiler instance
const compiler = webpack(config);
// or
compiler.run(function(err, stats) {
    if (err) { throw new gutil.PluginError('webpack:build', err); }
        console.log('[webpack:build]', stats.toString({
            chunks: false, // Makes the build much quieter
            colors: true
        }));
});
