#!/usr/bin/node

const fs = require('fs');

// Get the file paths from command line arguments
const firstFile = process.argv[2];
const secondFile = process.argv[3];
const destinationFile = process.argv[4];

// Check if the required arguments are provided
if (!firstFile || !secondFile || !destinationFile) {
  console.error('Usage: ./concatFiles.js <firstFile> <secondFile> <destinationFile>');
  process.exit(1);
}

// Read the contents of the first file
fs.readFile(firstFile, 'utf8', (err, data1) => {
  if (err) {
    console.error(`Error reading ${firstFile}:`, err);
    process.exit(1);
  }

  // Read the contents of the second file
  fs.readFile(secondFile, 'utf8', (err, data2) => {
    if (err) {
      console.error(`Error reading ${secondFile}:`, err);
      process.exit(1);
    }

    // Concatenate the contents of both files
    const concatenatedData = data1 + data2;

    // Write the concatenated data to the destination file
    fs.writeFile(destinationFile, concatenatedData, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to ${destinationFile}:`, err);
        process.exit(1);
      }

      console.log(`Files ${firstFile} and ${secondFile} concatenated into ${destinationFile}`);
    });
  });
});
