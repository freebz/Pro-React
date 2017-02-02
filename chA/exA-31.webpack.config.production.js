// 예제 A-31. webpack.config.production.js의 최적화 플러그인 설정

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
	path: __dirname + "/build",
	filename: "bundle.js"
    },

    module: {
	loaders: [
	    { test: /\.json$/, loader: "json" },
	    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
	    {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
	    }
	]
    },

    postcss: [
	require('autoprefixer')
    ],

    plugins: [
	new HtmlWebpackPlugin({
	    template: __dirname + "/app/index.tmpl.html"
	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin(),
	new ExtractTextPlugin("style.css")
    ],

}
