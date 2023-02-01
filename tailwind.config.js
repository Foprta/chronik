/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./shared/**/*.vue",
    "./entities/**/*.vue",
    "./features/**/*.vue",
    "./widgets/**/*.vue",
    "./pages/**/*.vue",
    "./app/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
