// setDate.js

// Importing required modules and functions from filesystem and index
const { readAndParseFile } = require("./readAndParseJson");
const { writeToFile } = require("./writeStructuredJson");
const { defaultPath } = require("./defaultPaths");
const { newDate } = require("./newDate");
const { log } = require("woelogs");

let DEFAULT_SK_VARS_PATH = defaultPath("sk");

/**
 * Writes the date to a specified file.
 * @param {string} path - The file path.
 * @param {string} inputDate - The input date.
 * @returns {Object} The updated data object with the new date.
 */
function writeDateToFile(inputDate, path = DEFAULT_SK_VARS_PATH) {
  // Reading data from file located at specified path
  const data = readAndParseFile(path);

  // Logging new date created using input date and newDate method
  console.log(newDate(inputDate));
  if (false === newDate(inputDate)) {
    return false;
  } else {
    // Updating counters property of settings object in data with new date
    data.settings.counters = newDate(inputDate);
    // Writing updated data back to file
    writeToFile(data, path, 3, 2);

    // Logging updated data object
    console.log(JSON.stringify(data));

    // Returning updated data object
    return data;
  }
}

// Exporting writeDateToFile function as part of an object
module.exports = {
  writeDateToFile: writeDateToFile,
};

// log(writeDateToFile("04132023"));
