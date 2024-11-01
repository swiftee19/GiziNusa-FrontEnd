/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui'],
      },
      textColor:{
        primary: '#605BFF',
        secondary: '#C2C0F0',
        alert: '#D11A2A',
        gray: '#9A9AA9',
        lightgray: '#ECEEF2',
        boldgray: '#52525b',
        lightblue:'#EBF8FE',
        blue:'#36B5EC',
        lightyellow:'#FAF1E5',
        yellow:'#DA8207',
        lightred:'#FDEAEA',
        red:'#E22626',
        lightgreen:'#EFFEF2',
        green:'#5BEF76',
      },
      colors:{
        primary: '#605BFF',
        secondary: '#C2C0F0',
        alert: '#D11A2A',
        alertLight: '#FBE9EA',
        gray: '#9A9AA9',
        offwhite: '#FAFAFB',
        lightgray: '#ECEEF2',
        boldgray: '#52525b',
        lightblue:'#EBF8FE',
        blue:'#36B5EC',
        lightyellow:'#FAF1E5',
        yellow:'#DA8207',
        lightred:'#FDEAEA',
        red:'#E22626',
        lightgreen:'#EFFEF2',
        green:'#5BEF76',
      },
      backgroundColor:{
        thinOverlay: 'rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}

