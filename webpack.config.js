const path = require('path')
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.resolve(__dirname, "entry.js"),
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            }
        ]
    }
}
