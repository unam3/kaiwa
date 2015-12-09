var path = require('path')

module.exports = {
    debug: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.jade', '.html', '.less', '.css', '.json']
    },
    
    context: path.join(__dirname, 'src', 'js'),

    entry: {
        apolyfill: 'babel-polyfill',
        bjquery: './libraries/jquery.js',
        cresampler: './libraries/resampler.js',
        dIndexedDBShim: './libraries/IndexedDBShim.min.js',
        esugar: './libraries/sugar-1.2.1-dates.js',
        foembed: './libraries/jquery.oembed.js',
        gapp: './app.ts'
    },

    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: '[name].js',
        chunkFilename: '[name].js'
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
                loader: 'babel-loader!ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|libraries)/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "stage-0"],
                    plugins: ["transform-decorators", "syntax-decorators"]
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