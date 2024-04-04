/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  // content: ["'./**/*.html'"],
  purge: {
    content: ["./index.html"], // Add the path to your index.html file here
  },
  theme: {
    extend: {
      height: {
        'custom': '34rem'
      }
    },
  },
  plugins: [],
};
