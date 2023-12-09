/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/*.html","./*.html"],
  theme: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-debug-screens')
  ],
}

