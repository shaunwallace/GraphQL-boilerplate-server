const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base');

module.exports = env => webpackMerge(commonConfig(), {
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('prod')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     mangle: {
        //         screw_ie8: true,
        //         keep_fnames: true
        //     },
        //     compress: {
        //         screw_ie8: true
        //     },
        //     comments: false
        // }),
    ]
});
