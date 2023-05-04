

module.exports = {
  lb: {
    format: require('./formatAndSortScores').transformScores,
    sort: require('./formatAndSortScores').sortScores,
    generate: require('./formattedLb').formatLeaderboard
  },
  leaderboard: require('./leaderboard').leaderboard
};
