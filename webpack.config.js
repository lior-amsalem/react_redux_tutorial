var path = require('path');
    webpack = require('webpack'),
    localhost = 'http://localhost:3334',
    hotMiddlewareEntry = 'webpack-hot-middleware/client?path=' + localhost + '/__webpack_hmr';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            './src/router',
            hotMiddlewareEntry,
            'react',
            'react-dom',
            'react-router',
            'immutable',
            'es6-promise',
            'isomorphic-fetch',
            'redux',
            'react-redux',
            'redux-thunk'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: localhost + '/',
        port: 3334
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: [
                path.join(__dirname, 'examples'),
                path.join(__dirname, 'src')
            ]
        }, {
            test: /\.scss$/,
            loader: "style-loader!raw-loader!sass-loader"
        }, {
            test: /\.svg$/,
            loader: 'svg-inline'
        },{
            test: /\.(jpe?g|png|gif)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            ReactRouter: 'react-router',
            Redux: 'redux',
            ReactRedux: 'react-redux',
            ReduxThunk: 'redux-thunk',
            Immutable: 'immutable',
            fetch: 'isomorphic-fetch'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
