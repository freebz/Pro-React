// 예제 8-13. webpack.config.js 파일

module.exports = {
    entry: [
	'./browser.js'
    ],
    output: {
	path: './public',
	filename: "bundle.js"
    },
    module: {
	loaders: [{
	    test: /\.jsx?$/,
	    loader: 'babel'
	}]
    }
};
