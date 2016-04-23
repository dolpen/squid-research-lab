/**
 * @author: @AngularClass
 */

const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Constants
 */
const METADATA = {
    title: 'Angular2-TypeScript-Webpack-Builder',
    baseUrl: '/'
};

module.exports = {
    metadata: METADATA,
    entry: {
        "vendor": "./app/vendor",
        "main": "./app/main"
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: helpers.root('app'),
        modulesDirectories: ['node_modules']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: helpers.reverse(['vendor'])
        })
    ]
};