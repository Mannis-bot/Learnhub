/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#8C4AF2',
      'blue': '#6B56F6',
      'orange': '#F4901F',
      'red': '#FF394B',
      'black': '#1D1B23',
      'green': '#5DF888',
      'lightGreen': '#1BD084',
      'white': '#DFDBFF',
      'background': '#F8F7FF',
      'pure': '#FFF',
      'bgImage': '#F2F7FF',
      'eventOne': '#ECEDFF',
      'eventTwo': '#D8F8E9'
      
    },
    extend: {
      borderRadius:{
        custom: '61% 39% 64% 36% / 30% 28% 72% 70% ',
        event: '34% 66% 31% 69% / 63% 30% 70% 37%  '
      }
    },
  },
  plugins: [],
}

