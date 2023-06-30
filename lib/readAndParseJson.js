const { log } = require("woelogs");


const fs = require("fs");

const { isValidJson } = require("./validateJson"); // Import the `isValidJson` function from another module.

/**
 * Read and parse a JSON file.
 * @param {string} filePath - The path to the JSON file.
 * @returns {object|false} - The parsed data as an object if successful, or false if not valid JSON.
 */
function readAndParseFile(filePath) {
  log(`Reading file: ${filePath}`);
  if (true !== isValidJson(filePath)) {
    log("File is not valid JSON");
    return false; // Return false if the file is not valid JSON.
  }
  log("File is valid JSON. Parsing data...");
  const data = fs.readFileSync(filePath); // Read the file data.
  const parsedData = JSON.parse(data);

  log("Data parsed successfully.");
  return parsedData; // Return the parsed data as an object.
}

/* ------------------ Exports ----------------- */
module.exports = { readAndParseFile };

// Uncomment the following line for debugging purposes:
// log(readAndParseFile('/Users/home/code/custom modules/woe-love/src/tests/test-files/skVars.json'));
