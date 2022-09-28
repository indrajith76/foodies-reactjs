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
          primary: "#4e2693",

          secondary: "#b2f989",

          accent: "#ff0fd3",

          neutral: "#171927",

          "base-100": "#DEE7ED",

          info: "#6EA6E2",

          success: "#26B55F",

          warning: "#EBBF0F",

          error: "#E94435",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
