/**
 * Process the input string and return an array with the player name, score1, and score2.
 *
 * @param {string} inputString - The input string to be processed.
 * @returns {Array|null} - An array containing the player name, score1, and score2, or null if the input is invalid.
 */
function processRKInput(inputString) {
  // Split the input string into an array
  const inputArr = inputString.split(" ");

  // Check if the input array length is not within the valid range
  if (2 > inputArr.length || 3 < inputArr.length) {
    return null; // Invalid input
  }

  // Extract the player name, score1, and score2
  const playerName = inputArr[0].toLowerCase();
  const score1 = Number(inputArr[1]);
  const score2 = 2 === inputArr.length ? 0 : Number(inputArr[2]) / 2;

  // Check if the player name, score1, or score2 is invalid
  if (!isValidName(playerName) || isNaN(score1) || isNaN(score2)) {
    return null; // Invalid input
  }

  // Return the processed data as an array
  return [ playerName, score1, score2 ];
}

function processKCInput(inputString) {
  const inputArr = inputString.split(" ");

  if (3 !== inputArr.length) {
    return null; // Invalid input
  }

  const playerName = inputArr[0].toLowerCase();
  const score1 = Number(inputArr[1]);
  const score2 = Number(inputArr[2]);

  if (!isValidName(playerName) || isNaN(score1) || isNaN(score2)) {
    return null; // Invalid input
  }

  return [ playerName, score1, score2 ];
}

function isValidName(name) {
  return /^[a-z]+$/.test(name);
}
