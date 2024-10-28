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
        primary: '605BFF',
        secondary: 'C2C0F0',
        alert: 'D11A2A',
        gray: '9A9AA9',
      },
      colors:{
        primary: '605BFF',
        secondary: 'C2C0F0',
        alert: 'D11A2A',
        alertLight: 'FBE9EA',
        gray: '9A9AA9',
      }
    },
  },
  plugins: [],
}

