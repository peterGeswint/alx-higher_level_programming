#!/usr/bin/node

const fs = require('fs');

function writeFile (filePath, content) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }
    console.log('File wriiten successfully');
  });
}

if (process.argv.lenth < 4) {
  console.log('Usage: ./1-writeme.js <file path> <string to write>');
} else {
  writeFile(process.argv[2], process.argv[3]);
}
