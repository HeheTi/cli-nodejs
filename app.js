const invokeAction = require("./invokeAction");
const { program } = require("commander");

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type")
  .option("-e, --email <type")
  .option("-p, --phone <type");

program.parse(process.argv);

const options = program.opts();

invokeAction(options);
