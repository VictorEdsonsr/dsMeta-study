/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "476px",
      // => @media (min-width: 640px) { ... }

      md: "576px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 768px) { ... }
    },
  },
  plugins: [],
};
