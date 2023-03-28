/* --------------- Pretty Errors -------------- */
var PrettyError = require('pretty-error');
var pe = new PrettyError();
require('requireindex')
require('dotenv').config()

/* ------------- Packages ------------ */

const { core, err, filesystem, misc, store, utils } = require('./lib')




/* ------------------- Paths ------------------ */
const PKG_ROOT = './';
const PKG_ENTRY = './index'


/* ------------------- Misc ------------------- */

const duck = `  __
<(o )___
 ( ._> /
  \`---'
`;


module.exports = {
    duck,
    PKG_ROOT,
    PKG_ENTRY,
    log: err.log,
    logger: err.logger,
    errors: err.errors,
    is: err.is,
    check: core.check,    
    addScores: core.addScores,
    removeScores: core.removeScores,
    argCount: core.argCount,
    sanitize: core.sanitize,
}
