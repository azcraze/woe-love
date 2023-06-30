const formatAndSortScores = require("./formatAndSortScores");
const formattedLb = require("./formattedLb");


module.exports = {
  lb: {
    format: formatAndSortScores.transformScores,
    sort: formatAndSortScores.sortScores,
    generate: formattedLb.formatLeaderboard,
  }
}