// ./../core
/* ------------------- Paths ------------------ */

// const input = require("./input");
const scoresHandler = require("./scoresHandler");

/* //////////////////////////////////////////// */
/*                    EXPORTS                   */
/* //////////////////////////////////////////// */

module.exports = {
  scores: {
    add: scoresHandler.addScores,
    remove: scoresHandler.removeScores,
    addPlayer: scoresHandler.addPlayerScores,
    remmovePlayer: scoresHandler.removePlayerScores,
  },
  lb: {
    player: require('./playerScores').lb,
    global: require('./leaderboards').leaderboard,
  },
  check: require('./input').check,
  logs: require("./inputLogs").addToInputLog,
  get: require('./getters').get,
  
};
