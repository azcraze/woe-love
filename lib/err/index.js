// ./lib/err
/* ------------------- Paths ------------------ */

const DIR_INDEX = './lib/core/input/index';
const MODULE_ENTRY = './lib/err/index';

/* //////////////////////////////////////////// */
/*                    EXPORTS                   */
/* //////////////////////////////////////////// */

module.exports = {
    DIR_INDEX,
    MODULE_ENTRY,
    log: require('./consoleLog').log,
    errMsg: require('./errorMessages').errMsg,
    errors: require('./errorMessages').errors,
    errHelp: require('./errorMessages').errHelp,
    logger: require('./handler').logger,
    is: require('./typeChecking').is,
}
