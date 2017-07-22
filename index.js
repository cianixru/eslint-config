const path = require('path');

const Rules = require('eslint/lib/rules');

Rules.load(path.join(__dirname, 'rules'));

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: [
    'babel',
    'eslint-comments',
    'no-use-extend-native',
    'prettier',
    'promise',
    'unicorn',
  ],
  rules: {
    // local rules
    'exports-last': 'error',
    // http://eslint.org/docs/rules
    complexity: ['error', {max: 11}],
    'max-depth': ['error', {max: 4}],
    'max-nested-callbacks': ['error', {max: 3}],
    'max-params': ['error', {max: 3}],
    'max-statements-per-line': ['error', {max: 1}],
    'max-statements': ['error', {max: 15}],
    'newline-before-return': 'error',
    'no-compare-neg-zero': 'error',
    'no-implicit-coercion': [
      'error',
      {boolean: false, number: true, string: true},
    ],
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    // https://github.com/babel/eslint-plugin-babel
    'babel/array-bracket-spacing': 'off',
    'babel/arrow-parens': 'off',
    'babel/flow-object-type': 'off',
    'babel/func-params-comma-dangle': 'off',
    'babel/generator-star-spacing': 'off',
    'babel/new-cap': 'off',
    'babel/no-await-in-loop': 'off',
    'babel/no-invalid-this': 'error',
    'babel/object-curly-spacing': 'off',
    'babel/object-shorthand': 'off',
    'babel/semi': 'off',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-use': [
      'error',
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
        ],
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-anonymous-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    // https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
    'no-use-extend-native/no-use-extend-native': 'error',
    // https://github.com/not-an-aardvark/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        semi: true,
      },
    ],
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/always-return': 'error',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'error',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/catch-error-name': 'off',
    'unicorn/custom-error-definition': 'off',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/no-abusive-eslint-disable': 'off', // in favor of `eslint-comments/no-unlimited-disable`
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/number-literal-case': 'off', // conflicts with prettier
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'off',
    'unicorn/throw-new-error': 'error',
  },
};
