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
            './libraries/jquery.js',
            './libraries/resampler.js',
            './libraries/IndexedDBShim.min.js',
            './libraries/sugar-1.2.1-dates.js',
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
                test: /jquery\.js$/, 
                loader: "expose?$!expose?jQuery"
            },
            {
              test: /resampler\.js$/,
              loader: 'expose?Resample!imports?this=>window!exports?Resample'  
            },
            {
              test: /jquery\.oembed\.js/,
              loader: 'imports?jQuery=jquery'  
            },
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel!ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|libraries)/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "stage-0", "stage-1"],
                    plugins: [
                        "transform-decorators", 
                        "syntax-decorators",
                        "transform-runtime",
                        "transform-es2015-block-scoping"]
                }
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