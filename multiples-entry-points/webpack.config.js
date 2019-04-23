const path = require('path')
// camel case is required
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        precio: path.resolve(__dirname, 'src/js/precio.js'),
        contacto: path.resolve(__dirname, 'src/js/contacto.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
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
            }
        ]
    },
    plugins: [
        // need to require this first
        new ExtractTextPlugin("css/[name].css")
    ]
}