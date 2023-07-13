// ./lib/core/leaderboards/formattedLb.js

const c = require("ansi-colors");

/**
 * Formats the scores array into a leaderboard string.
 * @param {Array} scoresArray - The scores array to be formatted.
 * @returns {string} The formatted leaderboard.
 */
function formatLeaderboard(scoresArray) {
  let leaderboard = `${c.cyan.bgBlack("PLAYER    REBS BONUS TOTAL")}\n${c.cyan(
    "--------------------------"
  )}\n`;

  for (let [ name, score ] of scoresArray) {
    if (!score) {
      console.error(`Score for player ${name} is undefined`);
      continue;
    }
    leaderboard += `${c.cyan(name.padEnd(9))} ${score.rebs
      .toString()
      .padEnd(5)} ${score.bonus.toString().padEnd(6)}${c.white(score.total)}\n`;
  }

  return leaderboard;
}

module.exports = {
  formatLeaderboard,
};
