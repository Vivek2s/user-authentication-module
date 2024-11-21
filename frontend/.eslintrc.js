module.exports = {
    parserOptions: {
      parser: 'babel-eslint', // or '@babel/eslint-parser'
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'plugin:vue/vue3-essential', // or 'plugin:vue/essential' for Vue 2
      'eslint:recommended'
    ],
    rules: {
      'vue/multi-word-component-names': 'off' // if needed
    },
    env: {
      node: true, // Allows `process.env` to be recognized by ESLint
    },
  };
  