const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'out')
    },
    plugins: [
        new HtmlPlugin({
            title: "ReactJS Tutorial",
            template: path.resolve(__dirname, "src/index.html")
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
                        presets: ['@babel/preset-env', '@babel/preset-react']
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