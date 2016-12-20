function HelloWorldPlugin(options) {
  // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    console.log('Hello World!');
  });
  compiler.plugin('compilation', function(compilation) {
      compilation.plugin("optimize", function() {
    console.log("Assets are being optimized.");
  });
  });
};

module.exports = HelloWorldPlugin;
