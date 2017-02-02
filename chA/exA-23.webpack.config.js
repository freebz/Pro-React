// 예제 A-23. Autoprefixer와 함께 PostCSS를 구성

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
		loader: 'style!css?modules!postcss'
	    }
	]
    },

    postcss: [
	require('autoprefixer')
    ],

    devServer: {
	contentBase: "./public",
	colors: true,
	historyApiFallback: true,
	inline: true
    }
}
