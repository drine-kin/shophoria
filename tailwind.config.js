/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
            fontWeight: {
                light: "300",
                regular: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
            },
            colors: {
                primary: "#E3462C", // Vibrant orange (buttons, hero background)
                secondary: "#F9D045", // Bright yellow (backgrounds, accents)
                accent: "#253239", // Dark background (footer/nav)
                surface: "#FFF8E7", // White cards and text backgrounds
                neutral: "#F4F4F4", // Light gray background,
            },
        },
    },
    plugins: [],
};
