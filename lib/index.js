// ./core
/* ----------------------- External Modules ---------------------- */
var PrettyError = require("pretty-error");
var pe = new PrettyError();

/* ------------------- Paths ------------------ */

/* /////////////////////////////////////////////////////////// */
/*                          TOP LEVEL                          */
/* /////////////////////////////////////////////////////////// */
const core = require("./core");
const err = require("./err");
const filesystem = require("./filesystem");
// const misc = require('./misc');
const store = require("./store");
const utils = require('./utils');

const check = require("./core").check;

module.exports = {
  core,
  err,
  filesystem,
  //    misc,
  store,
  utils,
  check,
};
