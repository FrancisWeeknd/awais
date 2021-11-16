#!/usr/bin/env node

const pkgJson = require("./package.json");
const welcome = require("cli-welcome");

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

console.log(`Francis - Who am I?`);
