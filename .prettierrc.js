module.exports = {
  singleQuote: true,
  useTabs: false,
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  htmlWhitespaceSensitivity: 'strict',
  arrowParens: 'avoid',
  bracketSpacing: true,
  proseWrap: 'preserve',
  trailingComma: 'none',
  endOfLine: 'auto',
  requirePragma: false,
  rangeStart: 0,
  quoteProps: "as-needed",
  insertPragma: false,
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "html"
      }
    },
    {
      files: "*.component.html",
      options: {
        parser: "angular"
      }
    }
  ]
};
