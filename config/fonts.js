const fontsConfig = {
    // vite-plugin-fonts config object: https://www.npmjs.com/package/vite-plugin-fonts
    webfonts: {
        download: 
            {
                google: {
                    families: [
                        {
                            name: 'Merriweather',
                            styles: 'wght@900',
                            defer: true,
                        },
                        {
                            name: 'Rubik',
                            styles: 'wght@400;500',
                            defer: true,
                        },
                    ],
                },
            },
        inlineStyles: {},
    }
}

export { fontsConfig }
