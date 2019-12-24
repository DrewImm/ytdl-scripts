const fs = require('fs');
const cwd = process.cwd();

console.log('Cleaning dir ', cwd);

fs.readdir(cwd, (err, files) => {
	if (err) {
		console.error('[FATAL]', err);
	} else {
		for (let i = 0; i < files.length; i++) {
			let filea = files[i];

			const ext = filea.indexOf('.mp4');
			if (ext > 0) {
				filea = filea.substr(0, ext);

				for (let j = 0; j < files.length; j++) {
					const fileb = files[j];

					if (fileb === filea + '.mkv' || fileb === filea + '.webm') {
						console.log('Removing file ', fileb);

						fs.unlink(fileb, () => {});
					}
				}
			}
		}
	}
});
