/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  theme: {
    extend: {
      screens: {
        default: "0px",
        mobile: "480px",   // Small mobile devices
        tablet: "768px",   // Tablets
        laptop: "1024px",  // Laptops
        desktop: "1280px", // Desktops
      },
    },
  },
  plugins: [require("daisyui")],
};
