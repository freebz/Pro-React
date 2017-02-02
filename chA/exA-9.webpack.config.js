// 예제 A-9. JSON 로더를 사용하도록 웹팩을 구성

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
	path: __dirname + "/public",
	filename: "bundle.js"
    }, // Omitted for brevity

    module: {
	loaders: [
	    {
		test: /\.json$/,
		loader: "json"
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
