/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
    },
    colors: {
      'biru' : '#4D44B5',
      'orange' : '#FB7D5B',
      'biru-font' : '#303972',
      'abu-font' : '#C1BBEB',
      'abu' : '#A098AE',
      'kuning' : '#FCC43E',
      'background-color' : '#F3F4FF',
      'merah' : '#C70039',
      'hijau' : '#186F65'
    }
  },
  // plugins: [require("daisyui")],
  // daisyui: {
  //   themes: false
  // }
}