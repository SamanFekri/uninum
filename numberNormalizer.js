const fs = require("fs");
const path = require("path");

// Load numeral maps from JSON files
function loadMaps(folder = path.join(__dirname, "numeralMaps")) {
  const files = fs.readdirSync(folder);
  let maps = {};

  for (const file of files) {
    if (file.endsWith(".json")) {
      const content = JSON.parse(
        fs.readFileSync(path.join(folder, file), "utf8")
      );
      maps = { ...maps, ...content };
    }
  }
  return maps;
}

const lookup = loadMaps();

/**
 * Normalize digits and separators into English equivalents.
 * @param {string} input
 * @returns {string}
 */
function normalizeNumber(input) {
  return input.split("").map((char) => lookup[char] ?? char).join("");
}

/**
 * Convert normalized string to a Number.
 * @param {string} input
 * @returns {number}
 */
function toNumber(input) {
  const normalized = normalizeNumber(input);
  const cleaned = normalized.replace(/[^0-9.-]/g, "");
  return parseFloat(cleaned);
}

module.exports = { normalizeNumber, toNumber };