const chance = require("chance").Chance();

function printStabs(stabs) {
  const unitLength = 5; // length of each unit (i.e. "stab! ")
  const delay = 20; // delay between printing stabs, in milliseconds
  let i = 0;
  const printInterval = setInterval(() => {
    process.stdout.write(stabs.slice(i * unitLength, (i + 1) * unitLength));
    i++;
    if (i === stabs.length / unitLength) {
      clearInterval(printInterval);
      console.log("\n");
    }
  }, delay);
}

function luck(minPain, maxPain) {
  return chance.natural({ min: minPain, max: maxPain });
}

const victim = "mad";
const weapon = "little crying girl sword";
const unit = "stab! ";

function madKiller(badLevel, harshnessDeserved = 5) {
  let punishment;

  switch (badLevel) {
    case "thinksHesFunny":
      punishment = luck(0, 2);
      break;
    case "unamused":
      punishment = luck(1, 4);
      break;
    case "butthead":
      punishment = luck(4, 10);
      break;
    case "jerk":
      punishment = luck(10, 18);
      break;
    case "asshole":
      punishment = luck(19, 29);
      break;
    case "6FeetUnder":
      punishment = luck(30, 60);
      break;
    default:
      punishment = "you're fucked";
  }
  let count = Number(punishment) * Number(harshnessDeserved);
  let stabs = unit.repeat(count);

  console.log(
    `killerkie is done dealing with you! you, ${victim} will now deal with my ${weapon}!!`
  );
  printStabs(stabs);
  return "\n";
}
console.log(madKiller("butthead", 3));
console.log("\n");
