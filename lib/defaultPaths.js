"use strict";
require("rootpath")();


const { PATHS, DIRS } = require("./constants");
const DEFAULT_KC_SCORES_PATH = PATHS.KC_SCORES;
const DEFAULT_RK_SCORES_PATH = PATHS.RK_SCORES;
const DEFAULT_SK_VARS_PATH = PATHS.SK_VARS;

/**
 * Returns the default path based on the provided keyword.
 * @param {string} keyword - The keyword to determine the default path.
 * @returns {string} - The default path for the given keyword.
 */
function defaultPath(keyword) {
  // Check if the keyword matches 'rk'
  if ("rk" === keyword) {
    // Return the default path for RK scores
    return DEFAULT_RK_SCORES_PATH;
  }
  // Check if the keyword matches 'kc'
  else if ("kc" === keyword) {
    // Return the default path for KC scores
    return DEFAULT_KC_SCORES_PATH;
  }
  // If the keyword doesn't match 'rk' or 'kc', assume it matches 'sk'
  else {
    // Return the default path for SK vars
    return DEFAULT_SK_VARS_PATH;
  }
}

module.exports = {
  defaultPath,
  PATHS: PATHS,
  DIRS: DIRS,

};


// EXAMPLE - simple consolelog output

// const { log } = require("woelogs");

// console.log(defaultPath("rk"));
