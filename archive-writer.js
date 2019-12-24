const fs = require('fs');
const cwd = process.cwd();

fs.readdirSync(cwd).forEach((file) => {
	if (!file.includes('.part')) {
		const id = file.replace(/[\s\S]+([\s\S]{11})\.[a-zA-Z0-9]+/, '$1');

		if (id) {
			fs.appendFileSync('dl-archive', 'youtube ' + id + '\n\r');
		}
	}
});
