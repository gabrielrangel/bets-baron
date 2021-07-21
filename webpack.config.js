const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const dev = process.env.NODE_ENV !== 'production'

// TODO JS MINIFIER

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsWebpackPlugin({})
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                ]
            }
        ]
    }
}