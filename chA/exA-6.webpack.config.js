// 예제 A-6. 인라인 소스맵을 생성하는 devtool 옵션

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
	path: __dirname + "/public",
	filename: "bundle.js"
    }
}
