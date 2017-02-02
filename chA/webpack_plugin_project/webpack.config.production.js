// 예제 A-32. 자바스크립트와 CSS 번들 파일의 캐싱 효율 개선을 위해 파일 이름에 해시를 포함

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
	path: __dirname + "/build",
	filename: "[name]-[hash].js"
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
	new ExtractTextPlugin("[name]-[hash].css")
    ],

}
