const path = require('path');

module.exports = {
    //entry point of our app
    entry: './src/index.js',
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/',
        port: 8080,
        proxy: {
            '/': {
                target: 'http://localhost:3000/',
                contentBase: './src',
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
