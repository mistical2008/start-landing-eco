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
            sm: '639px',
            md: '767px',
            lg: '1023px',
            xl: '1279px',
            '2xl': '1440px',
        },
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
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
