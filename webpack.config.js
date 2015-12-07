var path = require('path')

module.exports = {
    debug: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js']
    },

    entry: {
        polyfill: 'babel-polyfill',
        app: './src/js/app.ts'
    },

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'babel-loader!ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "stage-0"],
                    plugins: ["transform-decorators", "syntax-decorators"]
                }
            },

        ]
    }
    
};