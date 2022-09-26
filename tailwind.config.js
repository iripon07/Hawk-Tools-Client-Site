/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },


  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#056608",
          secondary: "#eab308",
          accent: "#111827",
          neutral: "#0e7490",
          "base-100": "#ffffff",
        },
      },
    ],
  },


  plugins: [require("daisyui")],
}
