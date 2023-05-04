// Import necessary modules and files.
const sani = require("../../utils/sanitizeInput");
const argCount = require("./argCount");

// Define a function to sanitize and format input for the "kc" scoreboard.
function kc(input) {
  if (null != argCount.exact(3, input)) { // If the exact number of arguments is not 3, return an error message.
    return argCount.exact(3, input);
  }

  const data = sani.splitBySpaces(input); // Sanitize and split the input by spaces.

  // Parse and sanitize the first three elements of the data array.
  data[0] = sani.lowercaseString(data[0]);
  data[1] = sani.parseNumber(data[1]);
  data[2] = sani.parseNumber(data[2]);

  // If the first element is not a string or the second and third elements are not numbers, return an error message.
  if ("string" !== typeof data[0] || isNaN(data[1]) || isNaN(data[2])) {
    return "Error: Input should be a string and 2 numbers separated by spaces";
  }

  // Return the sanitized data array.
  return data;
}

// Define a function to sanitize and format input for the "rk" scoreboard.
function rk(input) {
  if (null != argCount.atLeast(2, input)) { // If the number of arguments is less than 2, return an error message.
    return argCount.atLeast(2, input);
  }

  const data = sani.splitBySpaces(input); // Sanitize and split the input by spaces.
  const countArgs = data.length; // Get the number of elements in the data array.

  if (3 === countArgs) { // If there are exactly 3 elements in the data array, parse and sanitize them.
    data[0] = sani.lowercaseString(data[0]);
    data[1] = sani.parseNumber(data[1]);
    data[2] = sani.parseNumber(data[2]);

    // If the first element is not a string or the second and third elements are not numbers, return an error message.
    if ("string" !== typeof data[0] || isNaN(data[1]) || isNaN(data[2])) {
      return "Error: Input should be a string and 2 numbers separated by spaces";
    }
  } else { // If there are less than or more than 3 elements in the data array, parse and sanitize the first two elements and set the third element to 0 (default).
    data[0] = sani.lowercaseString(data[0]);
    data[1] = sani.parseNumber(data[1]);
    data[2] = sani.parseNumber(0);

    // If the first element is not a string or the second element is not a number, return an error message.
    if ("string" !== typeof data[0] || isNaN(data[1])) {
      return "Error: Input should be a string at least 1 number separated by spaces";
    }
  }

  // Return the sanitized data array.
  return data;
}

// Export the kc and rk functions for use in other modules.
module.exports = {
  kc,
  rk,
};
