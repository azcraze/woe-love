/* eslint-disable no-unused-vars */
/* ------------------ Imports ----------------- */
const fs = require("fs");

/**
 * Check if a file is valid JSON.
 * @param {string} filePath - The path to the file to check.
 * @returns {boolean} - true if the file contains valid JSON, false otherwise.
 */
function isValidJson(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8"); // Read the file data as a string.

    JSON.parse(data); // Try parsing the data as JSON.
    return true; // If no error was thrown, consider it valid JSON and return true.
  } catch (err) {
    console.error(`Invalid JSON in file ${filePath}: ${err.message}`); // If an error was thrown, log an error message with the file path and original error message.
    return false; // Return false since the file did not contain valid JSON.
  }
}

/* ------------------ Exports ----------------- */
module.exports = {
  isValidJson,
};

// Uncomment the following line for debugging purposes:
// console.log(module.exports.isValidJson("../src/tests/test-files/myFile.json"));
