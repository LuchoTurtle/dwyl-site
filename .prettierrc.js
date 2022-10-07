module.exports = {
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true,
  "plugins": ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
  "importOrder": ["^react", "<THIRD_PARTY_MODULES>", "^utils", "^assets/(.*)$", "^[./]", ".css"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
}