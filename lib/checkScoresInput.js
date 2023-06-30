// ./lib/input/checkScores.js
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

function isValidName(name) {
  return /^[a-z]+$/.test(name);
}

function getErrorMessage(category, code) {
  if (errorMessages[category] && errorMessages[category][code]) {
    return errorMessages[category][code];
  }
  
  return 'Unknown error';
}

// Test case: Input with exact 3 arguments
// log(kc("hello 1 2")); // Output: ["hello", 1, 2]

// Test case: Input with less than 3 arguments
// log(kc("hello 1")); // Output: "Error: Input should be a string and 2 numbers separated by spaces"

// Test case: Input with more than 3 arguments
// log(kc("hello 1 2 3")); // Output: "Error: Input should be a string and 2 numbers separated by spaces"

// Test case: Input with non-string first element
// log(kc("HELLO 1 2")); // Output: "Error: Input should be a string and 2 numbers separated by spaces"

// Test case: Input with non-number second element
// log(kc("hello abc 2")); // Output: "Error: Input should be a string and 2 numbers separated by spaces"

// Test case: Input with non-number third element
// log(kc("hello 1 def")); // Output: "Error: Input should be a string and 2 numbers separated by spaces"

// Export the kc and rk functions for use in other modules.
module.exports = {
  processInput,
  errorMessages,

};
