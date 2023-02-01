module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  plugins: ["@typescript-eslint", "prettier"],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],

  rules: {
    "vue/script-setup-no-uses-vars": "off",
    "vue/multi-word-component-names": "off",
    "prettier/prettier": "warn",
  },
};
