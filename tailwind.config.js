module.exports = {
    mode: 'jit',
    purge: ['./_site/**/*.{html,js,jsx,tsx,svg,md}'],
    darkMode: false, // or 'media' or 'class'
    corePlugins: {
        preflight: true,
    },
    theme: {
        extend: {
            colors: {
                primary: '#173854',
                'primary-shade': '#102538',
                'primary-glare': '#22547c',
                highlight: '#fedb8b',
                light: '#ffffff',
                mid: '#cccccc',
                dark: '#333333',
                slate: '#404040',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
