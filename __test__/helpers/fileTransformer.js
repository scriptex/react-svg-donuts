const { basename } = require('path');

// Trick jest to parse media files
module.exports = {
	process(src, filename, config, options) {
		return { code: `module.exports = ${JSON.stringify(basename(filename))};`; }
	}
};
