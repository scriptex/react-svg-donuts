const { basename } = require('path');

module.exports = {
	process(_, filename) {
		return { code: `module.exports = ${JSON.stringify(basename(filename))};` };
	}
};
