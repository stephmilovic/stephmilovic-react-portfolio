const path = require('path');

module.exports = {
    root: path.resolve(__dirname, '../'),
    sass: path.resolve(__dirname, '../src/styles/base'),
    src: path.resolve(__dirname, '../src'),
    components: path.resolve(__dirname, '../src/components'),
    images: path.resolve(__dirname, '../src/images'),
    sassMain: path.resolve(__dirname, '../src/main.scss'),
    outputPath: path.resolve(__dirname, '../', 'build'),
    entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
    templatePath: path.resolve(__dirname, '../', 'src/template.html'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js',
};
