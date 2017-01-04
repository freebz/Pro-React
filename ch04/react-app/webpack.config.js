// 예제 1-3. webpack.config.js 파일

module.exports = {
    entry: [
	'./source/AnimatedShoppingList.js'
    ],
    output: {
	path: __dirname,
	filename: "bundle.js"
    },
    module: {
	loaders: [{
	    test: /\.jsx?$/,
	    loader: 'babel'
	}]
    }
};
