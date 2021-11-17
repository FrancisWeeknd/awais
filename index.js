#!/usr/bin/env node

const pkgJson = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;
const twitterClr = chalk.hex("#1da1f2").bold.inverse;
const githubClr = chalk.hex("#6cc644").bold.inverse;
const dim = chalk.dim;
const sym = require("log-symbols");
const alert = require("cli-alerts-francis");
const checkNode = require("cli-check-node");

/**
 * Alerts
 */

const error = chalk.bold.red;
const warning = chalk.keyword("orange");
const success = chalk.green;
const info = chalk.blue;

checkNode("17", { fail: false }); // Fails the script if current node version is less than 17.

welcome({
  title: `${pkgJson.name}`,
  tagLine: `Howdy, nice to meet you`,
  description: `${pkgJson.description}`,
  version: `${pkgJson.version}`,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`
${chalk.bgBlue.bold(` Francis - Ordinary guy `)}

${chalk.italic(`I have no clue where my life is heading!`)}

${githubClr(`  GitHub `)} ${dim(`https://github.com/Francis`)}
${twitterClr(` 🐦 Twitter `)} ${dim(`https://twitter.com`)}
`);

log(chalk.green.underline(`This is green`));

log();

// ES2015 template literal
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

console.log(error("Error!"));
console.log(warning("Warning!"));

console.log(`
${sym.success} ${success(`SUCCESS`)}: Thanks for checking out my CLI.
${sym.info} ${info(`INFO`)}: I'm creating a course on NodeCLI.com.
${sym.warning} ${warning(`WARNING`)}: Please don't copy me. Be yourself.
${sym.error} ${error(`ERROR`)}: I'm on vacation. Contact me next week.
`);

alert({
  type: `success`,
  msg: `Everything finished!`,
  name: `DONE`,
});
