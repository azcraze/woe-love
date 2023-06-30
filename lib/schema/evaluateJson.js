const { readAndParseFile } = require("../readAndParseJson");
const { paths } = require("../paths");
const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const validate = ajv.compile(schema);

const data = readAndParseFile(paths.SK_VARS(id));

const valid = validate(data);

if (!valid) console.log(validate.errors);
