module.exports = {
    entry: [
	'./source/ContactsAppContainer.js'
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
