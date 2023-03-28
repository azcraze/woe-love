const sani = require('./sanitizeInput');

function kc(input) {
  let data = sani.splitBySpaces(input);

  data[0] = sani.lowercaseString(data[0]);
  data[1] = sani.parseNumber(data[1]);
  data[2] = sani.parseNumber(data[2]);
  return data;
}
  
function rk(input) {
  let data = sani.splitBySpaces(input);
  let countArgs = data.length;
  let res = ''

  if (3 === countArgs) {
    data[0] = sani.lowercaseString(data[0]);
    data[1] = sani.parseNumber(data[1]);
    data[2] = sani.parseNumber(data[2]);
    res = data;

  } else {
    data[0] = sani.lowercaseString(data[0]);
    data[1] = sani.parseNumber(data[1]);
    data[2] = sani.parseNumber(0);
    res = data;
    
  }
  return res;
}


module.exports = {
  kc,
  rk,
};
  