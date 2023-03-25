/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridRow: {
                'span-0.3': 'span .3 / span 6',
            },
        },
    },
    plugins: [],
};
