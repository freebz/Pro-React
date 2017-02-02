// 예제 A-12. 바벨 로더를 사용하도록 웹팩을 구성

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
		loader: 'babel',
		query: {
		    presets: ['es2015', 'react']
		}
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
