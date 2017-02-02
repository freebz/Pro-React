// 예제 A-4. 최소한의 webpack.config.js 파일

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
	path: __dirname + "/public",
	filename: "bundle.js"
    }
}
