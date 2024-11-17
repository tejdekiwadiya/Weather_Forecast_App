// tailwind.config.js
import scrollbar from 'tailwind-scrollbar'; // import the plugin

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    scrollbar(), // apply the plugin
  ],
};