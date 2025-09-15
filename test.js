const assert = require("assert");
const { normalizeNumber, toNumber } = require("./index");

// Test cases
const tests = [
  // Arabic
  { input: "٣٤٫٥", normalized: "34.5", number: 34.5 },
  { input: "١٢٣", normalized: "123", number: 123 },

  // Persian
  { input: "۱۲/۵۰", normalized: "12.50", number: 12.5 },
  { input: "۳۴/۷۸۹", normalized: "34.789", number: 34.789 },

  // Italian
  { input: "12,50", normalized: "12.50", number: 12.5 },
  { input: "0,99", normalized: "0.99", number: 0.99 },

  // Hindi (Devanagari)
  { input: "१२३.४५", normalized: "123.45", number: 123.45 },

  // Bengali
  { input: "৪৫৬/৭৮", normalized: "456.78", number: 456.78 },

  // Mixed digits
  { input: "٣۴/५6", normalized: "34.56", number: 34.56 },
];

tests.forEach(({ input, normalized, number }, idx) => {
  const norm = normalizeNumber(input);
  const num = toNumber(input);

  try {
    assert.strictEqual(norm, normalized, `normalizeNumber("${input}")`);
    assert.strictEqual(num, number, `toNumber("${input}")`);
    console.log(`✅ Test ${idx + 1} passed for input "${input}"`);
  } catch (err) {
    console.error(`❌ Test ${idx + 1} failed for input "${input}":`, err.message);
  }
});
