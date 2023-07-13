/**
 * @brief Splits a string by spaces. This is useful for splitting text that is in a form like " Hello World " into an array of " Hello World "
 * @param str The string to split.
 * @return { Array } The array of strings split by spaces in the order they appear in the string. Note that the array may be empty
 */
function splitBySpaces(str) {
  return str.split(" ");
}

/**
 * @brief Splits a string by dashes. This is used to split an address by a number of dashes e. g.
 * @param str The string to split. Must be in the format " address - number "
 * @return { Array } The array of
 */
function splitByDashes(str) {
  return str.split("-");
}

/**
 * @brief Splits a string by commas. This is useful for dealing with comma seperated strings. The string to split.
 * @param str The string to split. Must be a comma separated string.
 * @return { Array } The split string as an array of strings. Note that the array is in the same order as the input
 */
function splitByCommas(str) {
  return str.split(", ");
}

/**
 * @brief Converts a string to lowercase. This is useful for converting strings to numbers and vice versa. If you want to convert numbers to lower case use lowercase ()
 * @param str The string to convert.
 * @return { string } The lowercase version of the string or undefined if the string is not a string or undefined
 */
function lowercaseString(str) {
  // Returns the lowercase version of the string.
  if ("string" === typeof str) {
    return str.toLowerCase();
  }
}

/**
 * @brief Parses a string into a number. If the string cannot be parsed it returns null. This is a convenience function for parsing numbers that are inherently invalid ( as opposed to NaN ).
 * @param value The string to parse. Must be parsable as a number.
 * @return { number } The parsed number or null if the string cannot be parsed as a number. Note that the return value may be null
 */
function parseNumber(value) {
  const parsedValue = Number(value);

  // Returns the parsed value of the parsed value.
  if (!isNaN(parsedValue)) {
    return parsedValue;
  }
}

module.exports = {
  splitBySpaces,
  splitByDashes,
  splitByCommas,
  lowercaseString,
  parseNumber,
};
