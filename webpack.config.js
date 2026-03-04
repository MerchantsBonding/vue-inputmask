var path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/vue-inputmask.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'vue-inputmask.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    externals: {
        vue: 'vue',
        inputmask: 'inputmask'
    },
    performance: {
        hints: false
    },
    devtool: 'source-map'
}