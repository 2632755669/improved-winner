module.exports = {
  root: true,
  extends: '@block/eslint-config/stylelint',
  rules: {
    "rule-empty-line-before": [
      "always",
      { except: [ "after-single-line-comment", "first-nested" ] }
  ],
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen',
      ],
    },
  ],
  'declaration-block-trailing-semicolon': null,
  'no-descending-specificity': null,
  }
};