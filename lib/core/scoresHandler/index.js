// ./lib/core/scoresHandler/index.js

const addScores = require("./addScores");
const removeScores = require("./removeScores");
const addPlayerScores = require("./addPlayerScores");
const removePlayerScores = require("./removePlayerScores");

module.exports = {
  addScores: {
    kc: addScores.kc,
    rk: addScores.rk,
  },
  removeScores: {
    kc: removeScores.kc,
    rk: removeScores.rk,
  },
  addPlayerScores: {
    kc: addPlayerScores.kc,
    rk: addPlayerScores.rk,
  },
  removePlayerScores: {
    kc: removePlayerScores.kc,
    rk: removePlayerScores.rk,
  },
};
