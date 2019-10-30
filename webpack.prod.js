const path = require('path');
const webpack = require('webpack');
const babelpolyfill = require("@babel/polyfill");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: ["@babel/polyfill", './src/scripts/index.js'],

	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new CleanWebpackPlugin(),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/views/news.html',
			filename: 'index.html'
		})],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				include: [path.resolve(__dirname, 'src')],
				use: {
					loader: 'babel-loader',
				}
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
	}
};
