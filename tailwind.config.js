/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['var(--font-ubuntu)']
      },
      backgroundImage: {
        'pattern-mobile': "url('/assets/images/bg-sidebar-mobile.svg')",
        'pattern-desktop': "url('/assets/images/bg-sidebar-desktop.svg')"
      }
    },
  },
  plugins: [],
}

