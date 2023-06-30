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

module.exports = { schema };
