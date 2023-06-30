// const F = require("futils");
// const K = require('kyanite')
// const one = require('1-liners');

/* eslint-disable no-prototype-builtins */
/*
const errors = {
  typeChecks: [
    `a valid hex color code. use \`>>hex\` for a quick reference`,
    `Invalid string. Cannot contain special characters`,
    `is not a valid url`,
    `is not a valid date`,
    `is not a valid whole number`,
    'Input should include only numbers',
    'Input should include 1 string, and 2 number separated by spaces',
    'Input should include 1 string, and at least 1 number separated by spaces',
    'Input invalid: to submit more than one entry at a time, submit each entry with a \`|\`'
  ],
  argCount: [
    "Invalid number of arguments: requires 1 argument",
    "Invalid number of arguments: requires 2 arguments",
    "Invalid number of arguments: requires 3 arguments",
    "Invalid number of score arguments: requires 2 scores",
    "Expected at least 1 argument, but received 0",
  ],
  info: [
    "Task timeout", 
    "No answer. Command has timed out.",
    "Done!",
    "Success!",
    "All done! Thank you.",
    "Work in progress. Check it out later.",
    "Command not responding, try again later." 
  ],
  invalidInput: [
    "is not a valid player. Use `%view names` for a list of valid players.",
    "Aready registered",
    "The ID you entered is invalid.",
    "Invalid option",
    "Name is does not meet criteria."
  ],
  dicsordChecks: [ `is not a valid channel ID or mention`, `is not a valid channel ID or mention`, ],
}
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

console.log

function errMsg(msg, ind, arg = "**Error:**") {
  let message = "";

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

module.exports = {
  errorMessages,
  errors,
  errMsg,
  errHelp,
};
