/**
 * Validates the input for a given scoreboard.
 * @param {string} scoreboard - The scoreboard to validate.
 * @param {string} inputString - The input string to validate.
 * @returns {boolean} - True if the input is valid, false otherwise.
 */
function validateInput(scoreboard, inputString) {
  if ("rk" === scoreboard) {
    return validateRKInput(inputString);
  } else if ("kc" === scoreboard) {
    return validateKCInput(inputString);
  } else {
    // Invalid scoreboard
    return false;
  }
}

/**
 * Validates the input for the RK scoreboard.
 * @param {string} inputString - The input string to validate.
 * @returns {boolean} - True if the input is valid, false otherwise.
 */
function validateRKInput(inputString) {
  const inputArr = inputString.split(" ");

  if (2 > inputArr.length || 3 < inputArr.length) {
    return false; // Invalid input
  }

  const playerName = inputArr[0].toLowerCase();
  const score1 = Number(inputArr[1]);
  const score2 = 2 === inputArr.length ? 0 : Number(inputArr[2]) / 2;

  if (!isValidName(playerName) || isNaN(score1) || isNaN(score2)) {
    return false; // Invalid input
  }

  return true; // Input is valid
}

/**
 * Validates the input for the KC scoreboard.
 * @param {string} inputString - The input string to validate.
 * @returns {boolean} - True if the input is valid, false otherwise.
 */
function validateKCInput(inputString) {
  const inputArr = inputString.split(" ");

  if (3 !== inputArr.length) {
    return false; // Invalid input
  }

  const playerName = inputArr[0].toLowerCase();
  const score1 = Number(inputArr[1]);
  const score2 = Number(inputArr[2]);

  if (!isValidName(playerName) || isNaN(score1) || isNaN(score2)) {
    return false; // Invalid input
  }

  return true; // Input is valid
}

/**
 * Checks if the given name is valid.
 * @param {string} name - The name to check.
 * @returns {boolean} - True if the name is valid, false otherwise.
 */
function isValidName(name) {
  return /^[a-z]+$/.test(name);
}

module.exports = {
  validateInput,
};

// EXAMPLE - main function
/*
const isValid = validateInput('rk', 'John 5');
console.log(isValid); // Output: true
*/
