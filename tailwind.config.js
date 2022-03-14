module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "sneakers-lg": "96px",
      },
      fontFamily: {
        "sneakers-montserrat": ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
