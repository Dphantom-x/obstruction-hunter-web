export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'oswald': ['Oswald', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                'brand-red': '#EC1C24',
                'brand-offwhite': '#f0f2f1',
            }
        },
    },
    plugins: [],
}
