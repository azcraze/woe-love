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
  /** @type {boolean[]} */
  const options = getEndOfPeriodArr();
  const filePath = "rk" === scoreboard ? PATHS.RK_SCORES : PATHS.KC_SCORES;
  const playerScores = readAndParseFile(filePath);
  const considerDay = true;
  const [considerWeek, considerMonth, considerYear] = options;

  const dateObj = date.current();

  /** @type {Object<string, number>} */
  const dayScores = {};
  /** @type {Object<string, number>} */
  const weekScores = {};
  /** @type {Object<string, number>} */
  const monthScores = {};
  /** @type {Object<string, number>} */
  const yearScores = {};

  // Calculate scores for the current day
  if (considerDay && playerScores.dayLogs[dateObj.dayStamp]) {
    for (const player in playerScores.dayLogs[dateObj.dayStamp]) {
      const totalScore = playerScores.dayLogs[dateObj.dayStamp][player][2];

      dayScores[player] = totalScore;
    }
  }

  // Calculate scores for the current week
  if (considerWeek && playerScores.weekLogs[dateObj.weekOfTheYear]) {
    const weekEntries = playerScores.weekLogs[dateObj.weekOfTheYear];

    for (const player in weekEntries) {
      const weekScores = weekEntries[player];
      const weekScoreIndex = dateObj.dayOfTheWeek - 1;

      if (0 <= weekScoreIndex && weekScoreIndex < weekScores.length) {
        const totalScore = weekScores[weekScoreIndex];

        weekScores[player] = totalScore;
      }
    }
  }

  // Calculate scores for the current month
  if (considerMonth && playerScores.monthLogs[dateObj.monthOfTheYear]) {
    const monthEntries = playerScores.monthLogs[dateObj.monthOfTheYear];

    for (const player in monthEntries) {
      const monthScores = monthEntries[player];
      const monthScoreIndex = dateObj.dayOfTheMonth - 1;

      if (0 <= monthScoreIndex && monthScoreIndex < monthScores.length) {
        const totalScore = monthScores[monthScoreIndex];

        monthScores[player] = totalScore;
      }
    }
  }

  // Calculate scores for the current year
  if (considerYear && playerScores.yearLogs[dateObj.year]) {
    const yearEntries = playerScores.yearLogs[dateObj.year];

    for (const player in yearEntries) {
      const yearScores = yearEntries[player];
      let totalScore = 0;

      yearScores.forEach((score) => {
        totalScore += score;
      });

      yearScores[player] = totalScore;
    }
  }

  // Get the winners for each period
  const dayWinners = getWinners(dayScores);
  const weekWinners = getWinners(weekScores);
  const monthWinners = getWinners(monthScores);
  const yearWinners = getWinners(yearScores);

  return {
    dayWinners,
    weekWinners,
    monthWinners,
    yearWinners,
  };
}

/**
 * Determines the winners based on the scores.
 *
 * @param {Object<string, number>} scores - An object containing player scores.
 * @returns {Array<Object>} - An array of winners (players with the highest scores).
 */
function getWinners(scores) {
  const winners = [];
  const maxScore = Math.max(...Object.values(scores));

  Object.entries(scores).forEach(([player, score]) => {
    if (score === maxScore) {
      winners.push({ player, score });
    }
  });

  return winners;
}

/*
// Example usage
const id = '123';
const date = {
dayStamp: '04162023',
dayOfTheMonth: '16',
weekOfTheYear: '16',
monthOfTheYear: '04',
year: '2023',
};
const options = checkDateInfo(date);


const winners = determineWinners(date, options);
console.log(winners);
*/

console.log(determineWinners("kc"));
