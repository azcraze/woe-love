const fs = require("fs");
const path = require("path");

function combineJSFiles(directory, outputFile) {
  // Open the output file for writing
  const outputStream = fs.createWriteStream(outputFile);

  // Loop over all the files in the directory
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      // Check if the file is a JavaScript file
      if (".js" === path.extname(file)) {
        // Write the filename as a comment before the contents of the file
        outputStream.write(`// ${file}\n`);
        // Open the file for reading
        const inputStream = fs.createReadStream(path.join(directory, file));

        // Pipe the contents of the file to the output file
        inputStream.pipe(outputStream, { end: false });
        // Add a newline after the contents of the file
        outputStream.write("\n");
      }
    });
  });
}

combineJSFiles(
  "/Users/home/code/custom modules/woe-love/lib/utils/date",
  "/Users/home/code/custom modules/woe-love/src/combined-utils-date.txt"
);
