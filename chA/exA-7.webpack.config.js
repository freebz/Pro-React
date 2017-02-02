// 예제 A-7. webpack-dev-server 구성을 포함하도록 업데이트된 webpack.config.js 파일

module.exports = {
    devtool: 'eval-source-map',
    
    entry: __dirname + "/app/main.js",
    output: {
	path: __dirname + "/public",
	filename: "bundle.js"
    },

    devServer: {
	contentBase: "./public",
	colors: true,
	historyApiFallback: true,
	inline: true
    }
}
