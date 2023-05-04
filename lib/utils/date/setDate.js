// Importing required modules and functions from filesystem and index
const { readAndParseFile, writeToFile } = require("../../filesystem");
const date = require("../index").date;

// Defining function to write date to file
function writeDateToFile(path, inputDate) {
  // Reading data from file located at specified path
  let data = readAndParseFile(path);

  // Logging new date created using input date and date.new method
  console.log(date.new(inputDate));

  // Updating counters property of settings object in data with new date
  data.settings.counters = date.new(inputDate);

  // Writing updated data back to file
  writeToFile(data, path, 3, 2);

  // Logging updated data object
  console.log(data);

  // Returning updated data object
  return data;
}

// Exporting writeDateToFile function as part of an object
module.exports = {
  writeDateToFile,
};

// Calling writeDateToFile function with sample arguments
writeDateToFile(
  "/Users/home/code/custom modules/woe-love/src/tests/test-files/skVars.json", "april 12, 2023"
);