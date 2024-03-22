const defaultTheme = require('tailwindcss/defaultTheme')
const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
        './src/**/*.js',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',

    ],
    // darkMode: 'media',
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        nextui(),
    ],
}
