/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED3024",
        secondary: "#122466",
        greyBg: "#FAFAFA",
        greyBlack: "#393939",
        primaryLight: "#FDF1F1",
        secondaryLight: "#F1F3F9",
        greyDark: "#969696",
        danger: "#F35252",
        neutral60: "#A7AEB5",
      },
      boxShadow: {
        greyBox: "0px 3px 30px rgba(226, 226, 226, 0.16)",
        greyLightBox: "0px 3px 20px 0px rgba(240, 239, 239, 0.25)",
      },
    },
  },
  plugins: [],
};
