const path = require('path');

module.exports ={
    mode: "development",
    entry: path.resolve(`src/index.js`),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(scss|css|scss)$/,
            use: ['style-loader','css-loader','sass-loader']
        },{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        },{
            test: /\.js$/i,
            use: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    // devtool: 'eval-srouce-map',
    devServer: {
        static: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}