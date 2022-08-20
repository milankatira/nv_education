module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },

  theme: {
    extend: {
      colors: {
        'main-bg':"#f3f4f6",
        'regal-blue': '#249999',
        'regal-blue-light': '#2db2b2',
      },
    },
  },
  variants: {
    extend: {},
  },
};
