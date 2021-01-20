module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-normalize"),
    require("postcss-nested"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
  ],
};
