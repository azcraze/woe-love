// ./../core
const path = require('path')
/* ------------------- Paths ------------------ */

const DIR_INDEX = './lib/core/index'
const MODULE_ENTRY = './lib/core/index'

const input = require('./input')
const scoresHandler = require('./scoresHandler');


/* //////////////////////////////////////////// */
/*                    EXPORTS                   */
/* //////////////////////////////////////////// */

module.exports = {
    DIR_INDEX,
    MODULE_ENTRY,
    addScores: scoresHandler.addScores,
    removeScores: scoresHandler.removeScores,
    argCount: input.argCount,
    sanitize: input.sanitize,
    check: input,

}
module.exports = require('requireindex')(__dirname);