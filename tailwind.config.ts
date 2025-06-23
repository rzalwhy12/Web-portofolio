// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", // Add pages directory if it's a Next.js project
        "./components/**/*.{js,ts,jsx,tsx}", // Add components directory
        "./src/**/*.{js,ts,jsx,tsx}", // General src directory
        // Add any other directories where you use Tailwind classes
    ],
    theme: {
        extend: {
            letterSpacing: {
                'custom-tight': '-1px', // Defines 'tracking-custom-tight' utility
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'], // Define Poppins font family
            },
        },
    },
    plugins: [],
};

export default config;