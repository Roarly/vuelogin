module.exports = {
  mode: 'jit',
  purge:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      minHeight: {
        "screen-nonav" : "calc(100vh - 88px)"
      }
    },
  },
  plugins: [],
};
