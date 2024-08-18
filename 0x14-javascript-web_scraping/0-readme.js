#!/usr/bin/node
/* eslint-disable no-undef */
#!/usr/bin/node

const fs = require('fs');

function readFile(filePath) {
	  fs.readFile(filePath, 'utf8', (err, data) => {
		      if (err) {
			            console.error(`An error occurred: ${err.message}`);
			            return;
			          }
		      console.log(data);
		    });
}

if (process.argv.length < 3) {
	  console.log('Please provide the file path as the first argument.');
} else {
	  readFile(process.argv[2]);
}

