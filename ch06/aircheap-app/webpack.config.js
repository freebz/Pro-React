module.exports = {
    entry: [
	'./app/App.js'
    ],
    output: {
	path: __dirname,
	filename: "bundle.js"
    },
    module: {
	loaders: [{
	    test: /\.jsx?$/,
	    exclude: /node_modules/,
	    loader: 'babel'
	}]
    },
    devServer: {
	contentBase: "./public",
	colors: true,
	historyApiFallback: true,
	inline: true
    }
};
