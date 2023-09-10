const { getEndOfPeriodArr } = require("./checkEndOfPeriod");
const { readAndParseFile } = require("./readAndParseJson");
const { PATHS } = require("./defaultPaths");
const { date } = require("./_date");

/**
 * Determines the winners for each period based on the scoreboard type.
 *
 * @param {string} scoreboard - The type of scoreboard ("rk" or "kc").
 * @returns {Object} - An object containing the winners for each period.
 */
// eslint-disable-next-line max-statements
function determineWinners(scoreboard) {
  const options = getEndOfPeriodArr();

  console.log(options);
  const filePath = "rk" === scoreboard ? PATHS.RK_SCORES : PATHS.KC_SCORES;
  const playerScores = readAndParseFile(filePath);
  const [considerWeek, considerMonth, considerYear] = options;

  const dateObj = date.current();

  console.log('Player Scores:', JSON.stringify(playerScores, null, 2));
  console.log('Date Object:', JSON.stringify(dateObj, null, 2));


  let dayWinners = {};
  let weekWinners = {};
  let monthWinners = {};
  let yearWinners = {};

  // For Day
  if (playerScores.dayLogs && playerScores.dayLogs[dateObj.dayStamp]) {
    dayWinners = getWinners(playerScores.dayLogs[dateObj.dayStamp]);
  }

  // For Week
  if (considerWeek && playerScores.weekLogs && playerScores.weekLogs[dateObj.week]) {
    weekWinners = getWinners(playerScores.weekLogs[dateObj.week]);
  }

  // For Month
  if (considerMonth && playerScores.monthLogs && playerScores.monthLogs[dateObj.month]) {
    monthWinners = getWinners(playerScores.monthLogs[dateObj.month]);
  }

  // For Year
  if (considerYear && playerScores.yearLogs && playerScores.yearLogs[dateObj.year]) {
    yearWinners = getWinners(playerScores.yearLogs[dateObj.year]);
  }

  return {
    dayWinners,
    weekWinners,
    monthWinners,
    yearWinners
  };
}

function getWinners(entries) {
  const scores = {};

  for (const player in entries) {
    scores[player] = entries[player][2];
  }

  const maxScore = Math.max(...Object.values(scores));
  const winners = {};

  for (const [player, score] of Object.entries(scores)) {
    if (score === maxScore) {
      winners[player] = entries[player];
    }
  }

  return winners;
}



/*
// Example usage
const id = '123';
const dateObj = {
  dayStamp: '01222022',
  dayOfTheMonth: '22',
  weekOfTheYear: '03',
  monthOfTheYear: '01',
  year: '2022',
};
const options = date.checkPeriod(dateObj);

console.log(options);

const winners = determineWinners(dateObj, options);

console.log(winners);
*/

// console.log(determineWinners("kc"));
