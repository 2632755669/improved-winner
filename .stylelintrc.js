module.exports = {
  root: true,
  extends: '@block/eslint-config/stylelint',
  rules: {
    "rule-empty-line-before": [
      "always",
      { except: [ "after-single-line-comment", "first-nested" ] }
  ],
  }
};