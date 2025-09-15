#!/usr/bin/env node
const { normalizeNumber, toNumber } = require("./index");

// Get input from command-line arguments
const input = process.argv[2];

if (!input) {
  console.error("Usage: uninum <number-string>");
  process.exit(1);
}

// Print normalized number
console.log(toNumber(input));
