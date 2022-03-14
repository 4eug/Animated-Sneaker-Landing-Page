module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
