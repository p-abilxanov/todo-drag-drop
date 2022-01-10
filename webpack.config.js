const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: ['@babel/polyfill', './script/index.ts'],
        brand: ['@babel/polyfill', './script/brand.ts'],
        card: ['@babel/polyfill', './script/card.ts'],
        localstorage: ['@babel/polyfill', './script/local-storage.ts'],
        productview: ['@babel/polyfill', './script/product-view.ts'],
        signup: ['@babel/polyfill', './script/signup.ts'],
        order: ['@babel/polyfill', './script/order.ts'],
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist/script/')
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    devServer: {
        port: 4200,
        hot: true,
        open: true,
        watchContentBase: true
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },


    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: '../index.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: './brand.html',
            filename: '../brand.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: './lookbook.html',
            filename: '../lookbook.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: './signup.html',
            filename: '../signup.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: './local-stores.html',
            filename: '../local-stores.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: './product-view.html',
            filename: '../product-view.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: './admin.html',
            filename: '../admin.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: './admin-orders.html',
            filename: '../admin-orders.html',
            inject: 'body'
        }),
        new HTMLWebpackPlugin({
            template: './admin-products.html',
            filename: '../admin-products.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                    from: path.resolve(__dirname, 'src/image/'),
                    to: path.resolve(__dirname, 'dist/image/')
                },
                {
                    from: path.resolve(__dirname, 'src/css/'),
                    to: path.resolve(__dirname, 'dist/css/')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/'),
                    to: path.resolve(__dirname, 'dist/assets/')
                }
            ]
        }),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}