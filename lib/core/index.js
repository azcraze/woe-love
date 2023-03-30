// ./../core
const path = require('path')
/* ------------------- Paths ------------------ */

const DIR_INDEX = './lib/core/index'
const MODULE_ENTRY = './lib/core/index'

const check = require('./check')
const scoresHandler = require('./scoresHandler');


/* //////////////////////////////////////////// */
/*                    EXPORTS                   */
/* //////////////////////////////////////////// */

module.exports = {
    DIR_INDEX,
    MODULE_ENTRY,
    addScores: scoresHandler.addScores,
    removeScores: scoresHandler.removeScores,
    argCount: check.argCount,
    sanitize: check.sanitize,
    check,

}

console.log(check.scores)
