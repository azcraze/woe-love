  // ./lib/core/scoresHandler/index.js
  /* ------------------- Paths ------------------ */
  
  const DIR_INDEX = './lib/core/scoresHandler/index';
  const MODULE_ENTRY = './lib/core/index';
  
const addScores = require('./addScores');
const removeScores = require('./removeScores');


module.exports = {
    DIR_INDEX,
    MODULE_ENTRY,
  addScores,
  removeScores,
};
