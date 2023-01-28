const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const invokeAction = require("./invokeAction");
const argv = yargs(hideBin(process.argv)).argv;

invokeAction(argv);
