const path = require('path');
const webpack = require('webpack');
const babelpolyfill = require("@babel/polyfill");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: ["@babel/polyfill", './src/scripts/index.js'],

	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/views/main.html',
			filename: 'index.html'
		})],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				"test": /\.styl$/,
				"use": [
					"style-loader",
					"css-loader",
					"stylus-loader"
				]
			},
			{
				"test": /\.less$/,
				"use": [
					"style-loader",
					"css-loader",
					"less-loader"
				]
			},
			{
				"test": /\.scss$/,
				"use": [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},
	devServer: {
		open: true
	}
};
