'use strict';

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: {
		main: './main'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].ts'
	},

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: "cheap-inline-module-source-map",

	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},

	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				include: [
					path.resolve(__dirname, 'src')
				]
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loaders: ['ng-annotate', 'babel?presets[]=es2015'],
				cacheDirectory: true,
				include: [
					path.resolve(__dirname, 'src')
				]
			},
			{
				test: /\.tpl\.html$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				loader: 'raw-loader'
			},
			{
				test: /\.scss$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				loaders: ['style', 'css', 'postcss', 'sass']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css', 'postcss']
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&minetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg|jpg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		],
		postLoaders: [
			{
				test: /\.js$/,
				loader: 'uglify-loader',
				include: [
					path.resolve(__dirname, 'src')
				],
				exclude: /.spec.js/
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{
				from: '../index.html',
				to: path.resolve(__dirname, 'dist')
			}
		]),
		new webpack.HotModuleReplacementPlugin()
	],

	postcss: [autoprefixer],

	devServer: {
		contentBase: './',
		host: 'localhost',
		port: '1234',
		watch: true,
		inline: true,
		hot: true
	}
};

