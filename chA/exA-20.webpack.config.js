// 예제 A-20. webpack.config.js에서 CSS 모듈 활성화

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
	path: __dirname + "/public",
	filename: "bundle.js"
    },

    module: {
	loaders: [
	    { test: /\.json$/, loader: "json" },
	    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
	    {
		test: /\.css$/,
		loader: 'style!css?modules'
	    }
	]
    },

    devServer: {
	contentBase: "./public",
	colors: true,
	historyApiFallback: true,
	inline: true
    }
}
