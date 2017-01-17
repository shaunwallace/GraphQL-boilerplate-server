const webpackMerge = require('webpack-merge');
const commonConfig = require('./base');

module.exports = env => webpackMerge(commonConfig(), {
    devtool: 'eval',
    output: {
        pathinfo: true
    }
});
