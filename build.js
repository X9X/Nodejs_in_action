const config = require('./webpack.config');
console.log(process.argv);
const webpack = require('webpack');

// returns a Compiler instance
const compiler = webpack(config);
// or
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    if (err) { throw new gutil.PluginError('webpack:build', err); }
        console.log('[webpack:build]', stats.toString({
            chunks: false, // Makes the build much quieter
            colors: true
        }));
});
