const path = require('path');

module.exports ={
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(css|sass)$/,
            use: ['css-loader','style-loader', 'sass-loader']
        }]
    },
    devServer: {
        static: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        liveReload: true,
        hot: false,
        compress: true,
      
    }
}