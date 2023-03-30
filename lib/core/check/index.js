  // ./lib/core/input/index.js
const path = require('path')
/* ------------------- Paths ------------------ */

const DIR_INDEX = './lib/core/check/index';
const MODULE_ENTRY = './lib/core/index';

module.exports = {
  DIR_INDEX,
  MODULE_ENTRY,
  scores: require('./checkScores'),
  argCount: require('./argCount'),
  sanitize: require('./sanitizeInput')
}


/* //////////////////////////////////////////// */
/*                    EXPORTS                   */
/* //////////////////////////////////////////// */
