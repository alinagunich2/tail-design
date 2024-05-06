/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      borderRadius: {
        'br100':'100px',
        'br62px':'62px'
      },
      borderWidth:{
        '1px':'1px'
      }
    },
  },
  plugins: [],
}

