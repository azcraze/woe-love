// ./lib/core/input/checkUserExists.js
require("rootpath")();
const { readAndParseFile } = require("./readAndParseJson");
const { PATHS } = require("./constants");
const { log } = require("woelogs");

/**
 * Retrieves the list of names from the specified file.
 * @param {string} path - The path to the file.
 * @returns {string[]} An array of names.
 */
function ListNames() {
  const data = readAndParseFile(PATHS.SK_VARS);

  // Check if 'settings' and 'playersArray' exist in the JSON data
  if (data && data.settings && data.settings.playersArray) {
    return data.settings.playersArray;
  } else {
    // Handle the case where the structure is not as expected
    return [];
  }
}

/**
 * Checks if a name exists in the list of names from the specified file.
 * @param {string} name - The name to check.
 * @returns {boolean} Returns true if the name exists, false otherwise.
 */
function NameExists(name) {
  const names = ListNames();

  log(names);

  return names.includes(name);
}
/* EXAMPLE 
console.log(NameExists("test"));
console.log(NameExists("pookie"));
*/
module.exports = {
  NameExists,
};