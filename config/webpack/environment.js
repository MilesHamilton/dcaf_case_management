const { environment } = require('@rails/webpacker');
const erb = require('./loaders/erb');


const webpack = require('webpack');

// Add an ProvidePlugin
environment.plugins.prepend('Provide',  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
  })
)

const config = environment.toWebpackConfig();

config.resolve.alias = {
  jquery: "jquery/src/jquery",
}

// export the updated config
environment.loaders.prepend('erb', erb)
module.exports = environment;
