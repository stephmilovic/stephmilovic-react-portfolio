const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths;

module.exports = {
    mode: 'production',
    output: {
        filename: `${commonPaths.jsFolder}/[name].[hash].js`,
        path: commonPaths.outputPath,
        chunkFilename: '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [neat, bourbon],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin([commonPaths.outputPath.split('/').pop()], {
            root: commonPaths.root,
        }),
        new MiniCssExtractPlugin({
            filename: `${commonPaths.cssFolder}/[name].css`,
            chunkFilename: '[id].css',
        }),
    ],
    devtool: 'source-map',
};
