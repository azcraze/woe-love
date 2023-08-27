const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Input Logs",
    type: "object",
    properties: {
        inputLog: {
            type: "array",
            items: {
                type: "array",
                items: {
                    type: "string",
                },
            },
        },
        dayLogs: {
            type: "object",
            patternProperties: {
                "^[0-9]{8}$": {
                    type: "object",
                    patternProperties: {
                        "^[a-zA-Z]+$": {
                            type: "array",
                            items: {
                                type: "integer",
                            },
                        },
                    },
                },
            },
        },
        weekLogs: {
            type: "object",
            patternProperties: {
                "^[0-9]{2}$": {
                    type: "object",
                    patternProperties: {
                        "^[a-zA-Z]+$": {
                            type: "array",
                            items: {
                                type: "integer",
                            },
                        },
                    },
                },
            },
        },
        monthLogs: {
            type: "object",
            patternProperties: {
                "^[0-9]{2}$": {
                    type: "object",
                    patternProperties: {
                        "^[a-zA-Z]+$": {
                            type: "array",
                            items: {
                                type: "integer",
                            },
                        },
                    },
                },
            },
        },
        yearLogs: {
            type: "object",
            patternProperties: {
                "^[0-9]{4}$": {
                    type: "object",
                    patternProperties: {
                        "^[a-zA-Z]+$": {
                            type: "array",
                            items: {
                                type: "integer",
                            },
                        },
                    },
                },
            },
        },
        allTimeLogs: {
            type: "object",
            patternProperties: {
                "^all$": {
                    type: "object",
                    patternProperties: {
                        "^[a-zA-Z]+$": {
                            type: "array",
                            items: {
                                type: "integer",
                            },
                        },
                    },
                },
            },
        },
    },
    required: [
        "inputLog",
        "dayLogs",
        "weekLogs",
        "monthLogs",
        "yearLogs",
        "allTimeLogs",
    ],
};

const validate = ajv.compile(schema);

const data = {
    dayLogs: {
        "04122023": {
            pookie: [485, 827, 1312],
            fierce: [1678, 2460, 4138],
        },
        "04132023": {
            fierce: [96, 122, 218],
            fishie: [1731, 4978, 6709],
            pookie: [37, 63, 100],
        },
        "04142023": {
            fishie: [82, 312, 394],
        },
        "04152023": {
            fierce: [487, 488, 975],
        },
        "04172023": {
            pookie: [221, 369, 590],
            fishie: [107, 174, 281],
        },
        "04182023": {
            fierce: [100, 86, 186],
        },
    },
    weekLogs: {
        15: {
            pookie: [522, 890, 1412],
            fierce: [2261, 3557, 5818],
            fishie: [1813, 5290, 7103],
        },
        16: {
            pookie: [221, 369, 590],
            fishie: [107, 174, 281],
            fierce: [100, 86, 186],
        },
    },
    monthLogs: {
        "04": {
            pookie: [743, 1259, 2002],
            fishie: [2361, 3643, 6004],
            fierce: [1920, 5464, 7384],
        },
    },
    yearLogs: {
        2023: {
            pookie: [743, 1259, 2002],
            fishie: [2361, 3643, 6004],
            fierce: [1920, 5464, 7384],
        },
    },
    allTimeLogs: {
        all: {
            pookie: [743, 1259, 2002],
            fishie: [2361, 3643, 6004],
        },
    },
};

const valid = validate(data);

if (!valid) console.log(validate.errors);
