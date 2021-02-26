module.exports = {
  plugins: [
    'cssnext',
    'autoprefix',
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
    'cssnano'
  ],
};