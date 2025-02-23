/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sora: ["Sora", "sans-serif"],
                adlam: ["ADLaM Display", "sans-serif"],
            },
            colors: {
                btn: "#179800",
                ash: "#EFEBE3"
            },
        },
    },
    plugins: [],
}