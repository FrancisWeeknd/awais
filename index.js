#!/usr/bin/env node

const pkgJson = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;
const twitterClr = chalk.hex( "#1da1f2" ).bold.inverse;
const githubClr = chalk.hex( "#6cc644" ).bold.inverse;
const dim = chalk.dim;

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

${githubClr(` GitHub `)} ${dim(`https://github.com/Francis`)}
${twitterClr(` Twitter `)} ${dim(`https://twitter.com`)}
`);

log( chalk.green.underline( `This is green` ) )

log()

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

const error = chalk.bold.red;
const warning = chalk.keyword("orange");

console.log(error("Error!"));
console.log(warning("Warning!"));