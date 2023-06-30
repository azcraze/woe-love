"use strict";
// ./lib/getters/getScoresArray.js

require("rootpath")();
const { log } = require("woelogs");

const { getPeriod } = require("./getPeriodAndTitle");
const { getStamp } = require("./getStamp");
const { readAndParseFile } = require('./readAndParseJson');
const { defaultPath, PATHS } = require("./defaultPaths");

const DEFAULT_SK_VARS_PATH = PATHS.SK_VARS;

// Define a function that creates a JSON path and returns the period and stamp values.
function createJsonPath(input) {
  const { period } = getPeriod(input); // Destructure the period value directly from getPeriod() result.

  log(period);
  // Return an object containing the period and stamp values.

  const stamp = getStamp(input);

  log(stamp);

  return { period, stamp };
}

/**
 * Retrieves JSON data from a file path based on the scoreboard type and input parameters.
 * If scoresDataPath is provided, then that path is used. Otherwise, the default path is used.
 *
 * @param {string} scoreboard - The type of scoreboard.
 * @param {string} input - The input parameters.
 * @param {string} scoresDataPath - The optional file path to the scores data.
 * @returns {object} - The JSON data retrieved from the file path.
 */
function getJsonData(scoreboard, input, scoresDataPath = null) {
  // Determine the file path to use
  let filePath;

  if (scoresDataPath) {
    filePath = scoresDataPath;
  } else {
    filePath = defaultPath(scoreboard);
  }
  log(`Scoreboard type is ${scoreboard}. File path set to ${filePath}`);

  // Read and parse the JSON data from the file path
  const data = readAndParseFile(filePath);

  log(`JSON data read and parsed from file path ${filePath}`);

  // Create the JSON path based on the input parameters
  const jsonPath = createJsonPath(input);

  log(
    `JSON path created using varsPath ${DEFAULT_SK_VARS_PATH} and input ${input}`
  );
  const { period, stamp } = jsonPath;

  log(`JSON path destructured to period ${period} and stamp ${stamp}`);

  // Retrieve the JSON data based on the JSON path
  // console.log(jsonPath);
  // console.log(data[period][stamp]);
  return data[period][stamp];
}

// Export the getJsonData function for use in other modules.
module.exports = { getJsonData };

// EXAMPLE
/*
const { log } = require('woelogs');
*/
console.log(getJsonData("rk", "month"))

