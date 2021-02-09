const path = require('path');


const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    },
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV
    }
};