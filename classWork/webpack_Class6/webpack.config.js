const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'file1.js'),
        file4: path.resolve(__dirname, 'file4.js')
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'out')
    },
    plugins: [
        new HtmlPlugin({
            title: "My Webpack Files"
        })
    ],
    devServer: {
        open: true,
        contentBase: './out'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};