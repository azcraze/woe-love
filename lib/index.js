// ./core
/* ----------------------- External Modules ---------------------- */
var PrettyError = require('pretty-error');
var pe = new PrettyError();

/* ------------------- Paths ------------------ */
const PKG_ROOT = './../';
const PKG_ENTRY = './../index.js'


/* /////////////////////////////////////////////////////////// */
/*                          TOP LEVEL                          */
/* /////////////////////////////////////////////////////////// */
const core = require('./core');
const err = require('./err');
const filesystem = require('./filesystem');
const misc = require('./misc');
const store = require('./store');
const utils = require('./utils');

module.exports = {
    log: err.log,
    logger: err.logger,
    errors: err.errors,
    is: err.is,
}
