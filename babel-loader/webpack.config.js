const path = require('path')
// camel case is required
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //here we put the loaders
            {
                // file type to read
                test: /\.css$/,
                // which loader is going to manage the file
                use: ExtractTextPlugin.extract({
                    //[ 'style-loader' ,'css-loader']
                    fallback: "style-loader",
                    use: "css-loader"
                }),
            },
            {
                // file type to read
                test: /\.js$/,
                // which loader is going to manage the file
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        // need to require this first
        new ExtractTextPlugin("css/[name].css")
    ]
}