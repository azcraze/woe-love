// ./lib/core/input/checkUserExists.js
require("rootpath")();
const { readAndParseFile } = require("./readAndParseJson");
const _ = require("lodash");

/**
 * Retrieves the list of names from the specified file.
 * @param {string} path - The path to the file.
 * @returns {string[]} An array of names.
 */
function ListNames(path) {
  const data = readAndParseFile(path);

  return data.settings.playersArray;
}

/**
 * Checks if a name exists in the list of names from the specified file.
 * @param {string} path - The path to the file.
 * @param {string} name - The name to check.
 * @returns {boolean} Returns true if the name exists, false otherwise.
 */
function NameExists(path, name) {
  const names = ListNames(path);

  if (true !== _.includes(names, name)) {
    return false;
  }
}

module.exports = {
  NameExists,
};
