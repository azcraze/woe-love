// ./lib/core/leaderboards/leaderboard.js

const { lb } = require("./_lb");

/**
 * Generates a leaderboard based on the specified options.
 * @param {string} option - The leaderboard option ("rk" or "kc").
 * @param {string} period - The period option ("day", "week", "month", "all").
 * @returns {string} The generated leaderboard.
 */
function leaderboard(option, period) {
  let scores = lb.format(option, period);

  scores = lb.sort(scores);
  const leaderboard = lb.generate(scores);

  return leaderboard;
}

module.exports = { leaderboard };
// console.log(leaderboard("kc", "all"));