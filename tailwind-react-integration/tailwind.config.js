// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  variants: {
    extend: {},
  },
  plugins: [],
};
