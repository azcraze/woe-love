// const F = require("futils");
// const K = require('kyanite')
// const one = require('1-liners');

/* eslint-disable no-prototype-builtins */
/**
 * @typedef {Object} ErrorMessages
 * @property {Object} typeChecks - Error messages related to type checks.
 * @property {Object} argCount - Error messages related to argument counts.
 * @property {Object} info - Informational error messages.
 * @property {Object} invalidInput - Error messages for invalid inputs.
 * @property {Object} discordChecks - Error messages related to Discord checks.
 */

/**
 * Error messages for different error types.
 * @type {ErrorMessages}
 */
const errorMessages = {
  typeChecks: {
    '0': 'a valid hex color code. use `>>hex` for a quick reference',
    '1': 'Invalid string. Cannot contain special characters',
    '2': 'is not a valid url',
    '3': 'is not a valid date',
    '4': 'is not a valid whole number',
    '5': 'Input should include only numbers',
    '6': 'Input should include 1 string, and 2 number separated by spaces',
    '7': 'Input should include 1 string, and at least 1 number separated by spaces',
    '8': 'Input invalid: to submit more than one entry at a time, submit each entry with a `|`'
  },
  argCount: {
    '0': 'Invalid number of arguments: requires 1 argument',
    '1': 'Invalid number of arguments: requires 2 arguments',
    '2': 'Invalid number of arguments: requires 3 arguments',
    '3': 'Invalid number of score arguments: requires 2 scores',
    '4': 'Expected at least 1 argument, but received 0'
  },
  info: {
    '0': 'Task timeout',
    '1': 'No answer. Command has timed out.',
    '2': 'Done!',
    '3': 'Success!',
    '4': 'All done! Thank you.',
    '5': 'Work in progress. Check it out later.',
    '6': 'Command not responding, try again later.'
  },
  invalidInput: {
    '0': 'is not a valid player. Use `%view names` for a list of valid players.',
    '1': 'Aready registered',
    '2': 'The ID you entered is invalid.',
    '3': 'Invalid option',
    '4': 'Name is does not meet criteria.'
  },
  dicsordChecks: {
    '0': 'is not a valid channel ID or mention',
    '1': 'is not a valid channel ID or mention'
  }

}

/**
 * Generates an error message.
 *
 * @param {string} msg - The type of error message.
 * @param {string} ind - The index of the error message.
 * @param {string} [arg="**Error:**"] - The error argument.
 * @returns {string} - The formatted error message.
 */
function errMsg(msg, ind, arg = "**Error:**") {
  let message = "";
  let errors = errorMessages

  switch (msg) {
    case "types":
      message = `${arg} ${errors.typeChecks[ind]}`;
      break;
    case "argCount":
      message = `${arg} ${errors.argCount[ind]}`;
      break;
    case "info":
      message = `${arg} ${errors.info[ind]}`;
      break;
    case "invalidInput":
      message = `${arg} ${errors.invalidInput[ind]}`;
      break;
    case "dicsordChecks":
      message = `${arg} ${errors.dicsordChecks[ind]}`;
      break;
    default:
      message = `${arg} ${errors.invalidInput[3]}`;
  }
  return message;
}


/**
 * Generates a help string with all error messages.
 *
 * @returns {string} - The error help string.
 */
function errHelp() {
  let errString = "";

  for (const key in { ...errors }) {
    if (errors.hasOwnProperty(key)) {
      errString += `${key}:\n`;
      for (let i = 0; i < errors[key].length; i++) {
        errString += `- ${i + 1}. ${errors[key][i]}\n`;
      }
    }
    errString += "\n";
  }
  return errString;
}

// console.log(errMsg("types", 5))

module.exports = {
  errorMessages,
  errMsg,
  errHelp,
};
