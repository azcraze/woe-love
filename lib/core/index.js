// ./../core
/* ------------------- Paths ------------------ */

// const input = require("./input");
const scoresHandler = require("./scoresHandler");

/* //////////////////////////////////////////// */
/*                    EXPORTS                   */
/* //////////////////////////////////////////// */

module.exports = {
  addScores: scoresHandler.addScores,
  removeScores: scoresHandler.removeScores,
  logs: require("./inputLogs"),
};
