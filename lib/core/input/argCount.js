const { splitBySpaces } = require("../../utils/sanitizeInput");

function exact(numExpected, args) {
  const splitArgs = splitBySpaces(args);
  const numReceived = splitArgs.length;

  if (numReceived !== numExpected) {
    return `Error: ${numExpected} of arguments expected, but received ${numReceived}`;
  }

  return null;
}

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
