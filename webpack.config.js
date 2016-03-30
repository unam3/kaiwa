var path = require('path')

module.exports = {
    debug: true,
    devtool: 'cheap-source-map',
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.jade', '.html', '.less', '.css', '.json']
    },
    
    context: path.join(__dirname, 'src', 'js'),

    entry: {
        "0-babel-polyfill": 'babel-polyfill',
        "1-vendor": 
        [
            require.resolve('jquery'),
            './libraries/resampler.js',
            require.resolve('indexeddbshim'),
            require.resolve('sugar-date'),
            './libraries/jquery.oembed.js'
        ],
        "app": "./app.ts"
    },

    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    
    stats: {
        colors: true,
        reasons: true
    },

    module: {
        loaders: [
            { 
                test: require.resolve('jquery'),
                loader: "expose?$!expose?jQuery"
            },
            {
              test: /resampler\.js$/,
              loader: 'expose?Resample!imports?this=>window!exports?Resample'  
            },
            {
              test: /jquery\.oembed\.js$/,
              loader: 'imports?jQuery=jquery'  
            },
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules|bower_components|libraries)/,
                loader: 'babel!ts-loader'
            },
            {
                test: /\.js(x?)$/,
                exclude: /(node_modules|bower_components|libraries)/,
                loader: 'babel'
            },
            {
                test: /\.jade$/,
                loader: 'jade-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    node: {
        Buffer: true,
        console: true,
        global: true,
        fs: "empty"
    },
    externals: {
        jquery: 'jQuery'
    }
    
};