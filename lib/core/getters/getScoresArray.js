// Import necessary modules and files.
const { getStamp } = require("./getStamp");
const { getPeriod } = require("./getPeriodAndTitle");
const { paths, readAndParseFile } = require("../../filesystem");

// Define a function that creates a JSON path and returns the period and stamp values.
function createJsonPath1(path, input) {
  let stamp = getStamp(path, input); // Get the stamp value.
  let period = getPeriod(input); // Get the period value.

  period = period.period; // Extract the period value from the period object.
  
  // Return an object containing the period and stamp values.
  return { period, stamp };
}

// Define a function that retrieves JSON data based on the provided scoreboard type, ID, and input.
function getJsonData(scoreboard, id, input) {
  var filePath;

  if ("rk" === scoreboard) { // If the scoreboard type is "rk", set the file path accordingly.
    filePath = paths.RK_SCORES(id);
  }
  if ("kc" === scoreboard) { // If the scoreboard type is "kc", set the file path accordingly.
    filePath = paths.KC_SCORES(id);
  }

  let varsPath = paths.SK_VARS(id); // Set the varsPath variable to the SK_VARS path with the provided ID.
  let data = readAndParseFile(filePath); // Read and parse the JSON file from the specified file path.
  let jsonPath = createJsonPath1(varsPath, input); // Create a JSON path using the varsPath and input parameters.
  let period = jsonPath.period; // Extract the period value from the JSON path object.
  let stamp = jsonPath.stamp; // Extract the stamp value from the JSON path object.

  // Return the JSON data corresponding to the extracted period and stamp values.
  return data[period][stamp];
}

// Export the getJsonData function for use in other modules.
module.exports = { getJsonData };
