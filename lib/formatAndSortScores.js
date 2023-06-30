"use strict";
// ./lib/core/leaderboards/formatAndSortScores.js

require("rootpath")();
const { log } = require("woelogs");
const getScores = require("./getScoresArray").getJsonData;
// const { logger } = require("./libTesting/err");


/**
 * Transforms the scores array into an object with player scores grouped by categories.
 * @param {string} scoreboard - The type of scoreboard ("rk" or "kc").
 * @param {string} input - The input period ("day", "week", "month", "all").
 * @returns {Object} The transformed scores object.
 */
function transformScores(scoreboard, input) {
  log(`Fetching scores for scoreboard ${scoreboard} and input period ${input}`);
  const scoresObject = getScores(scoreboard, input);

  if (!scoresObject || 'object' !== typeof scoresObject || Array.isArray(scoresObject)) {
    throw new Error("Invalid scoresObject. Expected an object.");
  }

  log(`Transforming scores for ${Object.keys(scoresObject).length} players`);
  const transformedScores = {};

  for (const player in scoresObject) {
    transformedScores[player] = {
      rebs: scoresObject[player][0],
      bonus: scoresObject[player][1],
      total: scoresObject[player][2],
    };
  }

  log(`Transformation completed. Returning scores object with ${Object.keys(transformedScores).length} players`);
  return transformedScores;
}

/**
 * Sorts the scores array in descending order based on the total score.
 * @param {Object} scoresArray - The scores object to be sorted.
 * @returns {Array} The sorted scores array.
 */
function sortScores(scoresObject) {
  if (!scoresObject || 'object' !== typeof scoresObject || Array.isArray(scoresObject)) {
    throw new Error("Invalid scoresObject. Expected an object.");
  }

  log('Before sorting:\n' );
  log(scoresObject);

  const sortedArray = Object.entries(scoresObject).sort((a, b) => b[1].total - a[1].total);

  log('After sorting:\n');
  log (sortedArray)
  return sortedArray;
}
module.exports = {
  transformScores,
  sortScores,
};