
const cwd = require('cwd');
const { env } = require('process');
const normalPath = require('../normalPaths').normalizePath

const { writeToFile } = require("../filesystem");

const MAX_LOG_LENGTH = 15; // Maximum length of the inputLog array

// let inputLog = [];

function addToInputLog(path, input, str) {
  const inputLog = input.inputLog;

  // Check if the inputLog array has reached its maximum length
  if (inputLog.length === MAX_LOG_LENGTH) {
    // Remove the last item from the inputLog array
    inputLog.pop();
  }

  // Add the new string to the beginning of the inputLog array
  inputLog.unshift([str]);

  writeToFile(input, path, 4, 2);

  return input;
}
console.log(__dirname)


module.exports = {
  addToInputLog,
};
