function validateInput(scoreboard, inputString) {
  if ('rk' === scoreboard) {
    return validateRKInput(inputString);
  } else if ('kc' === scoreboard) {
    return validateKCInput(inputString);
  } else {
    // Invalid scoreboard
    return false;
  }
}

function validateRKInput(inputString) {
  const inputArr = inputString.split(' ');

  if (2 > inputArr.length || 3 < inputArr.length) {
    return false; // Invalid input
  }

  const playerName = inputArr[0].toLowerCase();
  const score1 = Number(inputArr[1]);
  const score2 = (2 === inputArr.length) ? 0 : Number(inputArr[2]) / 2;

  if (!isValidName(playerName) || isNaN(score1) || isNaN(score2)) {
    return false; // Invalid input
  }

  return true; // Input is valid
}

function validateKCInput(inputString) {
  const inputArr = inputString.split(' ');

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

function isValidName(name) {
  return /^[a-z]+$/.test(name);
}

module.exports = {
  validateInput
};
