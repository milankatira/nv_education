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
        'main-bg': '#f3f4f6',
        'regal-blue': '#249999',
        'regal-blue-light': '#2db2b2',
      },
      backgroundImage: {
        'c1': "url('/c1.jpg')",
        'c2': "url('/c2.jpg')",
        'c3': "url('/c3.jpg')",

        'main-bg': "url('/mail_bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
};
