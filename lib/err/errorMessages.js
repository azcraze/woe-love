/* eslint-disable no-prototype-builtins */
const errors = {
  typeChecks: [
    `a valid hex color code. use \`>>hex\` for a quick reference`,
    `Invalid string. Cannot contain special characters`,
    `is not a valid url`,
    `is not a valid date`,
    `is not a valid whole number`,
  ],
  argCount: [
    "Invalid number of arguments",
    "requires 1 argument",
    "requires 2 arguments",
    "Expected at least 1 argument, but received 0",
  ],
  info: [ "Task timeout", "No answer. Command has timed out." ],
  invalidInput: [
    "is not a valid player. Use `%view names` for a list of valid players.",
    "is already registered",
    "The ID you entered is invalid.",
    "Invalid Input",
  ],
  dicsordChecks: [ `is not a valid channel ID or mention`, `is not a valid channel ID or mention`, ],
};

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
  errors,
  errMsg,
  errHelp,
};
