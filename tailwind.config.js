module.exports = {
    mode: 'jit',
    purge: ['./_site/**/*.{html,js,jsx,tsx,svg,md}'],
    darkMode: false, // or 'media' or 'class'
    corePlugins: {
        preflight: true,
    },
    theme: {
        screens: {
            '2xl': '1440px',
            xl: '1279px',
            lg: '1023px',
            md: '767px',
            sm: '639px',
        },
        extend: {
            colors: {
                primary: '#222F33',
                secondary: '#656E71',
            },
            fontFamily: {
                body: [
                    'Rubik',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
                display: [
                    'Merriweather',
                    'ui-serif',
                    'Georgia',
                    'Cambria',
                    '"Times New Roman"',
                    'Times',
                    'serif',
                ],
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
