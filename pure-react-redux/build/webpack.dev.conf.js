/**
 * @file webpack dev config
 * @author ielgnaw(wuji0223@gmail.com)
 */

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {styleLoaders} from './utils';
import config from '../config';
import baseWebpackConfig from './webpack.base.conf';
import RemoveScriptTagPlugin from './remove-script-tag-plugin';

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(name => {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

/**
 * webpack plugin 集合
 *
 * @type {Array}
 */
const webpackPluginList = [
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin(),

    new webpack.optimize.DedupePlugin(),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
    })
];

export default merge(baseWebpackConfig, {
    module: {
        loaders: styleLoaders()
    },
    devtool: '#eval-source-map',
    plugins: webpackPluginList.concat(new RemoveScriptTagPlugin())
});
