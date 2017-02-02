// 예제 A-15. 바벨 프리셋 정의를 제거한 웹팩 구성

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
	path: __dirname + "/public",
	filename: "bundle.js"
    },

    module: {
	loaders: [
	    {
		test: /\.json$/,
		loader: "json"
	    },
	    {
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel'
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
