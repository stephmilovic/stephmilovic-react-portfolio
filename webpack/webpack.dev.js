const commonPaths = require('./paths');
const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths[1];
const reset = require('node-reset-scss').includePath;

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [reset, neat, bourbon],
                        },
                    },
                ],
            },
        ],
    },
};
