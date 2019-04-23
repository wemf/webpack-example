const path = require('path')

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
                use: ['style-loader' ,'css-loader']
            }
        ]
    }
}