const WebpackDevServer = require('./node_modules/webpack-dev-server');
const webpack = require('./node_modules/webpack');
const config = require('./webpack.config');

// There is no `inline: true` flag with node.js API
// solution: https://webpack.github.io/docs/webpack-dev-server.html#inline-mode-with-node-js-api
config.entry.main.unshift(`webpack-dev-server/client?http://${config.devServer.host}:${config.devServer.port}`);

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	historyApiFallback: true,
	stats: {
		colors: true
	}
}).listen(config.devServer.port, config.devServer.host, function () {
	console.log(`The application is running on http://${config.devServer.host}:${config.devServer.port}`);
});
