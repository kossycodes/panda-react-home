/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'milk': '#FEFAEF',
      'black': '#000000',
      'black-sub': '#616161',
      'pinkbg': '#FFEACC',
      'pink': '#FF9800',
      'greybg': '#E9E9E9',
      'grey': '#bebebe',
      'icon': '#374957',
      'line': '#D2D2D2',
      'bluebg': '#7575FF',
      'greybg2': '#F6F6F6',
    },
    fontFamily: {
      space: ['Space Grotesk', 'sans-serif'],
      
    },
    
    extend: {},
  },
  plugins: [],
}

