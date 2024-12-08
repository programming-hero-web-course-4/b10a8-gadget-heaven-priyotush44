/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sora: ["Sora", "sans-serif"] },
      colors: {
        "base-100": "rgb(255, 255, 255)",
        "base-200": "rgb(247, 247, 247)",
        "base-300": "rgba(9, 8, 15, 0.05)",
        "base-content": "rgb(11, 11, 11)",
        "base-content-secondary": "rgba(9, 8, 15, 0.6)",
        "card-content": "rgb(9, 8, 15)",
        "card-content-secondary": "rgba(9, 8, 15, 0.6)",
        primary: "rgb(149, 56, 226)",
        "primary-content": "rgb(255, 255, 255)",
        "banner-content": "rgb(255, 255, 255)",
        "banner-content-secondary": "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [require("daisyui")],
};
