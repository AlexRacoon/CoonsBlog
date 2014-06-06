var config = {
	local: {
		mode: 'local',
		port: process.env.PORT
	},
	staging: {
		mode: 'staging',
		port: process.env.PORT
	},
	production: {
		mode: 'production',
		port: process.env.PORT
	}
}
module.exports = function(mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
}