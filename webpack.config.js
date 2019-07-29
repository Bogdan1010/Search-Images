const entryPath = "js/";
const entryFile = "app.jsx";
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './' + entryPath + '/' + entryFile,
    watch: true,
    output: {
        path: path.resolve(__dirname, entryPath),
        filename: 'out.js'
    },
    module :{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],

    },
    devServer: {
        contentBase: path.join(__dirname,`${entryPath}`),
        publicPath: "/build/",
        compress: true,
        port: 9000
    }
};