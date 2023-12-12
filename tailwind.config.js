/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.pug", "./views/layouts/*.pug"],
  theme: {
    extend: {
      colors: {
        primary: "#426B1F",
        secondary: "#FAFAF5",
      },
      backgroundImage: {
        main: 'url("/assets/main_bg.svg")',
        mail: 'url("/assets/Icon_mail.png")',
      },
    },
  },
  plugins: [],
}
