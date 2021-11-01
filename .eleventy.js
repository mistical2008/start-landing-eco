// const { inputDirName } = require('./config/paths');
const paths = require('./config/paths');

// console.log(JSON.stringify(paths, null, 2))

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('styles');
    eleventyConfig.addPassthroughCopy('scripts');
    eleventyConfig.addPassthroughCopy('public/assets');

    return {
        htmlTemplateEngine: 'njk',
        dir: {
            input: paths.inputPath,
        },
    };
};
