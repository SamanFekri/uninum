# Uninum

**Normalize and convert numerals from multiple languages/scripts into English digits.**  

`uninum` is a lightweight Node.js library that allows you to handle numbers written in various numeral systems (Arabic, Persian, Hindi, Bengali, and more), including mixed scripts, and convert them to standard English digits with proper decimal handling.

---

## ✨ Features

- Convert numerals from multiple languages to English digits:
  - Arabic (٠١٢٣٤٥٦٧٨٩)
  - Persian/Urdu (۰۱۲۳۴۵۶۷۸۹)
  - Hindi/Devanagari (०१२३४५६७८९)
  - Bengali (০১২৩৪৫৬৭৮৯)
  - Extendable to more scripts via JSON mapping
- Handles decimal points in different locales:
  - `٫` Arabic
  - `/` Persian
  - `,` Italian/European
- Ignores thousands separators
- Supports mixed numeral strings
- Easy to extend: just add JSON files to `numeralMaps/`

---

## 📦 Installation

```bash
npm install uninum
```

## 🚀 Usage

```javascript
const { normalizeNumber, toNumber } = require("uninum");

// Arabic
console.log(normalizeNumber("٣٤٫٥")); // "34.5"
console.log(toNumber("٣٤٫٥"));        // 34.5

// Persian
console.log(normalizeNumber("۱۲/۵۰")); // "12.50"
console.log(toNumber("۱۲/۵۰"));        // 12.5

// Italian
console.log(normalizeNumber("12,50")); // "12.50"
console.log(toNumber("12,50"));        // 12.5

// Mixed numerals
console.log(normalizeNumber("٣۴/५6")); // "34.56"
console.log(toNumber("٣۴/५6"));        // 34.56
```

## 🤝 Contributing / Collaboration

We welcome contributions! You can help by:

1. Suggesting a new feature
  - Open an issue on GitHub: https://github.com/SamanFekri/uninum/issues

2. Submitting improvements
  - Fork the repository
  - Make your changes
  - Open a pull request

3. Contacting the maintainer directly

