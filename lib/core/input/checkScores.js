const sani = require("./sanitizeInput");
const argCount = require("./argCount");

// const { t } = require('typy');

/* function ifTrue(input){
  if (true === t(input).isFalsy)
  { 
     
  } else {
    return input
  }
}
 */

function kc(input) {
  if (null != argCount.exact(3, input)) {
    return argCount.exact(3, input);
  }
  
  let data = sani.splitBySpaces(input);

  data[0] = sani.lowercaseString(data[0]);
  data[1] = sani.parseNumber(data[1]);
  data[2] = sani.parseNumber(data[2]);
  if ("string" !== typeof data[0] || isNaN(data[1]) || isNaN(data[2])) {
    return "Error: Input should be a string and 2 numbers separated by spaces";
  }

  return data;
}

function rk(input) {
  if (null != argCount.atLeast(2, input)) {
    return argCount.atLeast(2, input);
  }

  let data = sani.splitBySpaces(input);
  let countArgs = data.length;

  if (3 === countArgs) {
    data[0] = sani.lowercaseString(data[0]);
    data[1] = sani.parseNumber(data[1]);
    data[2] = sani.parseNumber(data[2]);
    if ("string" !== typeof data[0] || isNaN(data[1]) || isNaN(data[2])) {
      return "Error: Input should be a string and 2 numbers separated by spaces";
    }
  } else {
    data[0] = sani.lowercaseString(data[0]);
    data[1] = sani.parseNumber(data[1]);
    data[2] = sani.parseNumber(0);
    if ("string" !== typeof data[0] || isNaN(data[1])) {
      return "Error: Input should be a string at least 1 number separated by spaces";
    }
  }
  return data;
}

module.exports = {
  kc,
  rk,
};
