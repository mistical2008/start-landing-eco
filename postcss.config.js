// const { inputDir, outputDir } = require('./config/paths');

module.exports = (ctx) => {
    console.log('\npostcss-context', ctx);
    return {
        // syntax: 'postcss-scss',
        // parser: 'postcss-scss',
        plugins: [
            require('tailwindcss'),
            // require('postcss-import')({
            //     plugins: [
            //         // require('postcss-preset-env'),
            //         require('stylelint'),
            //         require('postcss-sorting'),
            //         require('postcss-browser-reporter'),
            //     ],
            // }),

            // require('postcss-google-font'),
            // require('postcss-color-alpha'),
            // require('postcss-easysprites')({
            //   imagePath: `./${inputDir}/assets/sprites`,
            //   spritePath: `./${outputDir}/assets/images`,
            // }),
            // require('postcss-focus'),

            require('postcss-pxtorem')({ replace: false }), // rem as fallback
            // require('postcss-custom-properties'),
            // require('postcss-color-rgba-fallback'),
            // require('postcss-flexbugs-fixes'),
            // require('postcss-will-change-transition'),
            // require('postcss-will-change'),
            // require('postcss-calc'),
            require('postcss-viewport-height-correction'),
            require('postcss-fluidvars')({ namespace: 'fv' }),
            require('autoprefixer'),
            require('postcss-browser-reporter'),
        ],
    };
};
