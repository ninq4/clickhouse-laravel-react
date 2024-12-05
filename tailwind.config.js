import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
                padding: "15px",
            },
            boxShadow: {
                inset: "inset 0 0 10px 0 rgba(0, 0, 0, 0.05)",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },

    plugins: [forms],
};
