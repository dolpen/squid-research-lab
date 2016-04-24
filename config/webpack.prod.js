var webpack = require("webpack");
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const abstractConfig = require('./webpack.abstract.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(abstractConfig.metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: false
});

const ENTRY = webpackMerge(abstractConfig.entry, {
    "main": "./app/main.prod"
});

module.exports = webpackMerge(abstractConfig, {
    metadata: METADATA,
    debug: false,
    devtool: 'source-map',
    entry: ENTRY,
    output: {
        path: helpers.root('dist'),
        filename: "[name].bundle.js",
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'HMR': METADATA.HMR,
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8 : true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
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