// ./../err
/* ------------------- Paths ------------------ */
const PKG_ROOT = './../';
const PKG_ENTRY = './../index.js'


/* //////////////////////////////////////////// */
/*                    EXPORTS                   */
/* //////////////////////////////////////////// */

module.exports = {
    PKG_ROOT,
    PKG_ENTRY,
    log: require('./consoleLog').log,
    errMsg: require('./errorMessages').errMsg,
    errors: require('./errorMessages').errors,
    errHelp: require('./errorMessages').errHelp,
    logger: require('./handler').logger,
    is: require('./typeChecking').is,
}
