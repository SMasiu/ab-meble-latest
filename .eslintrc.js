const ERROR = 'error'
const OFF = 'off'

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': OFF,
    'react/react-in-jsx-scope': OFF,
    'comma-dangle': OFF,
    eqeqeq: [ERROR, 'allow-null'],
    'import/imports-first': OFF,
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'max-len': [ERROR, 10000, 2],
    'no-console': [ERROR, { allow: ['warn', 'error'] }],
    'no-debugger': ERROR,
    'no-fallthrough': ERROR,
    'no-unreachable': ERROR,
    'no-unused-vars': [ERROR, { vars: 'all', args: 'none' }],
    'no-var': ERROR,
    'prefer-const': ERROR,
    'react/prop-types': OFF,
    semi: [ERROR, 'never']
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF
      }
    }
  ]
}
