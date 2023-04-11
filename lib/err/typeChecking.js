const logger = require("./handler").logger;
const { t } = require("typy");

function is(type, data) {
  let isValid = false;
  let errMsg = "";

  switch (type) {
    case "string":
      isValid = "string" === typeof data;
      break;
    case "number":
      isValid = "number" === typeof data;
      break;
    case "array":
      isValid = Array.isArray(data);
      break;
    case "object":
      isValid =
        "object" === typeof data && !Array.isArray(data) && null !== data;
      break;
    case "function":
      isValid = "function" === typeof data;
      break;
    case "null":
      isValid = t(data).isNull;
      break;
    case "undefined":
      isValid = t(data).isUndefined;
      break;
    case "boolean":
      isValid = "boolean" === typeof data;
      break;
    default:
      logger.error(`Invalid type: ${type}`);
      throw new Error(`Invalid type: ${type}`);
  }

  if (!isValid) {
    errMsg = `Expected ${type}, but got ${typeof data}: ${data}`;
    logger.info(errMsg);
  }

  return { isValid, errMsg };
}

module.exports = {
  is,
};

/*
EXAMPLE USAGES:
const { err } = require('your-package-name');
const is = err.typeChecking.is

let check = is(type, data)
if (check === false ){
  console.log(check);
}


*/
