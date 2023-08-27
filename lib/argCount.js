// ./lib/core/input/argCount.js
require("rootpath")();
const { splitBySpaces } = require("./sanitizeInput");

/**
 * Checks if the number of arguments matches the expected count.
 * @param {number} numExpected - The expected number of arguments.
 * @param {string} args - The arguments to check.
 * @returns {(string|null)} An error message if the count doesn't match, or null if it matches.
 */
function exact(numExpected, args) {
  const splitArgs = splitBySpaces(args);
  const numReceived = splitArgs.length;

  if (numReceived !== numExpected) {
    return `Error: ${numExpected} of arguments expected, but received ${numReceived}`;
  }

  return null;
}

/**
 * Checks if the number of arguments is at least the expected count.
 * @param {number} expected - The minimum expected number of arguments.
 * @param {string} args - The arguments to check.
 * @returns {(string|null)} An error message if the count is less than expected, or null if it meets the requirement.
 */
function atLeast(expected, args) {
  const splitArgs = splitBySpaces(args);

  if (splitArgs.length < expected) {
    return `Error: At least ${expected} arguments expected, but received ${splitArgs.length}`;
  }
  return null;
}

module.exports = {
  exact,
  atLeast,
};
