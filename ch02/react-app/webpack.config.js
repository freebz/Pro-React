// 예제 1-3. webpack.config.js 파일

module.exports = {
    entry: [
	'./source/App.js'
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
