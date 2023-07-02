require("rootpath")();
const errorMessages = {
  inputValidation: {
    '0': 'Invalid input: requires 2 or 3 space-separated values',
    '1': 'Invalid input: requires 3 space-separated arguments',
    '2': 'Input should include 1 string, and at least 1 number separated by spaces',
    '3': 'Input should include 1 string, and 2 number separated by spaces',
    '4': 'Invalid input: player name should only contain lowercase letters',
  },
  scoreboard: {
    '0': 'Invalid scoreboard option, Must be either rk or kc',
  },
};

/**
 * Processes the input based on the scoreboard type.
 *
 * @param {string} scoreboard - The type of scoreboard.
 * @param {string} inputString - The input string to be processed.
 * @returns {string|Array} - The processed input or an error message.
 */
function processInput(scoreboard, inputString) {
  if ('rk' === scoreboard) {
    return processRKInput(inputString);
  } else if ('kc' === scoreboard) {
    return processKCInput(inputString);
  } else {
    // Invalid scoreboard
    const errorMessage = getErrorMessage('scoreboard', '0');

    return errorMessage;
  }
}

/**
 * Processes the input for the "rk" scoreboard type.
 *
 * @param {string} inputString - The input string to be processed.
 * @returns {string|Array} - The processed input or an error message.
 */
function processRKInput(inputString) {
  const inputArr = inputString.split(' ');

  if (2 > inputArr.length || 3 < inputArr.length) {
    const errorMessage = getErrorMessage('inputValidation', '1');

    return errorMessage;
  }

  const playerName = inputArr[0].toLowerCase();
  const score1 = Number(inputArr[1]);
  const score2 = 2 === inputArr.length ? 0 : Number(inputArr[2]) / 2;

  if (!isValidName(playerName)) {
    const errorMessage = getErrorMessage('inputValidation', '4');

    return errorMessage;
  }

  if (isNaN(score1) || isNaN(score2)) {
    const errorMessage = getErrorMessage('inputValidation', '3');

    return errorMessage;
  }

  return [ playerName, score1, score2 ];
}

/**
 * Processes the input for the "kc" scoreboard type.
 *
 * @param {string} inputString - The input string to be processed.
 * @returns {string|Array} - The processed input or an error message.
 */
function processKCInput(inputString) {
  const inputArr = inputString.split(' ');

  if (3 !== inputArr.length) {
    const errorMessage = getErrorMessage('inputValidation', '0');

    return errorMessage;
  }

  const playerName = inputArr[0].toLowerCase();
  const score1 = Number(inputArr[1]);
  const score2 = Number(inputArr[2]);

  if (!isValidName(playerName)) {
    const errorMessage = getErrorMessage('inputValidation', '4');

    return errorMessage;
  }

  if (isNaN(score1) || isNaN(score2)) {
    const errorMessage = getErrorMessage('inputValidation', '2');

    return errorMessage;
  }

  return [ playerName, score1, score2 ];
}

/**
 * Checks if a name is valid (contains only lowercase letters).
 *
 * @param {string} name - The name to be validated.
 * @returns {boolean} - Indicates whether the name is valid or not.
 */
function isValidName(name) {
  return /^[a-z]+$/.test(name);
}

/**
 * Retrieves the error message based on the category and code.
 *
 * @param {string} category - The category of the error message.
 * @param {string} code - The code of the error message.
 * @returns {string} - The error message.
 */
function getErrorMessage(category, code) {
  if (errorMessages[category] && errorMessages[category][code]) {
    return errorMessages[category][code];
  }
  
  return 'Unknown error';
}

// EXAMPLE - 
// const inputString = 'john 10 20';
// const processedInput = processInput('rk', inputString);
// console.log(processedInput);

module.exports = {
  processInput,
  errorMessages,
};
