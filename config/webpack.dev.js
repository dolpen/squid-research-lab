var webpack = require("webpack");
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const abstractConfig = require('./webpack.abstract.js');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(abstractConfig.metadata, {
    host: '0.0.0.0',
    port: 3000,
    ENV: ENV,
    HMR: HMR
});
const ENTRY = webpackMerge(abstractConfig.entry, {
    "wds-client": "webpack-dev-server/client?http://localhost:3000",
    "wds-server": "webpack/hot/dev-server"
});

module.exports = webpackMerge(abstractConfig, {
    metadata: METADATA,
    debug: true,
    devtool: 'source-map',
    entry: ENTRY,
    output: {
        path: helpers.root('dist'),
        filename: "[name].bundle.js",
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'HMR': METADATA.HMR,
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR
            }
        })
    ],
    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
});