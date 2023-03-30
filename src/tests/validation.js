const { check }  = require('../index.js');
const jsome = require('jsome');

check.scores('scores', 'POOKIE hello 15')
let res = check.scores('scores', 'POOKIE hello 15')
jsome(res);
