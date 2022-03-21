const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),

    entry: {
        db: ['@babel/polyfill', './script/db.js'],
        myProfile: ['@babel/polyfill', './script/myProfile.js'],
        authorization: ['@babel/polyfill', './script/authorization.js'],
        permissions: ['@babel/polyfill', './script/permissions.js'],
        notes: ['@babel/polyfill', './script/notes.js']
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist/script/')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: '../index.html',
            chunks: ['db','authorization']
        }),
        new HTMLWebpackPlugin({
            template: './notes.html',
            filename: '../notes.html',
            chunks: ['notes']
        }),
        new HTMLWebpackPlugin({
            template: './category.html',
            filename: '../category.html',
            chunks: ['notes']
        }),
        new HTMLWebpackPlugin({
            template: './myProfile.html',
            filename: '../myProfile.html',
            chunks: ['myProfile']
        }),
        new HTMLWebpackPlugin({
            template: './Permissions.html',
            filename: '../Permissions.html',
            chunks: ['permissions']
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/css/'),
                to: path.resolve(__dirname, 'dist/css/')
            }]
        })
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
