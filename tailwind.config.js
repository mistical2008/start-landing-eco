const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./_site/**/*.{html,js,jsx,tsx,svg,md}'],
    darkMode: false, // or 'media' or 'class'
    corePlugins: {
        preflight: true,
    },
    theme: {
        screens: {
            sx: '480px',
            sm: '639px',
            md: '767px',
            lg: '1023px',
            xl: '1169px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                lg: '3rem',
                xl: '4rem',
            },
        },
        extend: {
            flexGrow: {
                full: '999',
                2: '2',
                3: '3',
            },
            boxShadow: {
                btn: '0 0 0 6px rgb(101, 110, 113, 1)',
            },
            colors: {
                primary: '#222F33',
                secondary: '#656E71',
            },
            zIndex: {
                '-10': '-10',
            },
            inset: {
                '-18': '-4.5rem',
                '-20': '-5rem',
                '-22': '-5.5rem',
            },
            minWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
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
