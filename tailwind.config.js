/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10' : '100%'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  safelist: [
    'w-1/10',
    'w-2/10',
    'w-3/10',
    'w-4/10',
    'w-5/10',
    'w-6/10',
    'w-7/10',
    'w-8/10',
    'w-9/10',
    'w-10/10' 
  ],
  plugins: [],
  darkMode: 'class',
}
