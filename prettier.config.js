module.exports = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
    bracketSpacing: true,
    overrides: [
        {
            files: ['*.js', '*.html', '*.njk', '*.nj'],
            options: {
                tabWidth: 4,
                printWidth: 80,
            },
        },
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            options: {
                printWidth: 80,
                semi: true,
            },
        },
    ],
};
