module.exports = {
  extends: ['eslint-config-airbnb-base', 'plugin:prettier/recommended', 'plugin:react/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },

  env: {
    browser: true
  },

  parser: 'babel-eslint',

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['app/javascript', 'node_modules']
          }
        }
      }
    }
  }
};
