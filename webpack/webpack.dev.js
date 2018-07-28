const commonPaths = require('./paths');
const bourbon = require('node-bourbon').includePaths;
// const bourbon = require('bourbon').includePaths;
const neat = require('bourbon-neat').includePaths;
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
                            localIdentName: '[local]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [reset, bourbon, neat, commonPaths.sass],
                        },
                    },
                ],
            },
        ],
    },
};
