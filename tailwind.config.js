/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./src/**/*.{html,js,tsx}', './components/**/*.{html,js,tsx}', './pages/**/*.{html,js,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                cairo: ['Cairo', 'opens-sans']
            }
        }
    },
    plugins: []
};
