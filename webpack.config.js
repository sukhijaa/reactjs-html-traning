// since some browsers don't understand ES6, we will use import export syntax available in ES5
// Hence we'll use require to import the dependencies
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    // Define the entry point from where webpack should start scanning all the modules. If there are multiple entry points in your applications, you can mention them here and
    // webpack will create separate file for them
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    // Define the output file location and filename pattern.
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'out')
    },
    // Which plugins you want to run on generated bundle files
    plugins: [
        new HtmlPlugin({
            title: "ReactJS Tutorial",
            template: path.resolve(__dirname, "src/index.html")
        })
    ],
    // Dev server configuration. This helps in flawless development process wherein webpack itself builds and refreshes the browser
    devServer: {
        open: true,
        contentBase: './out'
    },
    // Defines how each kind of module should be processed
    module: {
        rules: [
            // For first rule, we have defined that all files ending with .js should be loaded using babel-loader with preset-env settings
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
            // for second rule, we have defined that all files ending in .css should be loaded using style-loader and css-loader in the order mentioned
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};