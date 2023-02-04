/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },

    extend: {
      colors: {
        primary: "#F4E041",
        secondary: "#00BDD3",
        background: "#F8F8F8",
        disabled: "#CCCCCC",
      },
    },

    backgroundImage: {
      hero: "url('images/readable-image-name-bg.jpeg')",
    },

    gridTemplateColumns: {
      "get-request": "repeat(auto-fill, minmax(295px, 1fr))",
    },
  },
  plugins: [],
};
