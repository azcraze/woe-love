function splitBySpaces(str) {
  return str.split(" ");
}

function lowercaseString(str) {
  if ("string" === typeof str) {
    return str.toLowerCase();
  }
}

function parseNumber(value) {
  const parsedValue = Number(value);

  if (!isNaN(parsedValue)) {
    return parsedValue;
  }
}

module.exports = {
  splitBySpaces,
  lowercaseString,
  parseNumber,
};
