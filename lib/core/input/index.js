// ./lib/core/input/index.js

module.exports = {
  check: {
    scores: require("./checkScores"),
    userExists: require("./checkUserExists").NameExists,
  },
  argCount: require("./argCount"),

};

/* //////////////////////////////////////////// */
/*                    EXPORTS                   */
/* //////////////////////////////////////////// */
