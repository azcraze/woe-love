const { t } = require("typy");
const { log } = require("woelogs");

// EXAMPLE - uncomment examples uses under each function
/* const hi = {
  imHere: "hi",
  NA: null,
  empty: '',
  booli: false,
  num: 100,
  emptyObj: {},
  array: [[ 1, 2, 3 ], []],
  emptyArr: [],
}; */

function defined(inputObject) {
  const res = t(inputObject).isDefined;

  if (res) {
    log("Input is defined!");
  } else {
    log("Input is not defined!");
  }

  return res;
}

// defined(hi.imHere)
// defined(hi.imNotHere)

function notDefined(inputObject) {
  const res = t(inputObject).isUndefined;

  if (res) {
    log("Input is undefined!");
  } else {
    log("Input is not undefined!");
  }

  return res;
}

// notDefined(hi.imHere)
// notDefined(hi.imNotHere)

function na(inputObject) {
  const res = t(inputObject).isNull;

  if (res) {
    log("Input is null!");
  } else {
    log("Input is not null!");
  }

  return res;
}

// na(hi.NA)
// na(hi.imHere)

function notSet(inputObject) {
  const res = t(inputObject).isNullOrUndefined;

  if (res) {
    log("Input is null or undefined!");
  } else {
    log("Input is not null or undefined!");
  }

  return res;
}

// notSet(hi.NA)
// notSet(hi.imHere)

function boolean(inputObject) {
  const res = t(inputObject).isBoolean;

  if (res) {
    log("Input is boolean!");
  } else {
    log("Input is not boolean!");
  }

  return res;
}

// boolean(hi.booli)
// boolean(hi.imHere)

function positive(inputObject) {
  const res = t(inputObject).isTrue;

  if (res) {
    log("Input is true!");
  } else {
    log("Input is not true!");
  }
  return res;
}

// const trueTest = boolean(hi.booli)

// positive(trueTest)
// positive(true)
// positive(hi.booli)

function negative(inputObject) {
  const res = t(inputObject).isFalse;

  if (res) {
    log("Input is false!");
  } else {
    log("Input is not false!");
  }
  return res;
}

// const falseTest = boolean(hi.booli)

// negative(false)
// negative(falseTest)

function truthy(inputObject) {
  const res = t(inputObject).isTruthy;

  if (res) {
    log("Input is truthy!");
  } else {
    log("Input is not truthy!");
  }
  return res;
}

// truthy(true)
// truthy(hi)
// truthy(1)
// truthy({})
// truthy([])
// truthy('')
// truthy(hi.booli)
// truthy(hi.empty)
// truthy(false)

function falsy(inputObject) {
  const res = t(inputObject).isFalsy;

  if (res) {
    log("Input is falsy!");
  } else {
    log("Input is not falsy!");
  }
  return res;
}

// falsy(false)
// falsy(0)
// falsy('')
// falsy(hi.booli)
// falsy(hi.empty)
// falsy(hi)
// falsy(1)
// falsy({})
// falsy([])

function obj(inputObject) {
  const res = t(inputObject).isObject;

  if (res) {
    log("Input is an object!");
  } else {
    log("Input is not an object!");
  }
  return res;
}

// obj(hi)
// obj({})
// obj([])

function emptyObj(inputObject) {
  const res = t(inputObject).isEmptyObject;

  if (res) {
    log("Input is an empty object!");
  } else {
    log("Input is not an empty object!");
  }
  return res;
}

// emptyObj(hi.emptyObj)
// emptyObj(hi)

function string(inputObject) {
  const res = t(inputObject).isString;

  if (res) {
    log("Input is a string!");
  } else {
    log("Input is not a string!");
  }
  return res;
}

// string("hello");
// string(hi.imHere)
// string(hi)

function emptyString(inputObject) {
  const res = t(inputObject).isEmptyString;

  if (res) {
    log("Input is an empty string!");
  } else {
    log("Input is not an empty string!");
  }
  return res;
}

// emptyString(hi.empty)
// emptyString('')
// emptyString(hi.imHere)

function number(inputObject) {
  const res = t(inputObject).isNumber;

  if (res) {
    log("Input is a number!");
  } else {
    log("Input is not a number!");
  }
  return res;
}

// number(1);
// number(1+1)
// number(3542.88)
// number(43875728957928743698720896780200979)
// number(hi.num)
// number(hi)
// number(hi.imHere)
// number("one")

function arr(inputObject) {
  const res = t(inputObject).isArray;

  if (res) {
    log("Input is an array!");
  } else {
    log("Input is not an array!");
  }
  return res;
}

// arr([ 1,2,3 ])
// arr(hi.emptyArr)
// arr([[ 1,2,3 ],[ 1,2,3 ]])
// arr(hi)
// arr(hi.booli)

function emptyArr(inputObject) {
  const res = t(inputObject).isEmptyArray;

  if (res) {
    log("Input is an empty array!");
  } else {
    log("Input is not an empty array!");
  }
  return res;
}

// emptyArr(hi.emptyArr)
// emptyArr(hi.array[1])
// emptyArr([])
// emptyArr(hi)
// emptyArr([ 1,2,3 ])

function fn(inputObject) {
  const res = t(inputObject).isFunction;

  if (res) {
    log("Input is a function!");
  } else {
    log("Input is not a function!");
  }
  return res;
}

// fn(arr)
// fn(arr([ 1,2,3 ]))
// fn(hi)

function date(inputObject) {
  const res = t(inputObject).isDate;

  if (res) {
    log("Input is a date!");
  } else {
    log("Input is not a date!");
  }
  return res;
}

// date(new Date())
// date("December 06, 2023")

module.exports = {
  is: {
    defined,
    undefined: notDefined,
    null: na,
    notSet,
    boolean,
    true: positive,
    false: negative,
    truthy,
    falsy,
    obj,
    emptyObj,
    string,
    emptyString,
    number,
    arr,
    emptyArr,
    fn,
    date,
  },
};
