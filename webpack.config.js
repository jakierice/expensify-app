const path = require('path');

// entry point -> output file

console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			// look for all scss and css files (? makes s in scss optional)
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	}
};
