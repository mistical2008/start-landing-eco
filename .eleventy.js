// const { inputDirName } = require('./config/paths');
const { inputPath } = require('./config/paths');

// console.log(JSON.stringify(paths, null, 2))

module.exports = function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy({ [`${inputPath}/styles`]: 'styles' });
    // eleventyConfig.addPassthroughCopy({ [`${inputPath}/scripts`]: 'scripts' });
    eleventyConfig.addPassthroughCopy({ [`${inputPath}/public/assets`]: 'assets' });
    eleventyConfig.addPassthroughCopy({ [`${inputPath}/public/static`]: '/' });

    return {
        htmlTemplateEngine: 'njk',
        dir: {
            input: inputPath,
        },
    };
};
