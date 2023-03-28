const { splitBySpaces } = require('./sanitizeInput');

function exact(numExpected, args) {
  const splitArgs = splitBySpaces(args)
  const numReceived = splitArgs.length;

  if (numReceived !== numExpected) {
    const errorMessage = `Error: ${numExpected} of arguments expected, but received ${numReceived}`;

    return (errorMessage)
  }

  return null;
}


function atLeast(expected, args) {
  const splitArgs = splitBySpaces(args)

  if (splitArgs.length < expected) {
    const errorMessage = `Error: At least ${expected} arguments expected, but received ${splitArgs.length}`;

    return (errorMessage)
  }
  return null;
}




module.exports = {
  exact,
  atLeast
}