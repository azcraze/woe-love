// ./lib/err


module.exports = {
  error: {
    messages: require("./errorMessages").errMsg,
    s: require("./errorMessages").errors,
    help: require("./errorMessages").errHelp,
  },

  logger: require("./handler").logger,
  is: require("./typeChecking").is,
  pe: require("./pretty-error").pe,
};
