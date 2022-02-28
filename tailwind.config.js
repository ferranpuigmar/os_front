module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      hindi: ["hindregular", "sans-serif"],
      hindi_ligh: ["hindlight", "serif"],
      hindi_medium: ["hindmedium", "serif"],
      hindi_bold: ["hindsemibold", "serif"],
    },
    colors: {
      black: "#000",
      "black-light": "#333",
      green: "#8ED4AB",
      yellow: "#E2B800",
      white: "#fff",
    },
    screens: require("./config/breakpoints.config"),
    extend: {},
  },
  plugins: [],
};
