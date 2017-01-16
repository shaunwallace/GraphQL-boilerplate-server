// set common configuration options that can be overridden by the CLI flags
const path = require('path');

module.exports = () => ({
    entry: {
        'server': path.join(__dirname, '/../src/server.js')
    },
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: '[name].js',
        publicPath: '',
        sourceMapFilename: '[name].map'
    },
    target: 'node',
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ],
    },
    plugins: [],
});
