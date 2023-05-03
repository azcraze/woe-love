const gradient = require("gradient-string");
const jsome = require("jsome");
const { t } = require("typy");

function isMultiline(input) {
  if ("string" !== typeof input) {
    return false;
  }
  return input.includes("\n") || input.includes("\r");
}

const gradients = [
  "teen",
  "mind",
  "morning",
  "vice",
  "passion",
  "fruit",
  "instagram",
  "atlas",
  "retro",
  "summer",
  "pastel",
  "rainbow",
];

function singleLine(input) {
  // choose a random index from the array
  const randomIndex = Math.floor(Math.random() * gradients.length);

  // get the value at the random index
  const getGradient = gradients[randomIndex];

  switch (getGradient) {
    case "teen":
      console.log(gradient.teen(input));
      break;
    case "mind":
      console.log(gradient.mind(input));
      break;
    case "morning":
      console.log(gradient.morning(input));
      break;
    case "vice":
      console.log(gradient.vice(input));
      break;
    case "passion":
      console.log(gradient.passion(input));
      break;
    case "fruit":
      console.log(gradient.fruit(input));
      break;
    case "instagram":
      console.log(gradient.instagram(input));
      break;
    case "atlas":
      console.log(gradient.atlas(input));
      break;
    case "retro":
      console.log(gradient.retro(input));
      break;
    case "summer":
      console.log(gradient.summer(input));
      break;
    case "pastel":
      console.log(gradient.pastel(input));
      break;
    case "rainbow":
      console.log(gradient.rainbow(input));
      break;
    default:
      console.log(gradient.rainbow(input));
  }
}

function multiLine(input) {
  // choose a random index from the array
  const randomIndex = Math.floor(Math.random() * gradients.length);

  // get the value at the random index
  const getGradient = gradients[randomIndex];

  switch (getGradient) {
    case "teen":
      console.log(gradient.teen.multiline(input));
      break;
    case "mind":
      console.log(gradient.mind.multiline(input));
      break;
    case "morning":
      console.log(gradient.morning.multiline(input));
      break;
    case "vice":
      console.log(gradient.vice.multiline(input));
      break;
    case "passion":
      console.log(gradient.passion.multiline(input));
      break;
    case "fruit":
      console.log(gradient.fruit.multiline(input));
      break;
    case "instagram":
      console.log(gradient.instagram.multiline(input));
      break;
    case "atlas":
      console.log(gradient.atlas.multiline(input));
      break;
    case "retro":
      console.log(gradient.retro.multiline(input));
      break;
    case "summer":
      console.log(gradient.summer.multiline(input));
      break;
    case "pastel":
      console.log(gradient.pastel.multiline(input));
      break;
    case "rainbow":
      console.log(gradient.rainbow.multiline(input));
      break;
    default:
      console.log(gradient.rainbow.multiline(input));
  }
}

function log(input) {
  if (true === t(input).isObject) {
    jsome(input);
  } else if (false === isMultiline(input)) {
    singleLine(input);
  } else {
    multiLine(input);
  }
}

module.exports = { log };

/*
  let obj = { 
    "player": "pookie",
    "xp": 5000, 
    "skin": "Space Hunter" 
  }
  
  
  log(obj)
  */

