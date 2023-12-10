/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.pug"],
  theme: {
    extend: {
      colors: {
        primary: "#426B1F",
        secondary: "#FAFAF5",
      },
      backgroundImage: {
        main: 'url("/assets/main_bg.svg")',
        typescript: 'url("/assets/Icon_typescript.svg")',
        next: 'url("/assets/Icon_nextjs.svg")',
        pug: 'url("/assets/Icon_pug.svg")',
        svelte: 'url("/assets/Icon_svelte.svg")',
        react: 'url("/assets/Icon_react.svg")',
        tailwind: 'url("/assets/Icon_tailwind.svg")',
        mail: 'url("/assets/Icon_mail.svg")',
        // dapulja: 'url("/assets/Icon_mail.svg")',
      },
    },
  },
  plugins: [],
}
